import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const sections = [
  { label: 'Perfil', link: '/' },
  { label: 'Educación', link: '/educacion' },
  { label: 'Experiencia laboral', link: '/proyectos' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElSocial, setAnchorElSocial] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {sections.map((section) => (
              <MenuItem key={section.label} component={Link} to={section.link} onClick={handleCloseNavMenu}>
                <Typography variant="inherit">{section.label}</Typography>
              </MenuItem>
            ))}
          </Menu>

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
