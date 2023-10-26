import React from "react";
import { Box, Typography, TextField, Modal, Button } from "@mui/material";

function AddForm(props) {
  const [image, setImage] = React.useState();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    props.setShowForm(false);
  };

  const handleFileSelection = (e) => {
    e.target.files[0] ? setImage(e.target.files[0]) : setImage(null);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setImage(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  };

  return (
    <Modal
      open={props.openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          Add Blog Post
        </Typography>
        <Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontWeight: "bold", color: "#707070" }}
          >
            Blog Title
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontWeight: "bold", color: "#707070" }}
          >
            Blog Content
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "100%" }}
            rows={15}
            multiline
          />
        </Box>
        <Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontWeight: "bold", color: "#707070" }}
          >
            Blog Image
          </Typography>
          {/* <TextField
            id="outlined-basic"
            // label="Blog Image"
            // variant="outlined"
            sx={{ width: "100%" }}
            type="file"
          /> */}

          <TextField
            type="file"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) => handleFileSelection(e)}
          />
          {image ? <img src={image} width={50} height={50} alt="" /> : null}
        </Box>
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", zIndex: 4, left: "90%", top: "1%" }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
}

export default AddForm;
