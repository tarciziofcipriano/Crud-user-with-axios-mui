import React from "react";

import { Box, Typography } from "@mui/material";

interface TopicTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const TopicTitle = ({ children, icon }: TopicTitleProps) => (
  <Box display="flex" alignItems="center">
    {!!icon && <Box sx={{ mr: 1 }}>{icon}</Box>}
    <Typography variant="h5" gutterBottom>
      {children}
    </Typography>
  </Box>
);

export default TopicTitle;
