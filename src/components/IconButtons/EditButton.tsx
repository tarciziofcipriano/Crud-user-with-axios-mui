import { Edit as EditIcon } from "@mui/icons-material";

import IconButton from "./IconButton";

interface EditButtonProps {
  onClick?: () => void;
}

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <IconButton
      icon={EditIcon}
      tooltip="Editar"
      color="warning"
      onClick={onClick}
    />
  );
};

export default EditButton;
