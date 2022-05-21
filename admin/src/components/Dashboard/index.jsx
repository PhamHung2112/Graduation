import { Paid, People, ShoppingBag } from "@mui/icons-material";
import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import invoiceApi from "../../api/invoiceApi";
import invoiceDetailApi from "../../api/invoiceDetail";
import userApi from "../../api/userApi";
import StatisticItem from "./StatisticItem";

const dataLabel = (name) => {
  switch (name) {
    case "total":
      return "Tổng doanh thu";
    default:
      return "";
  }
};

const CustomTooltipContent = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          padding: "10px",
          width: "250px",
          height: "100px",
          background: "#fff",
          border: "1px solid #1976d2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          lineHeight: 1.8,
        }}
      >
        <p style={{ marginBottom: 0 }}>Tháng: {payload[0].payload.month}</p>
        <p style={{ marginBottom: 0 }}>
          {dataLabel(payload[0].name)}: {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

const DashboardPage = () => {
  const [userList, setUserList] = useState([]);
  const [invoiceDetailList, setInvoiceDetailList] = useState([]);
  const [invoiceList, setInvoiceList] = useState([]);

  console.log(invoiceDetailList);

  const users = userList.filter((x) => x.role !== "Admin");

  const totalMoney = useMemo(() => {
    return invoiceList.reduce((prev, acc) => {
      return prev + acc.total;
    }, 0);
  }, [invoiceList]);

  useEffect(() => {
    (async () => {
      try {
        const response = await userApi.getAll();
        setUserList(response.users.rows);
      } catch (error) {
        toast.error("Lấy danh sách người dùng thất bại");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await invoiceDetailApi.getAll();
        setInvoiceDetailList(response.invoices.rows);
      } catch (error) {
        toast.error("Lấy danh sách thông tin chi tiết hoá đơn thất bại");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await invoiceApi.getAll();
        setInvoiceList(data.invoices.rows);
      } catch (error) {
        toast.error("Lấy danh sách hoá đơn thất bại");
      }
    })();
  }, []);

  const data1 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("01")) return prev + acc.total;
    return prev;
  }, 0);
  const data2 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("02")) return prev + acc.total;
    return prev;
  }, 0);
  const data3 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("03")) return prev + acc.total;
    return prev;
  }, 0);
  const data4 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("04")) return prev + acc.total;
    return prev;
  }, 0);
  const data5 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("05")) return prev + acc.total;
    return prev;
  }, 0);
  const data6 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("06")) return prev + acc.total;
    return prev;
  }, 0);
  const data7 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("07")) return prev + acc.total;
    return prev;
  }, 0);
  const data8 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("08")) return prev + acc.total;
    return prev;
  }, 0);
  const data9 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("09")) return prev + acc.total;
    return prev;
  }, 0);
  const data10 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("10")) return prev + acc.total;
    return prev;
  }, 0);
  const data11 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("11")) return prev + acc.total;
    return prev;
  }, 0);
  const data12 = invoiceList.reduce((prev, acc) => {
    const month = moment(acc.InvoiceDetails[0].createdAt, "YYYY/MM/DD").format(
      "MM"
    );
    if (month.includes("12")) return prev + acc.total;
    return prev;
  }, 0);

  const data = [
    {
      month: 1,
      total: data1,
    },
    {
      month: 2,
      total: data2,
    },
    {
      month: 3,
      total: data3,
    },
    {
      month: 4,
      total: data4,
    },
    {
      month: 5,
      total: data5,
    },
    {
      month: 6,
      total: data6,
    },
    {
      month: 7,
      total: data7,
    },
    {
      month: 8,
      total: data8,
    },
    {
      month: 9,
      total: data9,
    },
    {
      month: 10,
      total: data10,
    },
    {
      month: 11,
      total: data11,
    },
    {
      month: 12,
      total: data12,
    },
  ];

  return (
    <Box margin="100px 30px 0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5" fontWeight={500} marginBottom="15px">
            Thống kê
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="inherit">Trang chủ</Typography>
            <Typography color="primary" fontWeight={500}>
              Thống kê
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <Box padding="30px">
        <Typography variant="h5" mb={3} sx={{ textDecoration: "underline" }}>
          Thống kê
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} xl={4}>
            <StatisticItem
              label="Tổng số người dùng"
              value={users.length}
              icon={<People fontSize="large" color="primary" />}
              unit="người"
            />
          </Grid>
          <Grid item xs={12} lg={4} xl={4}>
            <StatisticItem
              label="Tổng số sản phẩm đã bán"
              value={invoiceDetailList.length}
              icon={<ShoppingBag fontSize="large" color="secondary" />}
              unit="sản phẩm"
            />
          </Grid>
          <Grid item xs={12} lg={4} xl={4}>
            <StatisticItem
              label="Tổng doanh thu"
              value={new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalMoney)}
              icon={<Paid fontSize="large" color="error" />}
            />
          </Grid>
        </Grid>
      </Box>
      <Box padding="30px">
        <Typography variant="h5" mb={3} sx={{ textDecoration: "underline" }}>
          Biểu đồ thống kê doanh thu năm 2022
        </Typography>
        <Box marginTop="20px" width="1000px" height="300px" marginLeft="30px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis width={100} />
              <Tooltip content={<CustomTooltipContent />} />
              <Bar dataKey="total" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
