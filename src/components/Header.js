import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Stock App
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/portfolio">
        Portfolio
      </Button>
      <Button color="inherit" component={Link} to="/watchlist">
        Watchlist
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
