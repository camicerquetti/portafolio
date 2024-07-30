import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Sobremi = () => {
  return (
    <Box
      id="sobremi"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '20px',
        my: 2,
        px: { xs: 2, md: 4 },
        paddingBottom: '4rem', // Espacio inferior para el footer
      }}
    >
      <Box sx={{ flex: '1 1 50%' }}>
        <img
          src="/img/cami2.jpg"
          alt="Portafolio"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      <Box sx={{ flex: '1 1 50%', textAlign: { xs: 'center', md: 'left' } }}>
        <h2 className="fadeIn">Camila Cerquetti</h2>
        <p className="fadeInParagraph">
          Profesora de Matemáticas y programadora desarrolladora web Fullstack especializada en PHP, con formación en curso de especialización Fullstack en Node.js. Apasionada por la resolución de problemas y el aprendizaje continuo, busco una oportunidad para aplicar mis conocimientos en un entorno dinámico donde pueda contribuir con mis habilidades tanto en el desarrollo front-end como en el backend. Mi experiencia diversa me permite abordar proyectos de manera integral y ofrecer soluciones creativas e innovadoras.
        </p>
      </Box>

      <Box sx={{ flex: '1 1 50%', textAlign: { xs: 'center' } }}>
        <Link to="/educacion" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              bgcolor: 'black',
              '&:hover': {
                bgcolor: '#333',
              },
            }}
          >
            Ver Títulos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Sobremi;
