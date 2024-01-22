// Contact.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from '../../assets/styles/theme';
import './contact.scss';

const ContactCard = ({title, body, link, image}) => {
  return (
    <Grid xs={12} sm={6} md={4} style={{ cursor: 'pointer' }}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <CustomCard>
          <CardContent style={{ display: 'flex', alignItems: 'center' }}>
            <img src={image} alt={title} style={{ height: '50px' }}/>
            <div style={{ flexGrow: 1, marginLeft: '10px' }}>
              <Typography variant="h6" component="div" color="textPrimary">
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {body}
              </Typography>
            </div>
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
            <ContactCard title="Email" body="mail@kylejames.me" link="mailto:mail@kylejames.me" image="https://cdn.iconscout.com/icon/free/png-512/free-email-2091034-1767507.png" />
            <ContactCard title="GitHub" body="caxky" link="https://github.com/caxky" image="https://cdn.iconscout.com/icon/free/png-512/free-github-1521500-1288242.png" />
            <ContactCard title="LinkedIn" body="Kyle James" link="https://www.linkedin.com/in/kyle-james-uo/" image="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-1464529-1239440.png" />
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
