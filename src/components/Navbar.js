import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import AnchorIcon from "@mui/icons-material/Anchor";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ boxShadow: "none" }} position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Protest Revolution",
            display: { xs: "none", sm: "block" },
          }}
        >
          Instagram
        </Typography>
        <AnchorIcon
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase
            placeholder="search..."
            sx={{ color: "black" }}
          ></InputBase>
        </Search>
        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Avatar>
        </IconsContainer>
        <UserContainer>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Avatar>
        </UserContainer>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
