export const API_URL = import.meta.env.VITE_MODE === "live"
    ? import.meta.env.VITE_LIVE_URL
    : import.meta.env.VITE_LOCAL_URL;
