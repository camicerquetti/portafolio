import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faBootstrap,
  faReact,
  faJs,
  faPython,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Habilidades = () => {
  const iconos = {
    HTML5: <FontAwesomeIcon icon={faHtml5} size="3x" />,
    CSS: <FontAwesomeIcon icon={faCss3} size="3x" />,
    Bootstrap: <FontAwesomeIcon icon={faBootstrap} size="3x" />,
    React: <FontAwesomeIcon icon={faReact} size="3x" />,
    JavaScript: <FontAwesomeIcon icon={faJs} size="3x" />,
    Python: <FontAwesomeIcon icon={faPython} size="3x" />,
    MySQL: <FontAwesomeIcon icon={faDatabase} size="3x" />,
    'Node.js': <FontAwesomeIcon icon={faNodeJs} size="3x" />,
  };

  const habilidades = [
    'HTML5',
    'CSS',
    'Bootstrap',
    'React',
    'JavaScript',
    'Python',
    'MySQL',
    'Node.js',
  ];

  return (
    <Box id="habilidades" sx={{ px: { xs: 2, md: 2 }, mt: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Habilidades
      </Typography>

      <Grid container spacing={2}>
        {habilidades.map((habilidad, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                minHeight: 0,
                flexGrow: 1,
                paddingBottom:"130px",
                '&:hover': {
                  transform: 'scale(1.3)',
                  transition: 'transform 0.2s ease',
                  color: 'pink',
                
                },
              }}
            >
              {iconos[habilidad]}
              <Typography variant="body1">{habilidad}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Habilidades;
