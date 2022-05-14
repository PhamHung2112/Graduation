import {
  Book,
  Category,
  Dashboard,
  FileCopy,
  Home,
  Inventory,
  LocationCity,
  People,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
import { Path } from "../constants/path";
import ListMenu from "./ListMenu";

const MAIN_MENU = [
  {
    icon: <Home />,
    label: "Homepage",
    path: Path.HOME_PAGE,
  },
  {
    icon: <Dashboard />,
    label: "Dashboard",
    path: Path.DASHBOARD,
  },
];

const MANAGEMENT_MENU = [
  {
    icon: <Category />,
    label: "Quản lý thương hiệu",
    path: Path.BRAND,
  },
  {
    icon: <Inventory />,
    label: "Quản lý sản phẩm",
    path: Path.PRODUCT,
  },
  {
    icon: <LocationCity />,
    label: "Quản lý mã giảm giá",
    path: Path.VOUCHER,
  },
  {
    icon: <Book />,
    label: "Quản lý tin tức",
    path: Path.BLOG,
  },
  {
    icon: <People />,
    label: "Quản lý người dùng",
    path: Path.USER,
  },
  {
    icon: <FileCopy />,
    label: "Quản lý hoá đơn",
    path: Path.INVOICE,
  },
];

export function Sidebar() {
  return (
    <Box borderRight="1px solid rgba(0, 0, 0, 0.05)" height="100%">
      <Box
        padding="15px 0 0"
        marginBottom="30px"
        textAlign="center"
        borderBottom="1px solid rgba(0, 0, 0, 0.05)"
      >
        <img src={logo} alt="logo" width="120px" height="80px" />
      </Box>
      <Box>
        <Box marginBottom="10px">
          <Typography
            variant="caption"
            color="GrayText"
            padding="5px 25px 5px 25px"
          >
            MAIN
          </Typography>
          <ListMenu options={MAIN_MENU} />
        </Box>
        <Box>
          <Typography
            variant="caption"
            color="GrayText"
            padding="5px 25px 5px 25px"
          >
            Quản lý
          </Typography>
          <ListMenu options={MANAGEMENT_MENU} />
        </Box>
      </Box>
    </Box>
  );
}
