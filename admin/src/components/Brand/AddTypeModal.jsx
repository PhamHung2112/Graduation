import { yupResolver } from "@hookform/resolvers/yup";
import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { InputField } from "../../common/FormFields/InputFields";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SelectField } from "../../common/FormFields/SelectField";

const schema = yup.object().shape({
  typeName: yup.string().required("Vui lòng nhập tên loại thương hiệu"),
  brandId: yup.string().required("Vui lòng chọn thương hiệu"),
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

export default function AddTypeModal({
  open,
  onCloseModal,
  options,
  onSubmit,
}) {
  const initialValues = {
    typeName: "",
    brandId: "",
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
          Thêm loại thương hiệu
        </Typography>
        <InputField
          control={control}
          name="typeName"
          label="Tên loại thương hiệu"
        />
        <SelectField
          control={control}
          name="brandId"
          options={options}
          label="Thuơng hiệu"
          disabled={false}
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
        >
          Thêm loại thương hiệu
        </Button>
      </Box>
    </Modal>
  );
}
