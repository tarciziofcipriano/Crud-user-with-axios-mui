import React from "react";

import { Edit as EditIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContext } from "../../contexts/ToastContext";
import { UsersContext } from "../../contexts/UsersContext";
import { editUser } from "../../services/data";
import { User } from "../../services/types";
import AccessTypeField from "../AccessTypeField";
import ErrorMessage from "../ErrorMessage";
import { yupNotOneOf, yupNumberMinMax, yupRequiredString } from "../Form/yup";
import Modal from "../Modal";
import TopicTitle from "../TopicTitle";

interface ModalEditProps {
  user: User;
}

const ModalEdit = ({ user }: ModalEditProps) => {
  const { toastError, toastSuccess } = React.useContext(ToastContext);
  const { setUserToEdit, setUsers, users } = React.useContext(UsersContext);
  const handleClose = () => setUserToEdit(undefined);

  const { idx, username, accessType, state } = user;

  const notAllowedUsersnames = users.reduce((acc, cur) => {
    if (cur.username !== username) acc.push(cur.username);
    return acc;
  }, [] as string[]);

  const formik = useFormik({
    initialValues: {
      idx,
      username,
      accessType: accessType || 3,
      state,
    },
    validationSchema: Yup.object({
      idx: yupRequiredString,
      username: yupNotOneOf(notAllowedUsersnames, "Usuário já registrado"),
      accessType: yupNumberMinMax(1, 3),
      state: yupRequiredString,
    }),
    onSubmit: (values: User) => {
      editUser(values)
        .then(() => {
          const newUsers = [...users];
          newUsers[values.idx] = values;
          setUsers(newUsers);
          toastSuccess("Sucesso ao editar usuário");
          handleClose();
        })
        .catch(() => {
          toastError("Erro ao editar usuário");
        });
    },
  });

  const isSuperAdmin = formik.values.accessType === 1;
  const isFormValid = !formik.isSubmitting && formik.dirty && formik.isValid;

  return (
    <Modal open handleClose={handleClose}>
      <TopicTitle icon={<EditIcon />}>Editar Usuário</TopicTitle>
      <Box pt={2}>
        <Grid
          container
          component="form"
          onSubmit={formik.handleSubmit}
          spacing={3}
          maxWidth={400}
        >
          <Grid item xs={12}>
            <TextField
              label="Usuário"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              required
              fullWidth
            />
            {formik.errors.username && formik.touched.username ? (
              <ErrorMessage>{formik.errors.username}</ErrorMessage>
            ) : null}
          </Grid>
          {!isSuperAdmin && (
            <Grid item xs={12}>
              <AccessTypeField
                value={formik.values.accessType}
                disabled={formik.isSubmitting}
                onChange={formik.handleChange}
                fullWidth
              />
            </Grid>
          )}
          {!isSuperAdmin && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  label="Estado"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  disabled={formik.isSubmitting}
                  required
                >
                  <MenuItem value={1}>Ativo</MenuItem>
                  <MenuItem value={0}>Inativo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12} justifyContent="space-between" container>
            <Grid item>
              <Button onClick={handleClose}>Cancelar</Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                type="submit"
                startIcon={<EditIcon />}
                disabled={!isFormValid}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
