// 0 não usuário
// 1 admin geral
// 2 admin de controladores
// 3 convidado
export type AccessType = 0 | 1 | 2 | 3;

// eslint-disable-next-line no-shadow
export enum AccessTypeLabel {
  Desativado,
  SuperAdmin,
  ControllerAdmin,
  Convidado,
}

export const getLabel = (accessType: AccessType) => {
  switch (accessType) {
    case 0:
      return "Desativado";
    case 1:
      return "Super Admin";
    case 2:
      return "Controller Admin";
    case 3:
      return "Convidado";
    default:
      throw new Error(`accessType not found: "${accessType}"`);
  }
};

interface BaseUser {
  username: string;
  accessType: AccessType;
  state: 0 | 1;
}

export interface User extends BaseUser {
  idx: number;
}

export interface AddUser extends BaseUser {
  password: string;
}

export interface DeleteUser {
  idx: number;
}

export interface Login {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  accessType: AccessType;
}

export interface Logout {
  token: string;
}

export interface ChangePassword {
  password: string;
  newPassword: string;
}
