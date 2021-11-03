import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors portal
          </Typography>
          <Link
            to="/home"
            underline="none"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            color="inherit"
          >
            Home
          </Link>
          <Link
            to="/appoinment2"
            underline="none"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            color="inherit"
          >
            Appoinment
          </Link>
          <Button color="inherit" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
