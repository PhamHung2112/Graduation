import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../../common/FormFields/InputFields";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

const schema = yup.object().shape({
  sizeNumber: yup
    .number()
    .required("Vui lòng nhập size giày")
    .min(30, "Size nhỏ nhất là 30")
    .max(49, "Size lớn nhất là 49"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "40px",
  borderRadius: "6px",
};

const SizeEdit = ({ open, onClose, size, onSubmit }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      sizeNumber: 0,
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("sizeNumber", size.sizeNumber);
  }, [size]);

  const handleFormSubmit = (formValues) => {
    const values = { ...formValues, id: size.id };
    onSubmit(values);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={{ ...style }}
      >
        <Typography
          align="center"
          fontSize="30px"
          fontWeight={500}
          letterSpacing="1px"
          mb={1}
          textTransform="uppercase"
          color="primary"
        >
          Cập nhật size giày
        </Typography>
        <InputField control={control} name="sizeNumber" label="Size giày" />
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
          onClick={onClose}
        >
          <Close />
        </IconButton>
        <Box display="flex" mt={3} justifyContent="center">
          <Button variant="contained" type="submit" sx={{ mr: 2 }}>
            Cập nhật
          </Button>
          <Button variant="contained" onClick={onClose} color="error">
            Hủy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SizeEdit;
