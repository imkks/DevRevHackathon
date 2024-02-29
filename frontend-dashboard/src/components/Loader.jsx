// components/Loader.js

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
   Loading Please Wait...   <CircularProgress />
  </Box>
  )
};

export default Loader;
