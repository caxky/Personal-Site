import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from '../../assets/styles/theme';
import './projects.scss';

const projects = [
  {
    title: 'ReptiBuddy',
    description: 'A social media platform for reptile enthusiasts, or those who are interested in learning more about reptiles.',
    image: 'images/reptibuddy.jpg',
    link: 'https://example.com/project1'
  },
  {
    title: 'Domain-Specific Fake News Detection Using Deep Learning',
    description: 'A research project that aims to detect fake news using various large language models.',
    image: 'images/fakenewsdetection.jpg',
    link: 'https://github.com/caxky/Fake-News-Detection'
  },
  {
    title: 'Quantop',
    description: 'A suite of financial analysis tools for investors.',
    image: 'images/quantop.png',
    link: 'https://example.com/project2'
  }
];

const CustomCard = styled(Card)({
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    cursor: 'pointer',
  },
});

const Projects = () => {
  const openProjectLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='projects' id='projects'>
        <div className="wrapper">
          <h2>{'<Projects/>'}</h2>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CustomCard className="project-card" onClick={() => openProjectLink(project.link)}>
                  <CardMedia
                    component="img"
                    height="260"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="textPrimary">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Projects;
