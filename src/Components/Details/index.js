import { Box } from "@mui/system";
import { productData } from "../../Constants/data";

import React from "react";
import ActionItem from "./ActionItem";
import { Typography } from "@mui/material";
import { useLocation, useSearchParams } from "react-router-dom";

const DetailView = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  console.log(id);

  return (
    <Box>
      <Box>
        <ActionItem data={productData} />
      </Box>
      lo
      <Box>
        <h1></h1>
      </Box>
    </Box>
  );
};

export default DetailView;

// git add .
// git commit -m ""
// git push -u origin branch
