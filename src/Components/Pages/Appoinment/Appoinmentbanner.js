import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import appoinmentbackground from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";

const appoinmentbg = {
  background: `url(${appoinmentbackground})`,
  marginTop: 175,
  backgroundColor: "rgba(45,58,65,0.7)",
  backgroundBlendMode: "darken,luminosity",
};

const Appoinmentbanner = () => {
  return (
    <Box style={appoinmentbg} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <img style={{ width: 400, marginTop: -150 }} src={doctor} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ mb: 2 }}
                style={{ color: "#5CE7ED" }}
              >
                Appoinment
              </Typography>
              <Typography
                variant="h4"
                sx={{ my: 2 }}
                style={{ color: "white", m: 4 }}
              >
                Make an Appoinment Today
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 2 }}
                style={{ color: "white", fontSize: 14 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                maiores architecto ab magni molestiae animi voluptatem, commodi
                oditreiciendis fuga nisi dicta consectetur blanditiis.
                Voluptatem necessitatibus ad optio est ea.
              </Typography>
              <Button
                variant="contained"
                sx={{ mb: 1 }}
                style={{ backgroundColor: "#5CE7ED" }}
              >
                Learn more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Appoinmentbanner;
