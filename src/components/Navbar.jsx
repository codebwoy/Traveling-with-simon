// src/components/Navbar.js
import React from "react";
// import './navbar.css';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Box component="span" sx={{ mr: 2 }}>
              🏠
            </Box>
            Roaming with Simon
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/new-post">
          New Post
        </Button>
        <Button color="inherit" component={Link} to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />

          <Box sx={{ ml: 1 }}>Login</Box>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
