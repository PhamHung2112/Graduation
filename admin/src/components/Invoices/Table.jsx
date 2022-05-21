import { Visibility } from "@mui/icons-material";
import {
  Breadcrumbs,
  IconButton,
  TableBody,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import invoiceApi from "../../api/invoiceApi";
import InvoiceDetailModal from "./InvoiceDetailModal";

export default function InvoicePage() {
  const [invoiceList, setInvoiceList] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [invoiceDetail, setInvoiceDetail] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await invoiceApi.getAll();
        setInvoiceList(data.invoices.rows);
        setTotalPage(data.invoices.count);
      } catch (error) {
        toast.error("Lấy danh sách hoá đơn thất bại");
      }
    })();
  }, []);

  const handleClose = () => setOpen(false);
  const handleOpen = (invoice) => {
    setOpen(true);
    setInvoiceDetail(invoice);
  };

  return (
    <Box margin="100px 30px 0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Quản lý hoá đơn
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Hoá đơn
            </Typography>
          </Breadcrumbs>
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
              <TableCell>Voucher</TableCell>
              <TableCell align="center">Tên khách hàng</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Ngày mua</TableCell>
              <TableCell align="center">Phương thức thanh toán</TableCell>
              <TableCell align="center">Tổng tiền</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceList &&
              invoiceList.length > 0 &&
              invoiceList.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {row.voucherId ? row?.Voucher?.voucherName : null}
                  </TableCell>
                  <TableCell align="center">{row?.User.fullName}</TableCell>
                  <TableCell align="center">{row?.User.email}</TableCell>
                  <TableCell align="center">
                    {moment(row?.InvoiceDetails[0].createdAt).format(
                      "DD/MM/YYYY"
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row?.payment === 1
                      ? "Thanh toán online"
                      : "Thanh toán COD"}
                  </TableCell>
                  <TableCell align="center">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(row.total)}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title="Xem thông tin chi tiết hoá đơn"
                      placement="top"
                      arrow
                      disableInteractive
                    >
                      <IconButton
                        color="primary"
                        onClick={() => handleOpen(row.InvoiceDetails)}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <InvoiceDetailModal
        open={open}
        onClose={handleClose}
        invoice={invoiceDetail}
      />
    </Box>
  );
}
