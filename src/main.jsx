import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";







export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      className="navbar-drawer"
    >
      <List>
        <ListItem component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/contact" onClick={handleDrawerToggle}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem component={Link} to="/new-post" onClick={handleDrawerToggle}>
          <ListItemText primary="New Post" />
        </ListItem>
        <ListItem component={Link} to="/login" onClick={handleDrawerToggle}>
          <FontAwesomeIcon icon={faRightToBracket} />
          <Box className="navbar-login-text">Login</Box>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className="navbar-title"
        >
          <Box component="span" className="navbar-icon">
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </Box>
          Traveling with Simon
        </Typography>
        {!isMobile && (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/"
              className="navbar-button"
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              className="navbar-button"
            >
              Contact
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/new-post"
              className="navbar-button"
            >
              Post
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              className="navbar-button"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              <Box className="navbar-login-text">Login</Box>
            </Button>
          </>
        )}
      </Toolbar>
      {isMobile && drawer}
    </AppBar>
  );
}
