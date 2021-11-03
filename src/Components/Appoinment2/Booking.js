import { Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import BookingModal from "./BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} md={4} sm={6}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>

      <BookingModal
        handleClose={handleClose}
        open={open}
        booking={booking}
        date={date}
      ></BookingModal>
    </>
  );
};

export default Booking;
