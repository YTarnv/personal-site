import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  withCredentials: false, // change to true if you use cookies later
});

export async function ping(): Promise<{ status: string }> {
  const res = await api.get("/healthz");
  return res.data;
}

export default api;