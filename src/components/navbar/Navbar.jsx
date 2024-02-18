import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery } from '@mui/material';
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='navbar'>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="secondary" >
          <Toolbar className='navbar-container'>
            {isMobile ? (
              <>
                <div variant="h6" style={{ flexGrow: 1 }}>
                  <div className="logo-container" onClick={scrollToTop}>
                    <img src="images/kj.png" alt="Logo" style={{ height: '90%' }}/>
                  </div>
                </div>
                <div className='icon-container'>
                  <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                </div>
              </>
            ) : (
              <>
                <div variant="h6" style={{ flexGrow: 1 }}>
                  <div className="logo-container" onClick={scrollToTop}>
                    <img src="images/kj.png" alt="Logo" style={{ height: '100%' }}/>
                  </div>
                </div>
                <Button color="inherit" onClick={() => scrollToSection('about')}>
                  <Typography variant="button">{'<About/>'}</Typography>
                </Button>
                <Button color="inherit" onClick={() => scrollToSection('projects')}>
                  <Typography variant="button">{'<Projects/>'}</Typography>
                </Button>
                <Button color="inherit" onClick={() => scrollToSection('contact')}>
                  <Typography variant="button">{'<Contact/>'}</Typography>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}
          PaperProps={{
            style: {
              backgroundColor: '#0A192F',
              color: '#A8B2D1',
            },
          }}
        >
          <List>
            <ListItem style={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
              <ListItemText className='drawerButton'>
                <Button variant="h6">{'<About/>'}</Button>
              </ListItemText>
            </ListItem>
            <ListItem style={{ cursor: 'pointer' }} onClick={() => scrollToSection('projects')}>
              <ListItemText className='drawerButton'>
                <Button variant="h6">{'<Projects/>'}</Button>
              </ListItemText>
            </ListItem>
            <ListItem style={{ cursor: 'pointer' }} onClick={() => scrollToSection('contact')}>
              <ListItemText className='drawerButton'>
                <Button variant="h6">{'<Contact/>'}</Button>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
