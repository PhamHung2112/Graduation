import { Add, Close, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { deleteBrandApi } from "../../api/apiClient";
import brandApi from "../../api/brandApi";
import { imageUpload } from "../../helper/imageUpload";
import TypeTable from "./TypeTable";
import AddTypeModal from "./AddTypeModal";
import typeApi from "../../api/typeApi";

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

export default function BrandPage() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [dataList, setDataList] = useState();
  const [callList, setCallList] = useState(false);
  const callApiList = async () => {
    const data = await brandApi.getAll();
    setDataList(data.brands.rows);
  };

  useEffect(() => {
    try {
      callApiList();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [callList]);

  const [baseImage, setBaseImage] = useState({
    img: null,
  });
  const targetupload = useRef(null);
  //image
  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];
    files.forEach((file) => {
      if (!file) return (err = "File does not exist.");

      if (file.size > 1024 * 1024 * 5) {
        return (err = "The image largest is 5mb.");
      }

      return newImages.push(file);
    });
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBaseImage({ img: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    if (err) {
      console.log("err roi nhe!");
    }
    setImages([...images, ...newImages]);
  };

  //bsse create

  const [form, setForm] = useState({
    brandName: "",
  });
  const onChangInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setForm({ ...form, [name]: value });
  };

  //end

  const formDataUploadServer = async () => {
    try {
      if (form.brandName.length > 1) {
        const res = await imageUpload(images);
        const data = {
          image: res[0].url,
          brandName: form.brandName,
        };
        await brandApi.create(data);
        setBaseImage("");
        toast.success("Tạo thương hiệu mới thành công");
        setCallList(!callList);
        setOpen(false);
      } else {
        toast.error("Tất cả các trường phải có");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const [id, setId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState({
    brandName: "",
    id: id,
  });
  const openDeleteRow = async (id) => {
    setOpenDelete(true);
    setId(id);
    const data = await brandApi.getById(id);
    setDataDelete({
      brandName: data.brand.brandName,
      id: id,
    });
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleDeleteBrand = async () => {
    try {
      await deleteBrandApi(id);
      setOpenDelete(false);
      setCallList(!callList);
      toast.success("Xóa thương hiệu thành công");
    } catch (error) {}
  };

  const [dataEdit, setDataEdit] = useState({
    brandName: "",
    image: "",
    id: id,
  });
  const [openEdit, setOpenEdit] = useState(false);
  const openEditRow = async (id) => {
    try {
      setOpenEdit(true);
      setId(id);
      const data = await brandApi.getById(id);
      setDataEdit({
        brandName: data.brand.brandName,
        image: data.brand.image,
        id: id,
      });
    } catch (error) {}
  };

  const onChangInputEdit = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setDataEdit({ ...dataEdit, [name]: value });
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const formEditDataUploadServer = async () => {
    try {
      if (baseImage.img != null && dataEdit.brandName.length > 1) {
        const res = await imageUpload(images);
        const data = {
          image: res[0].url,
          brandName: dataEdit.brandName,
          id: id,
        };
        await brandApi.update(data);
        setBaseImage("");
        toast.success("Sửa thương hiệu thành công");
        setOpenEdit(false);
        setCallList(!callList);
      } else if (dataEdit.brandName.length > 1) {
        const data = {
          image: dataEdit.image,
          brandName: dataEdit.brandName,
          id: id,
        };
        await brandApi.update(data);
        setBaseImage("");
        toast.success("Sửa thương hiệu thành công");
        setOpenEdit(false);
        setCallList(!callList);
      } else {
        toast.error("Tất cả các trường phải có");
      }
    } catch (error) {}
  };

  // type
  const [openTypeModal, setOpenTypeModal] = useState(false);

  const handleCloseTypeModal = () => setOpenTypeModal(false);
  const handleOpenTypeModal = () => setOpenTypeModal(true);

  const options = dataList?.reduce((prev, acc) => {
    const obj = {};
    obj.value = acc.id;
    obj.label = acc.brandName;
    prev.push(obj);
    return prev;
  }, []);

  const handleAddType = async (formValues) => {
    try {
      await typeApi.create(formValues);
      handleCloseTypeModal();
      toast.success("Thêm loại thương hiệu mới thành công");
      callApiList();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Box margin="100px 30px 0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Quản lý thương hiệu
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Thương hiệu
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box display="flex">
          <Button
            variant="contained"
            startIcon={<Add />}
            color="primary"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            Thêm thương hiệu
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            color="error"
            onClick={handleOpenTypeModal}
          >
            Thêm loại thương hiệu
          </Button>
        </Box>
      </Box>
      <Box margin="20px 0 40px">
        <Table
          sx={{
            border: "1px solid #e2e2e2",

            "& .MuiTableCell-head": {
              borderRight: "1px solid #e2e2e2",
              fontWeight: 600,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Tên thương hiệu</TableCell>
              <TableCell align="center">Ảnh thương hiệu</TableCell>
              <TableCell align="center">Loại thương hiệu</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!dataList &&
              dataList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.brandName}
                  </TableCell>

                  <TableCell align="center">
                    <img
                      src={row.image}
                      alt="error"
                      width="80px"
                      height="80px"
                    />
                  </TableCell>

                  <TableCell>
                    {row.Types.map((type) => (
                      <TypeTable
                        key={type.id}
                        type={type}
                        callApiList={callApiList}
                      >
                        {type.typeName}
                      </TypeTable>
                    ))}
                  </TableCell>

                  <TableCell align="center">
                    <Tooltip
                      title="Sửa thương hiệu"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => openEditRow(row.id)}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Xoá thương hiệu"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => openDeleteRow(row.id)}
                      >
                        <Delete color="error" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      {/* thêm */}
      <Modal open={open} onClose={handleClose}>
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
            Thêm thương hiệu
          </Typography>

          <TextField
            label="Tên thương hiệu"
            variant="outlined"
            name="brandName"
            value={form.brandName}
            fullWidth
            margin="normal"
            sx={{ mb: 3 }}
            onChange={onChangInput}
          />

          <div className="textimageBrand"> Ảnh brand : </div>
          <div
            className="imgbrand"
            onClick={() => targetupload.current.click()}
          >
            {baseImage.img === null ? (
              ""
            ) : (
              <img src={baseImage.img} width="100" height="100" alt="" />
            )}
          </div>
          <input
            ref={targetupload}
            type="file"
            multiple
            accept="image/*"
            onChange={handleChangeImages}
            className="inputImage"
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
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              onClick={() => formDataUploadServer()}
              sx={{ mr: 2 }}
            >
              Thêm mới
            </Button>
            <Button variant="contained" onClick={handleClose} color="error">
              Hủy
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* edit */}

      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box component="form" sx={{ ...style }}>
          <Typography
            align="center"
            fontSize="30px"
            fontWeight={500}
            letterSpacing="1px"
            mb={1}
            textTransform="uppercase"
            color="primary"
          >
            Cập nhật thương hiệu
          </Typography>

          <TextField
            label="Tên thương hiệu"
            variant="outlined"
            name="brandName"
            value={dataEdit.brandName}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
            sx={{ mb: 3 }}
          />

          <Typography>Ảnh thương hiệu cũ</Typography>
          <div className="imgbrand">
            <img src={dataEdit.image} width="100" height="100" alt="" />
          </div>

          <div className="textimageBrand"> Ảnh thương hiệu mới : </div>
          <div
            className="imgbrand"
            onClick={() => targetupload.current.click()}
          >
            {baseImage.img === null ? (
              ""
            ) : (
              <img src={baseImage.img} width="100" height="100" alt="" />
            )}
          </div>
          <input
            ref={targetupload}
            type="file"
            multiple
            accept="image/*"
            onChange={handleChangeImages}
            className="inputImage"
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
            onClick={handleCloseEdit}
          >
            <Close />
          </IconButton>
          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              onClick={formEditDataUploadServer}
              sx={{ mr: 2 }}
            >
              Cập nhật
            </Button>
            <Button variant="contained" onClick={handleCloseEdit} color="error">
              Hủy
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* xoa */}

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
            Xoá thương hiệu
          </Typography>
          <Typography align="center" mb={1} mt={3}>
            Bạn có chắc chắn xoá thương hiệu {dataDelete.brandName}
          </Typography>
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
            onClick={handleCloseDelete}
          >
            <Close />
          </IconButton>
          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              onClick={handleDeleteBrand}
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

      <AddTypeModal
        open={openTypeModal}
        onCloseModal={handleCloseTypeModal}
        options={options}
        onSubmit={handleAddType}
      />
    </Box>
  );
}
