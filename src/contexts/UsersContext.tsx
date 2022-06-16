import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

import { User } from "../services/types";

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersData {
  userToEdit: User | undefined;
  userToRemove: User | undefined;
  users: User[];
  setUserToEdit: Dispatch<SetStateAction<User | undefined>>;
  setUserToRemove: Dispatch<SetStateAction<User | undefined>>;
  setUsers: Dispatch<SetStateAction<User[]>>;
}

export const UsersContext = createContext({} as UsersData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [userToEdit, setUserToEdit] = useState<User>();
  const [userToRemove, setUserToRemove] = useState<User>();

  const UsersProviderValue = useMemo(
    () => ({
      userToEdit,
      userToRemove,
      users,
      setUserToEdit,
      setUserToRemove,
      setUsers,
    }),
    [userToEdit, userToRemove, users]
  );

  return (
    <UsersContext.Provider value={UsersProviderValue}>
      {children}
    </UsersContext.Provider>
  );
};
