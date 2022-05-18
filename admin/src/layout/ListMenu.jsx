import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ListMenu({ options }) {
  return (
    <List sx={{ m: 0 }}>
      {options.map((option, index) => (
        <Box
          key={index}
          sx={{
            "& > a.active > li > div": {
              backgroundColor: "#1976d2",

              "& > div": {
                color: "#fff",
              },
            },
          }}
        >
          <NavLink
            to={option.path}
            style={{ textDecoration: "none", color: "inherit" }}
            exact
          >
            <ListItem
              disablePadding
              sx={{ padding: "5px 15px", backgroundColor: "transparent" }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </Box>
      ))}
    </List>
  );
}
