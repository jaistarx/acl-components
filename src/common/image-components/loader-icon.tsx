import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoaderIcon = () => (
  <Box sx={{ padding: '0px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <CircularProgress size={20} />
  </Box>
);

export default LoaderIcon;
