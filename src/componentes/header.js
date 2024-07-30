import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const sections = [
  { label: 'Perfil', link: '/' },
  { label: 'Educación', link: '/educacion' },
  { label: 'Porfolio', link: '/proyectos' },
  { label: 'Habilidades', link: '/habilidades' },
];

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorElSocial, setAnchorElSocial] = React.useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const handleOpenSocialMenu = (event) => {
    setAnchorElSocial(event.currentTarget);
  };

  const handleCloseSocialMenu = () => {
    setAnchorElSocial(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Botón para abrir el Drawer */}
          <IconButton
            size="large"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          {/* Contenido del Drawer */}
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: 'pink',
                width: 250,
              },
            }}
          >
            <Box
              sx={{
                width: 250,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: '20px', // Ajusta el padding según necesites
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section.label}
                    component={Link}
                    to={section.link}
                  >
                    <ListItemText primary={section.label} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

          <Box sx={{ flexGrow: 1 }} />

          {/* Botón para abrir redes sociales */}
          <Tooltip title="Open settings">
            <IconButton color="inherit" onClick={handleOpenSocialMenu}>
              <Avatar alt="User Avatar" src="/img/cami2.jpg" />
            </IconButton>
          </Tooltip>
          {/* Menú de redes sociales */}
          <Menu
            id="social-menu"
            anchorEl={anchorElSocial}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            open={Boolean(anchorElSocial)}
            onClose={handleCloseSocialMenu}
          >
            <MenuItem onClick={() => window.open('https://www.linkedin.com/in/camila-cerquetti-536568244/536568244', '_blank')}>
              <LinkedInIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>LinkedIn</Typography>
            </MenuItem>
            <MenuItem onClick={() => window.open('https://github.com/camicerquetti', '_blank')}>
              <GitHubIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>GitHub</Typography>
            </MenuItem>
            {/* Agrega más redes sociales según necesites */}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
