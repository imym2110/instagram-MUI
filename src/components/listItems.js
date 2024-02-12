import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const ListItems = ({ href, icon, primary }) => {
  const Icon = icon;
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItems;
