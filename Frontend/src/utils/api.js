const LOCAL_API_BASE = "http://localhost:5000";

const normalizeBaseUrl = (value = "") => value.trim().replace(/\/+$/, "");

export const getApiBase = () => {
  const configuredBase = normalizeBaseUrl(
    process.env.REACT_APP_API_BASE || process.env.REACT_APP_MAIL_API || ""
  );

  if (configuredBase) {
    return configuredBase;
  }

  if (typeof window !== "undefined") {
    const { hostname } = window.location;

    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return LOCAL_API_BASE;
    }
  }

  return "";
};

export const buildApiUrl = (path) => `${getApiBase()}${path}`;
