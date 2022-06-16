import { Box, CircularProgress } from "@mui/material";

interface SpinnerPsops {
  size?: number;
  disableMargin?: boolean;
}

const Spinner = ({ size = 80, disableMargin = false }: SpinnerPsops) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ m: disableMargin ? 0 : 3 }}
  >
    <CircularProgress size={size} />
  </Box>
);

export default Spinner;
