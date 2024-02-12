import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import React from "react";
import ListItems from "./listItems";

const SideBar = ({ mode, setMode }) => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} p={2} flex={1}>
      <Box position="fixed">
        <List>
          <ListItems href="#home" icon={HomeIcon} primary="Homepage" />
          <ListItems href="#Pages" icon={ArticleIcon} primary="Pages" />
          <ListItems href="#Groups" icon={GroupsIcon} primary="Groups" />
          <ListItems
            href="#Market"
            icon={StorefrontIcon}
            primary="Marketplace"
          />
          <ListItems href="#Friends" icon={PeopleIcon} primary="Friends" />
          <ListItems href="#Settings" icon={SettingsIcon} primary="Settings" />
          <ListItems href="#Profile" icon={AccountBoxIcon} primary="Profile" />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#mode">
              <ListItemIcon>
                <Brightness2Icon />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
