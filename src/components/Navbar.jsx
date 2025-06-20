import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Fade, Container } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);
  const [industriesMenuAnchor, setIndustriesMenuAnchor] = useState(null);

  const handleServicesMenuOpen = (event) => {
    setServicesMenuAnchor(event.currentTarget);
  };

  const handleIndustriesMenuOpen = (event) => {
    setIndustriesMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setServicesMenuAnchor(null);
    setIndustriesMenuAnchor(null);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              fontWeight: 800,
              letterSpacing: '0.5px',
              color: 'primary.main',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                opacity: 0.9
              }
            }}
          >
            <Box component="span" sx={{ 
              bgcolor: 'primary.main', 
              color: 'white', 
              px: 1, 
              py: 0.5, 
              borderRadius: 1,
              mr: 1
            }}>
              BELLA
            </Box>
            TRIX
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 1 }}>
            {/* Services Dropdown */}
            <Button
              variant="text"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleServicesMenuOpen}
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            >
              Services
            </Button>
            
            <Menu
              anchorEl={servicesMenuAnchor}
              open={Boolean(servicesMenuAnchor)}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 200,
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  overflow: 'visible',
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
            >
              {['NetSuite Implementation', 'Custom Development', 'System Integration', 'Cloud Migration', 'Data Analytics'].map((item) => (
                <MenuItem 
                  key={item} 
                  onClick={handleMenuClose}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'primary.lighter'
                    }
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>

            {/* Industries Dropdown */}
            <Button
              variant="text"
              endIcon={<ArrowDropDownIcon />}
              onClick={handleIndustriesMenuOpen}
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            >
              Industries
            </Button>
            
            <Menu
              anchorEl={industriesMenuAnchor}
              open={Boolean(industriesMenuAnchor)}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 200,
                  borderRadius: 2,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  overflow: 'visible',
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
            >
              {['Manufacturing', 'Retail', 'Professional Services', 'Healthcare', 'Education'].map((item) => (
                <MenuItem 
                  key={item} 
                  onClick={handleMenuClose}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      bgcolor: 'primary.lighter'
                    }
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>

            <Button
              variant="text"
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            >
              About
            </Button>

            <Button
              variant="contained"
              sx={{
                ml: 2,
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            size="large"
            edge="end"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: 'text.primary'
            }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Box sx={{ 
            display: { xs: 'block', md: 'none' },
            py: 1,
            borderTop: '1px solid',
            borderColor: 'divider'
          }}>
            <Button
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                px: 3,
                py: 1.5,
                textAlign: 'left'
              }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleServicesMenuOpen}
            >
              Services
            </Button>
            
            <Box sx={{ pl: 4 }}>
              {['NetSuite Implementation', 'Custom Development', 'System Integration'].map((item) => (
                <Button
                  key={item}
                  fullWidth
                  sx={{ 
                    justifyContent: 'flex-start',
                    px: 3,
                    py: 1.5,
                    textAlign: 'left',
                    fontSize: '0.875rem'
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Button
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                px: 3,
                py: 1.5,
                textAlign: 'left'
              }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleIndustriesMenuOpen}
            >
              Industries
            </Button>
            
            <Box sx={{ pl: 4 }}>
              {['Manufacturing', 'Retail', 'Professional Services'].map((item) => (
                <Button
                  key={item}
                  fullWidth
                  sx={{ 
                    justifyContent: 'flex-start',
                    px: 3,
                    py: 1.5,
                    textAlign: 'left',
                    fontSize: '0.875rem'
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Button
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                px: 3,
                py: 1.5,
                textAlign: 'left'
              }}
            >
              About
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{ 
                mt: 1,
                mx: 2,
                py: 1.5,
                fontWeight: 600
              }}
            >
              Contact
            </Button>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;

