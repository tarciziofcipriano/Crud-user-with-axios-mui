import { Typography } from "@mui/material";

interface ErrorMessageProps {
  children: string;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <Typography variant="body2" color="error">
      {children}
    </Typography>
  );
};

export default ErrorMessage;
