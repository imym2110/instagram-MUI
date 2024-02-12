import { ImageListItem } from "@mui/material";
import React from "react";

const CutomImageList = ({ image }) => {
  return (
    <ImageListItem>
      <img src={image} alt="name" />
    </ImageListItem>
  );
};

export default CutomImageList;
