import React from "react";

import {
  Delete as DeleteIcon,
  GroupRemove as GroupRemoveIcon,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";

import { ToastContext } from "../../contexts/ToastContext";
import { UsersContext } from "../../contexts/UsersContext";
import { deleteUser } from "../../services/data";
import { User } from "../../services/types";
import Modal from "../Modal";
import TopicTitle from "../TopicTitle";

interface ModalRemoveProps {
  user: User;
}

const ModalRemove = ({ user }: ModalRemoveProps) => {
  const { toastError, toastSuccess } = React.useContext(ToastContext);
  const { setUserToRemove, setUsers, users } = React.useContext(UsersContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => setUserToRemove(undefined);

  const { idx, username } = user;

  const handleRemove = () => {
    setLoading(true);
    deleteUser({ idx })
      .then(() => {
        const newUsers = [...users];
        newUsers.splice(idx, 1);
        newUsers.forEach((u, i) => {
          Object.assign(u, { idx: i });
        });
        setUsers(newUsers);
        toastSuccess("Sucesso ao remover usuário");
        setLoading(false);
        handleClose();
      })
      .catch(() => {
        setLoading(false);
        toastError("Erro ao remover usuário");
      });
  };

  return (
    <Modal open handleClose={handleClose}>
      <TopicTitle icon={<GroupRemoveIcon />}>Remover Usuário</TopicTitle>

      <Box pt={2}>
        <Typography>
          Remover <strong>{username}</strong>?
        </Typography>
        <Grid container spacing={2} justifyContent="space-between" pt={3}>
          <Grid item>
            <Button onClick={handleClose}>Cancelar</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="error"
              onClick={handleRemove}
              startIcon={<DeleteIcon />}
              disabled={loading}
            >
              Remover
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalRemove;
