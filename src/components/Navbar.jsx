import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Importing the CSS file

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h8"
          component="div"
          sx={{ flexGrow: 1 }}
          className="navbar-title"
        >
          <Box component="span" className="navbar-icon">
            🏠
          </Box>
          Roaming with Simon
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/dashboard"
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
          New Post
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
      </Toolbar>
    </AppBar>
  );
}
