import { yupResolver } from "@hookform/resolvers/yup";
import { Add, Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import sizeApi from "../../api/sizeApi";
import { InputField } from "../../common/FormFields/InputFields";
import { isEmptyObject } from "../../utils/common";
import SizeEdit from "./SizeEdit";

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
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const SizeModal = ({ open, onClose }) => {
  const [sizeList, setSizeList] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      sizeNumber: 0,
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    (async () => {
      const response = await sizeApi.getAll();
      setSizeList(response.sizes.rows);
    })();
  }, []);

  const handleFormSubmit = async (formValues) => {
    try {
      await sizeApi.create(formValues);
      toast.success("Thêm size giày thành công");
      (async () => {
        const response = await sizeApi.getAll();
        setSizeList(response.sizes.rows);
      })();
      reset();
    } catch (error) {
      toast.error("Thêm size giày thất bại");
    }
  };

  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenDelete = (size) => {
    setDataDelete(size);
    setOpenDelete(true);
  };

  const handleDeleteSize = async () => {
    try {
      await sizeApi.delete(dataDelete.id);
      toast.success("Xoá size giày thành công");
      (async () => {
        const response = await sizeApi.getAll();
        setSizeList(response.sizes.rows);
      })();
      setOpenDelete(false);
    } catch (error) {
      toast.error("Xoá size giày thất bại");
    }
  };

  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenEdit = (size) => {
    setDataEdit(size);
    setOpenEdit(true);
  };

  const handleEditSize = async (formValues) => {
    try {
      await sizeApi.update(formValues);
      toast.success("Cập nhật size giày thành công");
      (async () => {
        const response = await sizeApi.getAll();
        setSizeList(response.sizes.rows);
      })();
      setOpenEdit(false);
      reset();
    } catch (error) {
      toast.error("Cập nhật size giày thất bại");
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={{ ...style }}>
          <Typography
            align="center"
            fontSize="30px"
            fontWeight={500}
            letterSpacing="1px"
            mb={1}
            textTransform="uppercase"
            color="primary"
          >
            Quản lý size giày
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <InputField
              control={control}
              name="sizeNumber"
              type="number"
              label="Size giày"
            />
            <Button variant="contained" type="submit">
              <Add />
            </Button>
          </Box>
          <Box display="flex" flexWrap="wrap">
            {sizeList &&
              sizeList.length > 0 &&
              sizeList.map((size) => (
                <Box
                  key={size.id}
                  position="relative"
                  padding="25px"
                  border="1px solid #e2e2e2"
                  margin="30px 20px 30px 0"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                  }}
                  onDoubleClick={() => handleOpenEdit(size)}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      borderRadius: "50%",
                      border: "1px solid #d32f2f",
                      color: "#d32f2f",
                      backgroundColor: "#fff",
                      width: "20px",
                      height: "20px",

                      "&:hover": {
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                      },
                    }}
                    onClick={() => handleOpenDelete(size)}
                  >
                    <Close />
                  </IconButton>
                  <Typography color="primary" fontSize={20}>
                    {size.sizeNumber}
                  </Typography>
                </Box>
              ))}
          </Box>
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
        </Box>
      </Modal>

      <Modal open={openDelete} onClose={handleCloseDelete}>
        <Box sx={{ ...style }}>
          <Typography
            align="center"
            fontSize="25px"
            fontWeight={500}
            letterSpacing="1px"
            textTransform="uppercase"
            color="primary"
          >
            Xoá size
          </Typography>
          <Typography align="center" mb={1} mt={3}>
            Bạn có chắc chắn xoá size {dataDelete?.sizeNumber}
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
            onClick={handleCloseDelete}
          >
            <Close />
          </IconButton>
          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              onClick={handleDeleteSize}
              sx={{ mr: 2 }}
            >
              Xoá
            </Button>
            <Button
              variant="contained"
              onClick={handleCloseDelete}
              color="error"
            >
              Hủy
            </Button>
          </Box>
        </Box>
      </Modal>

      {!isEmptyObject(dataEdit) && (
        <SizeEdit
          open={openEdit}
          onClose={handleCloseEdit}
          size={dataEdit}
          onSubmit={handleEditSize}
        />
      )}
    </>
  );
};

export default SizeModal;
