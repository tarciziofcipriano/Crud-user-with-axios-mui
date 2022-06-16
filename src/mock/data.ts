import { User } from "../services/types";

export const userData: User[] = [
  {
    username: "john",
    accessType: 1,
    state: 1,
    idx: 0,
  },
  {
    username: "foo",
    accessType: 2,
    state: 1,
    idx: 1,
  },
  {
    username: "guest",
    accessType: 3,
    state: 1,
    idx: 2,
  },
  {
    username: "disabled",
    accessType: 0,
    state: 0,
    idx: 3,
  },
];
