import React,{useState} from 'react';
import { Typography, Box, InputLabel, TextField, Button } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

function AddPost() {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={'column'}
          width={"80%"} 
          border={3}
          borderRadius={10}
          borderColor="black"
          boxShadow="10px 10px 110px black"
          margin={'auto'}
          padding={3}
          marginTop={5}>
          <Typography
            textAlign={'center'}
            fontWeight={'bold'}
          >CREATE NEW POST
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField />
          <InputLabel sx={labelStyles}>Post text</InputLabel>
          <TextField
          multiline= {true}
           />
           <Button size="small" LinkComponent={Link} to="/myposts" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Create Post</Button>
          
        </Box>
      </form>
    </div>
  )
};

export default AddPost