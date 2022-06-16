import React, { ChangeEventHandler } from "react";

import { MenuItem, TextField } from "@mui/material";

import { AccessType, AccessTypeLabel } from "../services/types";

const parseOptions = () => {
  const entries = Object.entries(AccessTypeLabel);
  return entries
    .slice(0, entries.length / 2) // Filtra somente a primeira metade do enum
    .filter((o) => +o[0] > 1) // Exclui os tipos DISABLED e SUPER_ADMIN
    .map(([value, label]) => {
      return { value: +value, label };
    });
};

interface AccessTypeFieldProps {
  value: AccessType;
  disabled?: boolean;
  fullWidth?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const AccessTypeField = ({
  value,
  disabled = false,
  fullWidth = false,
  onChange,
}: AccessTypeFieldProps) => {
  const options = parseOptions();

  return (
    <TextField
      label="Tipo de Acesso"
      name="accessType"
      value={value}
      onChange={onChange}
      disabled={disabled}
      select
      required
      fullWidth={fullWidth}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default React.memo(AccessTypeField);
