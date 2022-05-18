import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "40px",
  borderRadius: "6px",
};

export default function DeleteTypeModal({
  open,
  onCloseModal,
  onSubmit,
  type,
}) {
  const handleDeleteType = async () => {
    onSubmit();
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
      <Box component="form" sx={{ ...style }}>
        <Typography
          align="center"
          fontSize="30px"
          fontWeight={500}
          letterSpacing="1px"
          mb={3}
          textTransform="uppercase"
          color="primary"
        >
          Xoá loại thương hiệu
        </Typography>
        <Typography align="center" mb={1} mt={3}>
          Bạn có chắc chắn xoá loại thương hiệu {type.typeName}
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            top: "-15px",
            right: "-10px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #1976d2",
            color: "#1976d2",
            backgroundColor: "#fff",

            "&:hover": {
              backgroundColor: "#1976d2",
              color: "#fff",
            },
          }}
          onClick={handleCloseModal}
        >
          <Close />
        </IconButton>
        <Box display="flex" mt={3} justifyContent="center">
          <Button variant="contained" sx={{ mr: 2 }} onClick={handleDeleteType}>
            Xoá
          </Button>
          <Button variant="contained" onClick={onCloseModal} color="error">
            Hủy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
