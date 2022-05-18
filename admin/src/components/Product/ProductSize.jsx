import { yupResolver } from "@hookform/resolvers/yup";
import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../../common/FormFields/InputFields";
import { SelectField } from "../../common/FormFields/SelectField";

const schema = yup.object().shape({
  sizeId: yup.number().required("Vui lòng nhập size giày"),
  amount: yup.number().required("Vui lòng nhập số lượng size giày"),
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

const ProductSize = ({ open, onClose, sizeList, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      sizeId: "",
      amount: 0,
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (formValues) => {
    onSubmit(formValues);
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
          Thêm mới size giày
        </Typography>
        {sizeList && sizeList.length > 0 && (
          <SelectField
            control={control}
            label="Size giày"
            options={sizeList}
            name="sizeId"
          />
        )}
        <InputField
          name="amount"
          label="Số lượng"
          control={control}
          type="number"
        />
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
            Thêm mới
          </Button>
          <Button variant="contained" onClick={onClose} color="error">
            Hủy
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductSize;
