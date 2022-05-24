import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GrainIcon from "@mui/icons-material/Grain";
import { AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const pages = [
  { label: "Create New AD", link: "create-ad", icon: <AddCircleOutline /> },
];
const settings = [
  { label: "Profile", link: "profile" },
  { label: "Your Ads", link: "your-ads" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GrainIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              WaffleOlx
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ label, link }) => (
                <Link to={link}>
                  <MenuItem key={link} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <GrainIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WaffleOlx
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box
            sx={{
              flexGrow: 0,
              marginRight: 5,
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map(({ label, link, icon }) => (
              <Link to={link}>
                <Button
                  key={link}
                  onClick={handleCloseNavMenu}
                  startIcon={icon}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    textTransform: "none",
                  }}
                >
                  {label}
                </Button>
              </Link>
            ))}
            <Link to="/auth/signin">
              <Button variant="contained">Sign In</Button>
            </Link>
            <Link to="/auth/signup">
              <Button variant="contained">Sign Up</Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ label, link }) => (
                <Link to={link}>
                  <MenuItem key={link} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
