import {Box, Button} from '@mui/material';
// import { productData } from "../../Constants/data";

// const LeftContainer = 

const ActionItem = ({ productData }) => {
  return (
    <Box>
      {/* <img src={productData.detailUrl}/> */}
      <h1>product1</h1>
      <Button variant='contained'>Add to Cart</Button>
      <Button variant='contained'>Buy Now</Button>
    </Box>
  )
}

export default ActionItem;
