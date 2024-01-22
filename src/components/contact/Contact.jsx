// Contact.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from '../../assets/styles/theme';
import './contact.scss';

const ContactCard = ({title, body, link}) => {
  return (
    <Grid xs={12} sm={6} md={4} style={{ cursor: 'pointer' }}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <CustomCard>
          <CardContent>
            <Typography variant="h5" component="div" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {body}
            </Typography>
          </CardContent>
        </CustomCard>
      </a>
    </Grid>
  )
}

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='contact' id='contact'>
        <div className="wrapper">
          <h2>{'<Contact/>'}</h2>
          <Grid container spacing={2}>
            <ContactCard title="Email" body="mail@kylejames.me" link="mailto:mail@kylejames.me" />
            <ContactCard title="GitHub" body="caxky" link="https://github.com/caxky" />
            <ContactCard title="LinkedIn" body="Kyle James" link="https://www.linkedin.com/in/kyle-james-uo/" />
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
  margin: '5px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
});

export default Contact;
