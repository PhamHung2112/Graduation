import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { activeApi, getUserApi } from "../../api/apiClient";
import { ToastContainer, toast } from "react-toastify";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import userApi from "../../api/userApi";

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

export default function UserPage() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    (async () => {
      const response = await userApi.getAll();
      setUserList(response.users.rows);
    })();
  }, []);

  const activeUser = async (id, active) => {
    const checkActive = active === 1 ? 0 : 1;
    const body = {
      id: id,
      active: checkActive,
    };
    await activeApi(body);
    toast.success("Active user thành công");
    (async () => {
      const response = await userApi.getAll();
      setUserList(response.users.rows);
    })();
  };

  return (
    <Box margin="100px 30px 0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Quản lý người dùng
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Người dùng
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
              <TableCell>Họ và tên</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Số điện thoại</TableCell>
              <TableCell align="center">Địa chỉ</TableCell>
              <TableCell align="center">Chức vụ</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList.length > 0 &&
              userList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.phoneNumber}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">
                    {row.role === "Admin" ? "Quản lý" : "Khách hàng"}
                  </TableCell>
                  <TableCell align="center">
                    {row.role === "user" && (
                      <Button
                        variant="contained"
                        color={row.active === 1 ? "primary" : "error"}
                        onClick={() => activeUser(row.id, row.active)}
                      >
                        {row.active === 1 ? "Kích hoạt" : "Không kích hoạt"}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
