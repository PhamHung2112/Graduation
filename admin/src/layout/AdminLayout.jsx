import { Box } from "@mui/material";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import BrandPage from "../components/Brand/Table";
import { Path } from "../constants/path";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import VoucherPage from "../components/Voucher";
import UserPage from "../components/User/Table";
import ProductTable from "../components/Product/Table";
import BlogPage from "../components/Blog/Table";
import InvoicePage from "../components/Invoices/Table";
import DashboardPage from "../components/Dashboard";

const AdminLayout = () => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={`'sidebar header' 'sidebar main'`}
      gridTemplateColumns="280px 1fr"
      gridTemplateRows="auto 1fr"
      minHeight="100vh"
    >
      <Box gridArea="sidebar">
        <Sidebar />
      </Box>
      <Box gridArea="header">
        <Header />
      </Box>
      <Box gridArea="main" bgcolor="#f4f5f7">
        <Switch>
          <Route path={Path.BRAND}>
            <BrandPage />
          </Route>
          <Route path={Path.USER}>
            <UserPage />
          </Route>
          <Route path={Path.VOUCHER}>
            <VoucherPage />
          </Route>
          <Route path={Path.PRODUCT}>
            <ProductTable />
          </Route>
          <Route path={Path.BLOG}>
            <BlogPage />
          </Route>
          <Route path={Path.INVOICE}>
            <InvoicePage />
          </Route>
          <Route path={Path.DASHBOARD}>
            <DashboardPage />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default AdminLayout;
