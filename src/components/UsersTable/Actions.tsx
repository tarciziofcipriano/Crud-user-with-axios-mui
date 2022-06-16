import React from "react";

import { UsersContext } from "../../contexts/UsersContext";
import { User } from "../../services/types";
import DeleteButton from "../IconButtons/DeleteButton";
import EditButton from "../IconButtons/EditButton";

interface ActionsProps {
  user: User;
}

const Actions = ({ user }: ActionsProps) => {
  const { setUserToRemove, setUserToEdit } = React.useContext(UsersContext);

  const handleRemove = () => {
    setUserToRemove(user);
  };

  const handleEdit = () => {
    setUserToEdit(user);
  };

  const isSuperAdmin = user.accessType === 1;

  return (
    <>
      {!isSuperAdmin && <DeleteButton onClick={handleRemove} />}
      <EditButton onClick={handleEdit} />
    </>
  );
};

export default Actions;
