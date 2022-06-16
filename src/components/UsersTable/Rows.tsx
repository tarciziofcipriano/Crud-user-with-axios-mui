import React from "react";

import {
  Check as CheckIcon,
  DoDisturb as DoDisturbIcon,
} from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";

import { UsersContext } from "../../contexts/UsersContext";
import { getLabel } from "../../services/types";
import Actions from "./Actions";

const Rows = () => {
  const { users } = React.useContext(UsersContext);

  return (
    <>
      {users.map((user) => {
        const { idx, username, accessType, state } = user;
        const accessTypeLabel = getLabel(accessType);
        const active =
          state === 1 ? (
            <CheckIcon color="success" />
          ) : (
            <DoDisturbIcon color="error" />
          );

        return (
          <TableRow
            key={idx}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {username}
            </TableCell>
            <TableCell align="right">{accessTypeLabel}</TableCell>
            <TableCell align="center">{active}</TableCell>
            <TableCell align="center">
              <Actions user={user} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default Rows;
