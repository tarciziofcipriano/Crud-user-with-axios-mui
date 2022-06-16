import api from "../api";
import {
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  PASSWORD_ROUTE,
  USER_ROUTE,
} from "../routes";
import {
  AddUser,
  ChangePassword,
  DeleteUser,
  Login,
  LoginResponse,
  Logout,
  User,
} from "../types";

export const getUsers = async () => api.get<User[]>(USER_ROUTE);

export const addUser = async (user: AddUser) =>
  api.post<void>(USER_ROUTE, user);

export const editUser = async (user: User) => api.put<void>(USER_ROUTE, user);

export const deleteUser = async (idx: DeleteUser) =>
  api.delete<void>(USER_ROUTE, { data: idx });

export const login = async (data: Login) =>
  api.post<LoginResponse>(LOGIN_ROUTE, data);

export const logout = async (token: Logout) =>
  api.post<void>(LOGOUT_ROUTE, token);

export const changePassword = async (data: ChangePassword) =>
  api.put<void>(PASSWORD_ROUTE, data);
