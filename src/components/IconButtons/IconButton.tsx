import React from "react";

import {
  IconButton as MuiIconButton,
  SvgIconTypeMap,
  Tooltip,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IconButtonProps {
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">> & {
    muiName: string;
  };
  fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
  tooltip?: string;
  color?:
    | "inherit"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  onClick?: () => void;
}

const IconButton = ({
  icon,
  fontSize = "inherit",
  tooltip = "",
  color = "inherit",
  onClick,
}: IconButtonProps) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Tooltip title={tooltip} arrow>
      <MuiIconButton size="small" onClick={handleClick}>
        {React.createElement(icon, { fontSize, color })}
      </MuiIconButton>
    </Tooltip>
  );
};

export default IconButton;
