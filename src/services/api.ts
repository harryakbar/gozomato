import axios from "axios";

const instance = axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  timeout: 30000,
  responseType: "json",
});

// TODO: use variable from env
instance.defaults.headers.common["user-key"] =
  "e21bb6db01d6feaa5aec64e5f0b8b20e";

export default instance;

export async function getRestaurants(params: { q: string }) {
  return instance.get("/search", { params });
}
