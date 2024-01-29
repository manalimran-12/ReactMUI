import React, { useState } from 'react';
import ReactLogo from '../Assests/react.png';
import { Typography, AppBar, Toolbar, Button, Stack, Drawer, List, ListItem, IconButton, useMediaQuery, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#21222A', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
          <img src={ReactLogo} alt="React Logo" style={{ width: isSmScreen ? 60 : 100, height: isSmScreen ? 40 : 70, marginRight: 10 }} />
          <Typography variant={isSmScreen ? 'subtitle1' : 'h6'} component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', fontFamily: 'inter,serif', color: '#61DAFB' }}>
            REACT MUI
          </Typography>
          {isSmScreen ? (
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ marginRight: 2 }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} sx={{ justifyContent: 'flex-end' }}>
              <Button color="inherit" variant="text" sx={{ fontFamily: 'inter,serif', '&:hover': { color: '#7b1fa2' } }}>
                Pricing
              </Button>
              <Button color="inherit" variant="text" sx={{ fontFamily: 'inter,serif', '&:hover': { color: '#7b1fa2' } }}>
                About
              </Button>
              <Button color="inherit" variant="text" sx={{ fontFamily: 'inter,serif', '&:hover': { color: '#7b1fa2' } }}>
                Contact
              </Button>
            </Stack>
          )}
        </Stack>
        {isSmScreen && (
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button onClick={toggleDrawer(false)} sx={{ textAlign: 'center' }}>
                <Button color="inherit" variant="text" sx={{ fontFamily: 'inter,serif' }}>
                  Pricing
                </Button>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)} sx={{ textAlign: 'center' }}>
                <Button color="inherit" variant="text" sx={{ fontFamily: 'inter,serif' }}>
                  About
                </Button>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)} sx={{ textAlign: 'center' }}>
                <Button color="inherit" variant="text" sx={{ fontFamily: 'inter,serif' }}>
                  Contact
                </Button>
              </ListItem>
            </List>
          </Drawer>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
