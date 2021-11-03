import React from "react";
import chair from "../../images/chair.png";
import bg from "../../images/bg.png";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import Calender from "../Shared/Calender";
import { setDate } from "date-fns";

const banerbg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 500,
};

const AppoinmentHeader = ({ date, setDate }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container style={banerbg}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography variant="h3" sx={{ mt: 5 }}>
              Appoinment
            </Typography>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={11} md={7} style={verticalCenter}>
            <img src={chair} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppoinmentHeader;
