import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';

const cardStyles = {
  root: {
    maxWidth: 345,
    margin: '20px',
    width: '92%', // Ajuste para que todos los cards tengan el mismo ancho
    height: '92%',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
};

const Proyectos = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // URL del primer proyecto
  const proyecto1Url = 'https://chinifit.infinityfreeapp.com/?i=1';

  // URL del segundo proyecto
  const proyecto2Url = 'https://camicerquetti.github.io/tp-integrador-con-java/';

  // URL del tercer proyecto
  const proyecto3Url = 'https://chinofit.onrender.com';

  return (
    <Grid container spacing={2} id="proyectos">
      {/* Primer Proyecto */}
      <Grid item xs={12} sm={4}>
        <a href={proyecto1Url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles.root}>
            <CardHeader
              avatar={<Avatar src="/img/chi.jpeg">R</Avatar>}
              title="ChinoFit"
              subheader="PHP/ MSQL"
            />
            <CardMedia
              component="img"
              height="194"
              image="/img/chi.jpeg"
              alt="Proyecto 1"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Desarrollé una aplicación web utilizando PHP y MySQL diseñada específicamente para un personal trainer. El principal objetivo del cliente era automatizar el proceso de registro de asociados y la generación de rutinas de entrenamiento, reduciendo así la carga administrativa y permitiendo una atención más personalizada a sus alumnos.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="expandir">
                <a href="#proyectos" onClick={() => handleScrollToSection('#proyectos')}>
                  <ExpandMoreIcon />
                </a>
              </IconButton>
            </CardActions>
            <Collapse in={false} timeout="auto" unmountOnExit>
              <CardContent>
                {/* Contenido expandido del proyecto */}
              </CardContent>
            </Collapse>
          </Card>
        </a>
      </Grid>

      {/* Segundo Proyecto */}
      <Grid item xs={12} sm={4}>
        <a href={proyecto2Url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles.root}>
            <CardHeader
              avatar={<Avatar src="/img/codoacodo.png">R</Avatar>}
              title="Conferencias Bs As"
              subheader="PHP/MSQL"
            />
            <CardMedia
              component="img"
              height="194"
              image="/img/codoacodo.png"
              alt="Conferencias Bs As"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Esta aplicación fue desarrollada como parte de un trabajo práctico con el objetivo principal de facilitar la compra de tickets con descuentos personalizados según la categoría del usuario.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="expandir">
                <a href="#proyectos" onClick={() => handleScrollToSection('#proyectos')}>
                  <ExpandMoreIcon />
                </a>
              </IconButton>
            </CardActions>
            <Collapse in={false} timeout="auto" unmountOnExit>
              <CardContent>
                {/* Contenido expandido del proyecto */}
              </CardContent>
            </Collapse>
          </Card>
        </a>
      </Grid>

      {/* Tercer Proyecto */}
      <Grid item xs={12} sm={4}>
        <a href={proyecto3Url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card sx={cardStyles.root}>
            <CardHeader
              avatar={<Avatar src="/img/node.webp">R</Avatar>}
              title="Implementando Node"
              subheader="NODE.JS /BOOSTRAP/JAVASCRIPT"
            />
            <CardMedia
              component="img"
              height="194"
              image="/img/node.webp"
              alt="implementando Node"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Tomé un proyecto establecido y apliqué las últimas prácticas en desarrollo web utilizando Node.js. Desde la integración de APIs hasta la gestión de bases de datos, cada aspecto fue meticulosamente actualizado para mejorar el rendimiento y la escalabilidad. El uso de Node.js no solo mejoró la velocidad y la eficiencia del proyecto, sino que también permitió una gestión de código más limpia y mantenible.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="expandir">
                <a href="#proyectos" onClick={() => handleScrollToSection('#proyectos')}>
                  <ExpandMoreIcon />
                </a>
              </IconButton>
            </CardActions>
            <Collapse in={false} timeout="auto" unmountOnExit>
              <CardContent>
                {/* Contenido expandido del proyecto */}
              </CardContent>
            </Collapse>
          </Card>
        </a>
      </Grid>
    </Grid>
  );
};

export default Proyectos;
