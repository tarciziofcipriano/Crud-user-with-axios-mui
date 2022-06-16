import React from "react";

import { PersonAddAlt as PersonAddAltIcon } from "@mui/icons-material";
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
import { addUser } from "../../services/data";
import { AddUser } from "../../services/types";
import AccessTypeField from "../AccessTypeField";
import ErrorMessage from "../ErrorMessage";
import {
  yupNotOneOf,
  yupNumberMinMax,
  yupRequiredString,
  yupStringMax,
} from "../Form/yup";
import Modal from "../Modal";
import TopicTitle from "../TopicTitle";

interface ModalAddProps {
  open: boolean;
  handleClose: () => void;
}

const ModalAdd = ({ open, handleClose }: ModalAddProps) => {
  const { toastError, toastSuccess } = React.useContext(ToastContext);
  const { setUsers, users } = React.useContext(UsersContext);
  const maxLength = 20;

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      accessType: 3,
      state: 1,
    } as AddUser,
    validationSchema: Yup.object({
      username: yupNotOneOf(
        users.map((user) => user.username),
        "Usuário já registrado"
      ),
      password: yupStringMax(maxLength),
      accessType: yupNumberMinMax(1, 3),
      state: yupRequiredString,
    }),
    onSubmit: (values, { setSubmitting }) => {
      addUser(values)
        .then(() => {
          const idx = users.length;
          const newUser = { ...values, idx };
          setUsers([...users, newUser]);
          toastSuccess("Usuário Adicionado com sucesso");
          handleClose();
        })
        .catch(() => {
          toastError("Erro ao adicionar usuário");
          setSubmitting(false);
        });
    },
  });

  const isFormValid = !formik.isSubmitting && formik.dirty && formik.isValid;

  return (
    <Modal open={open} handleClose={handleClose}>
      <TopicTitle icon={<PersonAddAltIcon />}>Adicionar Usuário</TopicTitle>
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
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              inputProps={{ maxLength }}
              required
              fullWidth
            />
            {formik.errors.username && formik.touched.username ? (
              <ErrorMessage>{formik.errors.username}</ErrorMessage>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Senha"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              inputProps={{ maxLength }}
              required
              fullWidth
            />
            {formik.errors.password && formik.touched.password ? (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            ) : null}
          </Grid>
          <Grid item xs={12} md={6}>
            <AccessTypeField
              value={formik.values.accessType}
              onChange={formik.handleChange}
              disabled={formik.isSubmitting}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Button onClick={handleClose}>Cancelar</Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  type="submit"
                  startIcon={<PersonAddAltIcon />}
                  disabled={!isFormValid}
                >
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalAdd;
