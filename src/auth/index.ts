import { AccessType, LoginResponse } from "../services/types";
import { ACCESS_TYPE_KEY, TOKEN_KEY } from "./constants";

export const storeUserData = async (data: LoginResponse) => {
  const { accessType, token } = data;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ACCESS_TYPE_KEY, accessType.toString());
};

export const removeUserData = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ACCESS_TYPE_KEY);
};

const isValidAccessType = (accessType: number) =>
  accessType >= 0 && accessType <= 3;

const getAccessTypeFromLocalStorage = () =>
  localStorage.getItem(ACCESS_TYPE_KEY);

export const getAccessType = () => {
  const accessType = +(getAccessTypeFromLocalStorage() ?? 0) as AccessType;
  return isValidAccessType(accessType) ? accessType : 0;
};

export const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN_KEY);

export const isTokenValid = () => !!getTokenFromLocalStorage();
