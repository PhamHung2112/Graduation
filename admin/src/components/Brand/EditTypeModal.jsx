import { yupResolver } from "@hookform/resolvers/yup";
import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../common/FormFields/InputFields";

const schema = yup.object().shape({
  typeName: yup.string().required("Vui lòng nhập tên loại thương hiệu"),
});

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

export default function EditTypeModal({ open, onCloseModal, onSubmit, type }) {
  const initialValues = {
    typeName: type.typeName,
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues) => {
    onSubmit(formValues);
    reset();
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
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
          mb={3}
          textTransform="uppercase"
          color="primary"
        >
          Cập nhật loại thương hiệu
        </Typography>
        <InputField
          control={control}
          name="typeName"
          label="Tên loại thương hiệu"
        />
        <IconButton
          sx={(theme) => ({
            position: "absolute",
            top: "-15px",
            right: "-10px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            backgroundColor: "#fff",

            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
            },
          })}
          onClick={handleCloseModal}
        >
          <Close />
        </IconButton>
        <Box display="flex" mt={3} justifyContent="center">
          <Button variant="contained" sx={{ mr: 2 }} type="submit">
            Cập nhật
          </Button>
          <Button variant="contained" onClick={onCloseModal} color="error">
            Hủy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
