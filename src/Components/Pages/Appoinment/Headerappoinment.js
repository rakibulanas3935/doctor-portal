import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const banerbg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
};

const Headerappoinment = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <Container style={banerbg}>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ ...verticalCenter, textAlign: "left" }}
            xs={12}
            md={5}
          >
            <Box>
              <Typography variant="h3" sx={{ mt: 5 }}>
                Your new Smile <br /> Starts here
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: 14, fontWeight: 300, color: "gray", my: 3 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate sed et praesentium facilis vero quis magni, quam
                laboriosam totam? Porro explicabo officiis numquam velit ea nemo
                id error vero a.
              </Typography>
              <Button
                variant="contained"
                sx={{ mb: 1 }}
                style={{ backgroundColor: "#5CE7ED" }}
              >
                Get appoinment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} style={verticalCenter}>
            <img src={chair} style={{ width: "80vh" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Headerappoinment;
