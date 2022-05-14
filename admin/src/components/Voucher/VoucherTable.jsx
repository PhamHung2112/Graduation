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
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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

export default function VoucherTable({
  voucherList,
  onOpenModal,
  onUpdate,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState();

  const handleUpdate = (voucher) => {
    onUpdate(voucher);
    onOpenModal();
  };

  const handleDeleteClick = (voucher) => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDeleteConfirm = (voucher) => {
    setOpen(false);
    onDelete(voucher);
  };

  return (
    <Box margin="100px 30px 0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Quản lý mã giảm giá
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Mã giảm giá
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box display="flex">
          <Button
            variant="contained"
            startIcon={<Add />}
            color="primary"
            sx={{ mr: 2 }}
            onClick={onOpenModal}
          >
            Thêm mã giảm giá
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
              <TableCell>Tên mã giảm giá</TableCell>
              <TableCell align="center">Phần trăm giảm giá</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {voucherList &&
              voucherList.length > 0 &&
              voucherList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.voucherName}</TableCell>
                  <TableCell align="center">{row.voucherPercent}%</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title="Sửa mã giảm giá"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => handleUpdate(row)}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Xoá mã giảm giá"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        sx={{ mr: 1 }}
                        onClick={() => handleDeleteClick(row)}
                        onMouseOver={() => setSelectedVoucher(row)}
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
      {selectedVoucher && (
        <Modal open={open} onClose={handleClose}>
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
              Bạn có chắc chắn xoá mã {selectedVoucher.voucherName}
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
              onClick={handleClose}
            >
              <Close />
            </IconButton>
            <Box display="flex" mt={3} justifyContent="center">
              <Button
                variant="contained"
                onClick={() => handleDeleteConfirm(selectedVoucher)}
                sx={{ mr: 2 }}
              >
                Xoá
              </Button>
              <Button variant="contained" onClick={handleClose} color="error">
                Hủy
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
