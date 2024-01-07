import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme } from '../../assets/styles/theme';
import './projects.scss';

const projects = [
  {
    title: 'Project 1',
    description: 'This is the first project',
    image: 'project1.jpg',
    link: 'https://example.com/project1'
  },
  {
    title: 'Project 2',
    description: 'This is the second project',
    image: 'project2.jpg',
    link: 'https://example.com/project2'
  },
  {
    title: 'Project 3',
    description: 'This is the third project',
    image: 'project3.jpg',
    link: 'https://example.com/project3'
  },
  {
    title: 'Project 4',
    description: 'This is the fourth project',
    image: 'project4.jpg',
    link: 'https://example.com/project4'
  }
];

const CustomCard = styled(Card)({
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
          <h3>{'<Projects/>'}</h3>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CustomCard className="project-card" onClick={() => openProjectLink(project.link)}>
                  <CardMedia
                    component="img"
                    height="200"
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
