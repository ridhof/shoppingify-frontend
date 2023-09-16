import axios from "axios";

export const api = axios.create({
    baseURL: "https://pleasant-plum-pinafore.cyclic.cloud/",
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);