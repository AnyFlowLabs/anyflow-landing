export const APP_URL =
  process.env.NODE_ENV == "production"
    ? "https://app.anyflow.pro"
    : "https://app-staging.anyflow.pro";

export const API_URL =
  process.env.NODE_ENV == "production"
    ? "https://api.anyflow.pro"
    : "https://api-staging.anyflow.pro";

export const DOCS_URL = "https://docs.anyflow.pro";
