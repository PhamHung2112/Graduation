import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../common/FormFields/InputFields";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

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

const schema = yup.object().shape({
  voucherName: yup.string().required("Vui lòng nhập tên mã giảm giá"),
  voucherPercent: yup.string().required("Vui lòng nhập tên mã giảm giá"),
  amount: yup.string().required("Vui lòng nhập tên mã giảm giá"),
});

const VoucherModal = ({
  open,
  onClose,
  onSubmit,
  voucherEdit,
  initialValue,
}) => {
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (voucherEdit) {
      setValue("voucherName", voucherEdit.voucherName);
      setValue("voucherPercent", voucherEdit.voucherPercent);
      setValue("amount", voucherEdit.amount);
    } else {
      reset();
    }
  }, [voucherEdit]);

  const handleFormSubmit = (formValues) => {
    if (!onSubmit) return;

    if (voucherEdit) {
      const values = { ...formValues, id: voucherEdit.id };
      onSubmit(values);
    } else {
      onSubmit(formValues);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{ ...style }}
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
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
          {voucherEdit ? "Cập nhật" : "Thêm"} mã giảm giá
        </Typography>

        <InputField
          control={control}
          name="voucherName"
          label="Tên mã giảm giá"
        />
        <InputField
          control={control}
          name="voucherPercent"
          label="Phần trăm giảm giá"
          type="number"
        />
        <InputField
          control={control}
          name="amount"
          label="Số lượng"
          type="number"
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
          onClick={onClose}
        >
          <Close />
        </IconButton>
        <Box display="flex" mt={3} justifyContent="center">
          <Button variant="contained" sx={{ mr: 2 }} type="submit">
            {voucherEdit ? "Cập nhật" : "Thêm mới"}
          </Button>
          <Button variant="contained" onClick={onClose} color="error">
            Hủy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default VoucherModal;
