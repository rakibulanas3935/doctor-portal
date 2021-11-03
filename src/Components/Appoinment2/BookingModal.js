import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ open, handleClose, booking, date }) => {
  const handleButtonSubmit = (e) => {
    alert("Submitted");

    handleClose();
    e.preventDefault();
  };

  const { name, time } = booking;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            {time}
          </Typography>

          <form onSubmit={handleButtonSubmit}>
            <div>
              <TextField
                sx={{ m: 1, width: "90%" }}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1, width: "90%" }}
                id="outlined-size-small"
                defaultValue="name"
                size="small"
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1, width: "90%" }}
                id="outlined-size-small"
                defaultValue="email"
                size="small"
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1, width: "90%" }}
                id="outlined-size-small"
                defaultValue="phone number"
                size="small"
              />
            </div>
            <div>
              <TextField
                disabled
                sx={{ m: 1, width: "90%" }}
                id="outlined-size-small"
                defaultValue={date}
                size="small"
              />
            </div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
