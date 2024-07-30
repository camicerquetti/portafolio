import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const MisTitulos = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/img/Copia de cAMILA CERQUETTI (2).pdf'; // Ruta relativa al archivo PDF en la carpeta public
  const certiPdfUrl = process.env.PUBLIC_URL + '/img/cert.pdf';
  const certificadoPdfUrl = process.env.PUBLIC_URL + '/img/certificado.pdf';

  const handleDownload = (pdfUrl) => {
    // Crear un enlace invisible y simular clic para descargar el PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const iframeStyle = {
    width: '100%',
    height: '350px',  // Ajusta la altura como desees para que todos los iframes tengan la misma medida
    border: 'none',
  };

  const buttonStyles = {
    color: 'white',
    bgcolor: 'black',
    '&:hover': {
      bgcolor: '#333',
    },
  };

  return (
    <Box
      id="educacion"
      sx={{
        mt: 4,
        px: { xs: 2, md: 4 },
        minHeight: '78vh',
      }}
    >
      <h2>Títulos y Currículum</h2>

      {/* Contenedor de cuadrícula */}
      <Grid container spacing={2}>
        {/* Tarjeta 1 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <iframe src={certiPdfUrl} style={iframeStyle} title="Certificado PDF" />
            </CardContent>
            <CardActions>
              <Button size="small" sx={buttonStyles} onClick={() => handleDownload(certiPdfUrl)}>Descargar documento</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <iframe src={certificadoPdfUrl} style={iframeStyle} title="Certificado PDF" />
            </CardContent>
            <CardActions>
              <Button size="small" sx={buttonStyles} onClick={() => handleDownload(certificadoPdfUrl)}>Descargar documento</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* PDF Viewer */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <iframe src={pdfUrl} style={iframeStyle} title="PDF Viewer" />
            </CardContent>
            <CardActions>
              <Button size="small" sx={buttonStyles} onClick={() => handleDownload(pdfUrl)} variant="outlined">Descargar documento</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MisTitulos;
