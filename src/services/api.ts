import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

import { getTokenFromLocalStorage } from "../auth";
import mockApi from "../mock";
import { kebabize } from "../utils";

const token = getTokenFromLocalStorage();
const headers = token ? { token } : undefined;

const api = applyCaseMiddleware(
  axios.create({
    baseURL: "/api",
    headers,
  }),
  {
    ignoreHeaders: true,
    caseFunctions: {
      snake: (input) => kebabize(input),
    },
  }
);

api.interceptors.request.use(
  (config) => {
    if (!!token) {
      Object.assign(config.headers?.common, { token });
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

if (process.env.NODE_ENV !== "production") {
  mockApi(api);
}

export default api;
