import { Add, Close, Delete, Edit, Visibility } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import typeApi from "../../api/typeApi";
import productApi from "../../api/productApi";
// import {
//   deleteProductApi,
//   editProductApi,
//   getProduct,
//   getType,
//   postProduct,
//   updateProductApi,
// } from "../../api/apiClient";
import { imageUpload } from "../../helper/imageUpload";
import ProductModal from "./ProductModal";
import SizeModal from "./SizeModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ProductTable() {
  const [openInfor, setOpenInfor] = useState(false);
  const [productInfor, setProductInfor] = useState();
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenInfor = (product) => {
    setOpenInfor(true);
    setProductInfor(product);
  };
  const handleCloseInfor = () => {
    setOpenInfor(false);
  };

  const [baseImage, setBaseImage] = useState([]);

  //image
  const handleChangeImages = (e) => {
    const files = [...e.target.files];
    let err = "";
    let newImages = [];
    files.forEach((file) => {
      if (!file) return (err = "File không tồn tại");

      if (file.size > 1024 * 1024 * 5) {
        return (err = "Kích thước ảnh tối đa 5mb.");
      }

      return newImages.push(file);
    });
    if (err) {
      toast.error(err);
    }
    const fileArray = [];
    const fileObj = [];
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setBaseImage(fileArray);
    setImages([...images, ...newImages]);
  };

  //bsse create

  const [dataList, setDataList] = useState();
  const [callList, setCallList] = useState(false);
  const [listProduct, setListProduct] = useState();
  const callApiList = async () => {
    const data = await typeApi.getAll();
    setDataList(data.types.rows);
  };
  const getProductApi = async () => {
    const data = await productApi.getAll(8, page);
    setListProduct(data.products.rows);
    setTotalPage(data.products.count);
  };
  useEffect(() => {
    try {
      callApiList();
      getProductApi();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [callList, page]);

  const [form, setForm] = useState({
    productName: "",
    productPrice: 0,
    discount: 0,
    summary: "",
    typeId: "",
    image: "",
  });

  useEffect(() => {
    try {
      callApiList();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [callList]);

  const onChangInput = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    setForm({ ...form, [name]: value });
  };

  const formDataUploadServer = async () => {
    try {
      if (
        form.productName.length > 1 &&
        form.productPrice.length > 1 &&
        form.summary.length > 1 &&
        form.typeId !== 0
      ) {
        const res = await imageUpload(images);
        const arr = [];
        for (var i = 0; i < res.length; i++) {
          arr.push(res[i].url);
        }
        const data = {
          image: arr.toString(),
          productName: form.productName,
          summary: form.summary,
          discount: +form.discount,
          productPrice: +form.productPrice,
          typeId: +form.typeId,
        };
        setImages([]);
        await productApi.create(data);
        toast.success("Thêm mới sản phẩm thành công");
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
  const [dataDelete, setDataDelete] = useState();

  const openDeleteRow = async (id) => {
    setOpenDelete(true);
    setId(id);
    const res = await productApi.getById(id);
    setDataDelete(res.product);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const deleteBrand = async () => {
    try {
      await productApi.delete(id);
      setOpenDelete(false);
      setCallList(!callList);
      toast.success("Xóa sản phẩm thành công");
    } catch (error) {}
  };

  //

  const [openEdit, setOpenEdit] = useState(false);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const [formEdit, setFormEdit] = useState({
    productName: "",
    productPrice: "",
    discount: "",
    summary: "",
    typeId: "",
    image: "",
  });
  const deleteImageOle = (e) => {
    const dataImageOle = formEdit.image.filter((img) => img !== e);
    setFormEdit({ ...formEdit, image: dataImageOle });
  };

  const openEditRow = async (id) => {
    setOpenEdit(true);
    setId(id);
    const res = await productApi.getById(id);
    const arrImage = res.product.image.split(",");
    setFormEdit({
      productName: res.product.productName,
      productPrice: res.product.productPrice,
      discount: res.product.discount,
      summary: res.product.summary,
      typeId: res.product.typeId,
      image: arrImage,
    });
  };

  const onChangInputEdit = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    setFormEdit({ ...formEdit, [name]: value });
  };

  const formEditDataUploadServer = async () => {
    if (
      formEdit.productName.length > 1 &&
      formEdit.productPrice > 1 &&
      formEdit.summary.length > 1 &&
      formEdit.typeId !== 0
    ) {
      const res = await imageUpload(images);
      const arr = [];
      for (var i = 0; i < res.length; i++) {
        arr.push(res[i].url);
      }
      const arrKetnoi = arr.concat(formEdit.image).toString();
      const data = {
        productName: formEdit.productName,
        productPrice: formEdit.productPrice,
        discount: formEdit.discount,
        summary: formEdit.summary,
        typeId: formEdit.typeId,
        image: arrKetnoi,
        id: id,
      };

      setImages([]);
      await productApi.update(data);
      toast.success("Cập nhật sản phẩm thành công");
      setCallList(!callList);
      setOpenEdit(false);
    } else {
      toast.error("Tất cả các trường phải có");
    }
  };

  const [openSize, setOpenSize] = useState(false);

  const handleOpenSize = () => setOpenSize(true);
  const handleCloseSize = () => setOpenSize(false);

  const handleChangePage = (e, page) => {
    setPage(page);
  };

  return (
    <Box style={{ margin: "100px 30px 0 30px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Quản lý sản phẩm
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Sản phẩm
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box display="flex">
          <Button
            variant="contained"
            color="error"
            sx={{ mr: 2 }}
            onClick={handleOpenSize}
          >
            Quản lý size giày
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            color="primary"
            onClick={handleOpen}
          >
            Thêm sản phẩm
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
              <TableCell>Ảnh sản phẩm</TableCell>
              <TableCell align="left">Tên sản phẩm</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center">Giảm giá</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            {!!listProduct &&
              listProduct.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <img
                      src={row.image.split(",")[0]}
                      alt={row.productName}
                      width={180}
                      height={180}
                    />
                  </TableCell>
                  <TableCell align="left">{row.productName}</TableCell>
                  <TableCell align="center">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(row.productPrice)}
                  </TableCell>
                  <TableCell align="center">
                    {row.discount > 0 ? row.discount + "%" : 0}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title="Xem thông tin chi tiết sản phẩm"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="secondary"
                        sx={{ mr: 1 }}
                        onClick={() => handleOpenInfor(row)}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Sửa sản phẩm"
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
                      title="Xoá sản phẩm"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
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

      <Box
        marginBottom="40px"
        width="100%"
        sx={{
          "& > nav": {
            justifyContent: "center",
            width: "100%",
            display: "flex",
          },
        }}
      >
        <Pagination
          color="primary"
          count={Math.ceil(totalPage / 8)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>

      {/* Create */}
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
            Thêm sản phẩm
          </Typography>

          <TextField
            label="Tên sản phẩm"
            variant="outlined"
            name="productName"
            value={form.productName}
            onChange={onChangInput}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Giá"
            variant="outlined"
            type="number"
            name="productPrice"
            value={form.productPrice}
            onChange={onChangInput}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Giảm giá"
            type="number"
            variant="outlined"
            name="discount"
            value={form.discount}
            onChange={onChangInput}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Mô tả"
            multiline
            variant="outlined"
            name="summary"
            value={form.summary}
            onChange={onChangInput}
            fullWidth
            margin="normal"
          />

          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="typeId">Loại thương hiệu</InputLabel>
            <Select
              labelId="typeId"
              label="Loại thương hiệu"
              value={form.typeId}
            >
              {!!dataList &&
                dataList.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.typeName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Typography my={2} fontSize={16}>
            Ảnh sản phẩm
          </Typography>
          <Box mb={3} display="flex" flexWrap="wrap">
            {baseImage.length > 0
              ? baseImage.map((image, index) => (
                  <Box mr={3} key={index}>
                    <img src={image} width={120} height={120} alt={index} />
                  </Box>
                ))
              : null}
          </Box>
          <input type="file" multiple onChange={handleChangeImages} />

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
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={formDataUploadServer}
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
            Cập nhật sản phẩm
          </Typography>

          <TextField
            id="standard-textarea"
            label="Tên sản phẩm"
            variant="outlined"
            name="productName"
            value={formEdit.productName}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Giá sản phẩm"
            variant="outlined"
            type="number"
            name="productPrice"
            value={formEdit.productPrice}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Giảm giá"
            type="number"
            variant="outlined"
            name="discount"
            value={formEdit.discount}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
          />

          <TextField
            label="summary"
            multiline
            variant="outlined"
            name="summary"
            value={formEdit.summary}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
          />

          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="typeId">Loại thương hiệu</InputLabel>
            <Select
              labelId="typeId"
              label="Loại thương hiệu"
              value={formEdit.typeId}
            >
              {!!dataList &&
                dataList.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.typeName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Typography my={2} fontSize={16}>
            Ảnh sản phẩm
          </Typography>
          <Box mb={3} display="flex" flexWrap="wrap">
            {!!formEdit.image &&
              formEdit.image.map((e, index) => {
                return (
                  <Box
                    key={index}
                    mr={3}
                    position="relative"
                    sx={{
                      "& img": {
                        border: "1px solid #e2e2e2",
                      },
                    }}
                  >
                    <ClearIcon
                      className="icondelete"
                      onClick={() => deleteImageOle(e)}
                      sx={{
                        position: "absolute",
                        left: "-10px",
                        top: "-10px",
                        cursor: "pointer",
                      }}
                    />
                    <img src={e} alt="error" width={100} height={100} />
                  </Box>
                );
              })}
          </Box>

          <div className="imageProduct">Thêm ảnh</div>

          <input type="file" multiple onChange={handleChangeImages} />

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
            onClick={handleCloseEdit}
          >
            <Close />
          </IconButton>
          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={formEditDataUploadServer}
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
            Xoá sản phẩm
          </Typography>
          <Typography align="center" mb={1} mt={3}>
            Bạn có chắc chắn xoá sản phẩm {dataDelete?.productName}
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
            <Button variant="contained" onClick={deleteBrand} sx={{ mr: 2 }}>
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

      <ProductModal
        open={openInfor}
        onCloseModal={handleCloseInfor}
        product={productInfor}
      />

      <SizeModal open={openSize} onClose={handleCloseSize} />
    </Box>
  );
}
