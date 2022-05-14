import { Delete, Edit, MoreHoriz } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { memo, useState } from "react";
import { toast } from "react-toastify";
import typeApi from "../../api/typeApi";
import DeleteTypeModal from "./DeleteTypeModal";
import EditTypeModal from "./EditTypeModal";

const TypeTable = ({ type, callApiList }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleUpdateType = async (formValues) => {
    const values = { ...formValues, id: type.id };
    try {
      await typeApi.update(values);
      toast.success("Cập nhật loại thương hiệu mới thành công");
      callApiList();
      handleCloseEditModal();
    } catch (error) {
      toast.error(error);
    }
  };
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleDeleteType = async () => {
    try {
      await typeApi.delete(type.id);
      toast.success("Xoá loại thương hiệu mới thành công");
      callApiList();
      handleCloseDeleteModal();
    } catch (error) {
      toast.error(error);
    }
  };
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      key={type.id}
    >
      <Typography
        fontWeight={500}
        lineHeight="30px"
        marginRight="10px"
        fontSize="15px"
      >
        {type.typeName}
      </Typography>
      <IconButton onClick={handleClick}>
        <MoreHoriz />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.05))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleOpenEditModal}>
          <Edit sx={{ mr: 1 }} color="primary" /> Sửa loại thương hiệu
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleOpenDeleteModal}>
          <Delete sx={{ mr: 1 }} color="error" /> Xoá loại thương hiệu
        </MenuItem>
      </Menu>
      <EditTypeModal
        type={type}
        onSubmit={handleUpdateType}
        onCloseModal={handleCloseEditModal}
        open={openEditModal}
      />
      <DeleteTypeModal
        type={type}
        onSubmit={handleDeleteType}
        onCloseModal={handleOpenDeleteModal}
        open={openDeleteModal}
      />
    </Box>
  );
};

export default memo(TypeTable);
