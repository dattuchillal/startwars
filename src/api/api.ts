import axios, { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

const axiosParams: CreateAxiosDefaults = {
  baseURL: process.env.REACT_APP_API_URL,
};

const axiosInstance = axios.create(axiosParams);

export const api = {
  get: <T>(url: string, config: AxiosRequestConfig = {}) => axiosInstance.get<T>(url, config),
  post: <T>(url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.post<T>(url, data, config),
  put: <T>(url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.put<T>(url, data, config),
  patch: <T>(url: string, data = {}, config: AxiosRequestConfig = {}) =>
    axiosInstance.patch<T>(url, data, config),
  delete: <T>(url: string, config: AxiosRequestConfig = {}) => axiosInstance.delete<T>(url, config),
};
