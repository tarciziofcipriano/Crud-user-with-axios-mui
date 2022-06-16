import { Clear as ClearIcon } from "@mui/icons-material";

import IconButton from "./IconButton";

interface DeleteButtonProps {
  onClick?: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <IconButton
      icon={ClearIcon}
      tooltip="Remover"
      color="error"
      onClick={onClick}
    />
  );
};

export default DeleteButton;
