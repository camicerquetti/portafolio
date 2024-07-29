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
            <CardContent>
              <iframe src={certiPdfUrl} width="100%" height="400px" title="Certificado PDF" style={{ border: 'none' }} />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleDownload(certiPdfUrl)}>Descargar certi.pdf</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <iframe src={certificadoPdfUrl} width="100%" height="400px" title="Certificado PDF" style={{ border: 'none' }} />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleDownload(certificadoPdfUrl)}>Descargar certificado.pdf</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* PDF Viewer */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <iframe src={pdfUrl} width="100%" height="400px" title="PDF Viewer" style={{ marginBottom: '20px', border: 'none' }} />
            <Button onClick={() => handleDownload(pdfUrl)} variant="outlined">Descargar documento</Button>
            {/* Agregar enlace para redireccionar a la página principal */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MisTitulos;
