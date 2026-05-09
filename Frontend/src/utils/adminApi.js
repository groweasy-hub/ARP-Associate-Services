import { buildApiUrl } from "./api";

const ADMIN_STORAGE_KEY = "arp_admin_auth";

export const getStoredAdminAuth = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(ADMIN_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
    return null;
  }
};

export const storeAdminAuth = (auth) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(auth));
  }
};

export const clearAdminAuth = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
  }
};

const authHeaders = () => {
  const auth = getStoredAdminAuth();

  return {
    "Content-Type": "application/json",
    ...(auth?.token ? { Authorization: `Bearer ${auth.token}` } : {}),
  };
};

const parseJson = async (response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

export const loginAdmin = async (credentials) => {
  const response = await fetch(buildApiUrl("/api/auth/login"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Admin login failed.");
  }

  const auth = {
    token: data.token,
    admin: data.admin,
  };

  storeAdminAuth(auth);
  return auth;
};

export const fetchLeads = async () => {
  const response = await fetch(buildApiUrl("/api/leads"), {
    headers: authHeaders(),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Failed to load leads.");
  }

  return data?.leads || [];
};

export const updateLead = async (id, payload) => {
  const response = await fetch(buildApiUrl(`/api/leads/${id}`), {
    method: "PATCH",
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Failed to update lead.");
  }

  return data.lead;
};

export const fetchClients = async () => {
  const response = await fetch(buildApiUrl("/api/clients"), {
    headers: authHeaders(),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Failed to load clients.");
  }

  return data?.clients || [];
};

export const createClient = async (payload) => {
  const response = await fetch(buildApiUrl("/api/clients"), {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Failed to create client.");
  }

  return data.client;
};

export const updateClient = async (id, payload) => {
  const response = await fetch(buildApiUrl(`/api/clients/${id}`), {
    method: "PATCH",
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Failed to update client.");
  }

  return data.client;
};

export const addClientHistory = async (id, note) => {
  const response = await fetch(buildApiUrl(`/api/clients/${id}/history`), {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ note }),
  });

  const data = await parseJson(response);

  if (!response.ok) {
    throw new Error(data?.error || "Failed to update client history.");
  }

  return data.client;
};

export { ADMIN_STORAGE_KEY };
