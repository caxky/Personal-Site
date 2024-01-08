// Contact.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from '../../assets/styles/theme';
import './contact.scss';

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='contact' id='contact'>
        <div className="wrapper">
          <h2>{'<Contact/>'}</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CustomCard>
                <CardContent>
                  <Typography variant="h5" component="div" color="textPrimary">
                    Email
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    mail@kylejames.me
                  </Typography>
                </CardContent>
              </CustomCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

// Styled Card component to override default background color
const CustomCard = styled(Card)({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
});

export default Contact;
