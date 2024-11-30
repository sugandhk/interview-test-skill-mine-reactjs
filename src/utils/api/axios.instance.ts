import axios, { AxiosResponse, AxiosError } from "axios";

import { Env } from "../constant/env";

import { showAlert } from "../alertToast/alert";

/**
 * Creates an Axios instance with a base URL, timeout, and default headers.
 * The instance is configured to use credentials for cross-origin requests.
 */

export const $axios = axios.create({
  baseURL: Env.BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "EN",
    accept: "application/json",
    Platform: 4,
    Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
});


$axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle response
    return response;
  },
  (error: AxiosError | any) => {

    if (error?.response?.status !== 401) {
      if (error?.response?.data?.message) {
        showAlert(2, error?.response?.data?.message);
      }
    }

    return Promise.reject(error);
  }
);
