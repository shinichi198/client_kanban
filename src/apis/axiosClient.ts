import axios from "axios";
import queryString from "query-string";
import { localDataNames } from "../constants/appInfo";
const baseURL = `http://192.168.1.11:3001`;

const getAccesstoken = () => {
  const res = localStorage.getItem(localDataNames.authData);
  return res ? JSON.parse(res).token : "";
};

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  const accesstoken = getAccesstoken();
  config.headers = {
    Authorization: `Bear ${accesstoken}`,
    Accept: "application/json",
    ...config.headers,
  };
  console.log(config);
  return { ...config, data: config.data ?? null };
});
axiosClient.interceptors.response.use(
  (res) => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  (error) => {
    const { response } = error;
    return Promise.reject(response.data);
  }
);
export default axiosClient;
