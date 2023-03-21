import { Box , styled} from "@mui/system";
import { productData } from "../../Constants/data";


import React from "react";
import ActionItem from "./ActionItem";
// import { Typography } from "@mui/material";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

// const Container = styled(Grid)(({ theme }) => ({
//   background: '#FFFFFF',
//   display: 'flex',
//   [theme.breakpoints.down('md')]: {
//       margin: 0
//   }
// }))


const DetailView = () => {
  // let [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const id = queryParams.get("id");
  // console.log(id);
  const {id} = useParams()
console.log(id);
const clickedProduct = productData.filter((product,index)=>{
  return id === product.id
})
  return (
    <Box>
      <Box>
        <ActionItem data={clickedProduct[0]} />
      </Box>
      <Box>
      </Box>
    </Box>
  );
};

export default DetailView;

// git add .
// git commit -m ""
// git push -u origin branch
