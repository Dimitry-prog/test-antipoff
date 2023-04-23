import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "../utils/constants.ts";
import { TAxiosKnownError } from "../types";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const handleRequest = async (reqFn: Promise<AxiosResponse<any>>, reject: (value: string) => string | unknown) => {
  try {
    const { data } = await reqFn;

    return data;
  } catch (e) {
    const error = e as AxiosError<TAxiosKnownError>;
    const errorMessage: string = error.response?.data.message || String(error);
    return reject(errorMessage);
  }
}