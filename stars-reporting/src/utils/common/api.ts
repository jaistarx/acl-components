import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL ?? "",
});

export const createCancelToken = () => {
  const source = axios.CancelToken.source();
  return { source, cancelToken: source.token };
};

export default axiosInstance;
