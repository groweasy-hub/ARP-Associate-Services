import { buildApiUrl } from "./api";

const CONTACT_ENDPOINT = buildApiUrl("/api/send-mail");

export const submitContactForm = async (payload) => {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.error || "Failed to send email.");
  }

  return data;
};
