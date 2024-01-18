import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#112240', // $dark-blue
    },
    secondary: {
      main: '#0A192F', // $darker-blue
    },
    background: {
      default: '#E5E5E5', // $bone-white
    },
    text: {
      primary: '#A8B2D1', // $slate
      secondary: '#8892B0', // $dark-slate
    },
    aquamarine: {
      main: '#64FFDA', // $aquamarine
    },
  },
});

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='navbar'>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            {isMobile ? (
              <>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Kyle
                </Typography>
                <div className='icon-container'>
                  <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                </div>
              </>
            ) : (
              <>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Kyle
                </Typography>
                <Button color="inherit">{'<About/>'}</Button>
                <Button color="inherit">{'<Projects/>'}</Button>
                <Button color="inherit">{'<Contact/>'}</Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem>
              <ListItemText primary={'<About/>'} />
            </ListItem>
            <ListItem>
              <ListItemText primary={'<Projects/>'} />
            </ListItem>
            <ListItem>
              <ListItemText primary={'<Contact/>'} />
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
