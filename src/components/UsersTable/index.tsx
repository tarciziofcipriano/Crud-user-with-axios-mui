import React from "react";

import {
  AccountBox as AccountBoxIcon,
  PersonAddAlt as PersonAddAltIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { UsersContext } from "../../contexts/UsersContext";
import { getUsers } from "../../services/data";
import Spinner from "../Spinner";
import TopicTitle from "../TopicTitle";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalRemove from "./ModalRemove";
import Rows from "./Rows";

const UsersTable = () => {
  const { users, userToEdit, userToRemove, setUsers } =
    React.useContext(UsersContext);
  const [modalAddOpen, setModalAddOpen] = React.useState(false);

  React.useEffect(() => {
    getUsers().then((res) => {
      const { data } = res;
      setUsers(data);
    });
  }, [setUsers]);

  const toggleAddModal = () => {
    setModalAddOpen((open) => !open);
  };

  return users.length > 0 ? (
    <>
      <Box p={2}>
        <TopicTitle icon={<AccountBoxIcon />}>Tabela de Usuários</TopicTitle>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Usuário</TableCell>
              <TableCell align="right">Tipo de Acesso</TableCell>
              <TableCell align="center">Ativo</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Rows />
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} mb={2}>
        <Button startIcon={<PersonAddAltIcon />} onClick={toggleAddModal}>
          Adicionar Usuário
        </Button>
      </Box>
      {modalAddOpen && (
        <ModalAdd open={modalAddOpen} handleClose={toggleAddModal} />
      )}
      {!!userToRemove && <ModalRemove user={userToRemove} />}
      {!!userToEdit && <ModalEdit user={userToEdit} />}
    </>
  ) : (
    <Spinner />
  );
};

export default UsersTable;
