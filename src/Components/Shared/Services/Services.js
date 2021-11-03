import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import floride from "../../../images/fluoride.png";
import cravity from "../../../images/cavity.png";
import whiten from "../../../images/whitening.png";

const services = [
  {
    name: "Floride treatment",
    driscripton:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth.",
    img: floride,
  },
  {
    name: "Floride treatment",
    driscripton:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth.",
    img: whiten,
  },
  {
    name: "Floride treatment",
    driscripton:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth.",
    img: cravity,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 500, color: "primary.main", m: 3 }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 500, m: 3 }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Services we provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.name} service={service}></ServiceCard>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
