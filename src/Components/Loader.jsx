import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => (
  <Box minHeight="80vh">
    <Stack direction='row' justifyContent='center' alignItems='center' minHeight='70vh' width='100%'>
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;