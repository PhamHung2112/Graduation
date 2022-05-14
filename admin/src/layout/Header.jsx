import { Avatar, Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as moment from "moment";
import "moment/locale/vi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authActions, selectCurrentUser } from "../components/Login/authSlice";
import { Path } from "../constants/path";
import { capitalizeFirstLetter, getFirstLetter } from "../utils/common";

export function Header() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    history.push(Path.LOGIN);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      right={0}
      left="280px"
      borderBottom="1px solid rgba(0, 0, 0, 0.05)"
      zIndex={999}
      padding="18px 30px"
      bgcolor="#fff"
    >
      <Box>
        <Typography variant="h5">
          {capitalizeFirstLetter(
            moment().locale("vi").format(`dddd, DD MMMM YYYY`)
          )}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="body1" marginRight="10px">
          {currentUser?.fullName}
        </Typography>
        <Avatar sx={{ bgcolor: "primary.main" }} onClick={handleClick}>
          {getFirstLetter(currentUser?.fullName)}
        </Avatar>

        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
