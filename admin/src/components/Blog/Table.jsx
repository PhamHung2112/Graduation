import { Add, Close, Delete, Edit } from "@mui/icons-material";
import PhotoIcon from "@mui/icons-material/Photo";
import {
  Breadcrumbs,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { createBlog } from "../../api/apiClient";
import blogApi from "../../api/blogApi";
import { imageUpload } from "../../helper/imageUpload";
import TextEditor from "../Editor/Editor";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function BlogPage() {
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const res = await blogApi.getAll(4, page);
        setBlogList(res.blogs.rows);
        setTotalPage(res.blogs.count);
      } catch (error) {
        toast.error("Lấy thông tin tin tức thất bại");
      }
    })();
  }, [page]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
      toast.error(err);
    }
    setImages([...images, ...newImages]);
  };

  //bsse create

  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
  });
  const onChangInput = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    setForm({ ...form, [name]: value });
  };

  //end

  const formDataUploadServer = async () => {
    try {
      if (form.title.length > 1 && form.summary.length > 1) {
        const res = await imageUpload(images);
        const data = {
          image: res[0].url,
          ...form,
        };
        await createBlog(data);
        setBaseImage("");
        toast.success("Tạo tin tức thành công");
        setOpen(false);
        (async () => {
          try {
            const res = await blogApi.getAll(8, page);
            setBlogList(res.blogs.rows);
            setTotalPage(res.blogs.count);
          } catch (error) {
            toast.error("Lấy thông tin tin tức thất bại");
          }
        })();
      } else {
        toast.error("Tất cả các trường phải có");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleChangeContent = (newState) => {
    setForm({ ...form, content: newState });
  };

  const handleChangePage = (e, page) => {
    setPage(page);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [formEdit, setFormEdit] = useState({
    title: "",
    content: "",
    image: "",
    summary: "",
    id: "",
  });
  const onChangInputEdit = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setFormEdit({ ...formEdit, [name]: value });
  };
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenEdit = (blog) => {
    setOpenEdit(true);
    setFormEdit({
      title: blog.title,
      content: blog.content,
      summary: blog.summary,
      image: blog.image,
      id: blog.id,
    });
  };

  const formDataEditUploadServer = async () => {
    try {
      if (formEdit.title.length > 1 && formEdit.summary.length > 1) {
        const res = await imageUpload(images);
        const data = {
          image: res[0].url,
          ...formEdit,
        };
        await blogApi.update(data);
        setBaseImage("");
        toast.success("Cập nhật tin tức thành công");
        setOpenEdit(false);
        (async () => {
          try {
            const res = await blogApi.getAll(8, page);
            setBlogList(res.blogs.rows);
            setTotalPage(res.blogs.count);
          } catch (error) {
            toast.error("Lấy thông tin tin tức thất bại");
          }
        })();
      } else {
        toast.error("Tất cả các trường phải có");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const [openDelete, setOpenDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState();
  const handleOpenDelete = (blog) => {
    setDataDelete(blog);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => setOpenDelete(false);

  const handleDeleteBlog = async () => {
    try {
      await blogApi.delete(dataDelete.id);
      setOpenDelete(false);
      toast.success("Xóa tin tức thành công");
      (async () => {
        try {
          const res = await blogApi.getAll(8, page);
          setBlogList(res.blogs.rows);
          setTotalPage(res.blogs.count);
        } catch (error) {
          toast.error("Lấy thông tin tin tức thất bại");
        }
      })();
    } catch (error) {}
  };

  return (
    <Box margin="100px 30px 0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Quản lý tin tức
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Tin tức
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
            Thêm tin tức
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
              <TableCell>#</TableCell>
              <TableCell>Tiêu đề</TableCell>
              <TableCell align="center">Ảnh tin tức</TableCell>
              <TableCell align="center">Mô tả</TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogList &&
              blogList.length > 0 &&
              blogList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell align="center">
                    <img src={row.image} alt="" width={140} height={140} />
                  </TableCell>
                  <TableCell align="center">{row.summary}</TableCell>
                  <TableCell align="center">
                    {row?.createdAt
                      ? new Date(row?.createdAt).toLocaleString()
                      : ""}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title="Sửa tin tức"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => handleOpenEdit(row)}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Xoá tin tức"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => handleOpenDelete(row)}
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 1200, position: "relative" }}>
          <Typography
            align="center"
            fontSize="30px"
            fontWeight={500}
            letterSpacing="1px"
            mb={1}
            textTransform="uppercase"
            color="primary"
          >
            Thêm mới tin tức
          </Typography>

          <TextField
            label="Tiêu đề"
            multiline
            variant="outlined"
            name="title"
            value={form.title}
            onChange={onChangInput}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tóm tắt"
            multiline
            variant="outlined"
            name="summary"
            value={form.summary}
            onChange={onChangInput}
            fullWidth
            margin="normal"
          />
          <Typography my={2} fontWeight={500}>
            Nội dung
          </Typography>
          <div
            style={{
              height: 380,
              marginTop: 5,
              // marginBottom:30,
              paddingBottom: 50,
            }}
          >
            <TextEditor onEditorStateChange={handleChangeContent} />
          </div>

          <Typography my={2} fontWeight={500}>
            Ảnh tin tức
          </Typography>
          <div
            className="imgbrand"
            onClick={() => targetupload.current.click()}
          >
            {baseImage.img === null ? (
              <>
                <PhotoIcon />
              </>
            ) : (
              <img src={baseImage.img} width="100px" height="100px" alt="" />
            )}
          </div>
          <input
            ref={targetupload}
            type="file"
            multiple
            accept="image/*"
            onChange={handleChangeImages}
            // onChange={(e) => handleUpload(e)}
            className="inputImage"
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

      <Modal open={openEdit} onClose={handleCloseEdit}>
        <Box
          sx={{
            ...style,
            width: 1200,
            position: "relative",
            height: "800px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#cccccc",
              borderRadius: "8px",
            },
          }}
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
            Cập nhật tin tức
          </Typography>

          <TextField
            label="Tiêu đề"
            multiline
            variant="outlined"
            name="title"
            value={formEdit.title}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tóm tắt"
            multiline
            variant="outlined"
            name="summary"
            value={formEdit.summary}
            onChange={onChangInputEdit}
            fullWidth
            margin="normal"
          />
          <Typography my={2} fontWeight={500}>
            Nội dung
          </Typography>
          <div
            style={{
              height: 380,
              marginTop: 5,
              paddingBottom: 50,
            }}
          >
            <TextEditor
              onEditorStateChange={handleChangeContent}
              content={formEdit.content}
            />
          </div>
          <Typography my={2} fontWeight={500}>
            Ảnh tin tức
          </Typography>
          <div className="imgbrand">
            <img src={formEdit.image} width="100" height="100" alt="" />
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
            // onChange={(e) => handleUpload(e)}
          />

          <Box display="flex" mt={3} justifyContent="center">
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              onClick={formDataEditUploadServer}
            >
              Cập nhật
            </Button>
            <Button variant="contained" onClick={handleCloseEdit} color="error">
              Hủy
            </Button>
          </Box>
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
            Xoá thương hiệu
          </Typography>
          <Typography align="center" mb={1} mt={3}>
            Bạn có chắc chắn xoá tin tức {dataDelete?.title}
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
              onClick={handleDeleteBlog}
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
          count={Math.ceil(totalPage / 4)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
  );
}
