import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import moment from "moment";

const { Close } = require("@mui/icons-material");
const {
  Modal,
  IconButton,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} = require("@mui/material");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const InvoiceDetailModal = ({ invoice, open, onClose }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductApi = async () => {
      const data = await productApi.getAll(100, 1);
      setProductList(data.products.rows);
    };
    getProductApi();
  }, []);

  const getProductName = (productId) => {
    const product = productList.find((x) => x.id === productId);
    return product.productName;
  };

  const getProductImage = (productId) => {
    const product = productList.find((x) => x.id === productId);
    return product?.image.split(",")[0];
  };

  return (
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
          Thông tin hoá đơn
        </Typography>
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
              <TableCell>Ảnh sản phẩm</TableCell>
              <TableCell align="center">Tên sản phẩm</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Ngày mua</TableCell>
              <TableCell align="center">Tổng tiền</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoice &&
              invoice.length > 0 &&
              invoice.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={getProductImage(item.id)}
                      alt={item.id}
                      width={100}
                      height={100}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography>{getProductName(item.id)}</Typography>
                    <Typography>{item.size}</Typography>
                  </TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    {moment(item.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.total)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
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
  );
};

export default InvoiceDetailModal;
