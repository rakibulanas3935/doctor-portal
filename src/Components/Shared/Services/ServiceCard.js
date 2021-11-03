import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { autocompleteClasses, CardActionArea } from "@mui/material";

const ServiceCard = (props) => {
  console.log(props);
  const { name, driscripton, img } = props.service;
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
        <CardActionArea sx={{ p: 3 }}>
          <CardMedia
            component="img"
            style={{ width: "21%", margin: "0 auto" }}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {driscripton}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ServiceCard;
