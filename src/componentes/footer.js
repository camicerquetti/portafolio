import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#000', // Cambiar el color de fondo a negro (#000)
        textAlign: 'center',
        color: '#fff', // Cambiar el color del texto a blanco (#fff)
      }}
    >
      <Typography variant="body2" color="inherit"> {/* Usar color="inherit" para heredar el color del tema */}
        &copy; Cerquetti Camila Belen. Todos los derechos reservados.
Desarrolladora Fullstack PHP & Node.js | Bs As, Argentina


      </Typography>
    </Box>
  );
};

export default Footer;
