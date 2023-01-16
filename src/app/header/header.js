import React from 'react';
import {Link, Box, CircularProgress} from '@mui/material';
import './header.css'


export function Header({loading}) {
  return (
    <header className="header">
      <h1>
        <Link className="link" underline="none" href="/">Podcaster</Link>
      </h1>
      {loading &&
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      }
    </header>
  );
}
