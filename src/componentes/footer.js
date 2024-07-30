import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email'; // Importar el ícono de correo electrónico

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:camilacerquetti18@gmail.com';
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#000',
        textAlign: 'center',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="body2" color="inherit" sx={{ display: 'inline-flex', alignItems: 'center' }}>
        &copy; Cerquetti Camila Belen. Todos los derechos reservados. Desarrolladora Fullstack PHP & Node.js | Bs As, Argentina
        <EmailIcon sx={{ ml: 1, cursor: 'pointer' }} onClick={handleEmailClick} />
      </Typography>
    </Box>
  );
};

export default Footer;
