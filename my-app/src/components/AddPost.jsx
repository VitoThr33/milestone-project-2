
import React from 'react';
import { Typography, Box, InputLabel, TextField, Button } from "@mui/material";

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
          <InputLabel>Title</InputLabel>
          <TextField />
          <InputLabel>ImageURL</InputLabel>
          <TextField />
          <InputLabel>Post text</InputLabel>
          <TextField
          multiline= {true}
           />
           <Button size="small">Create Post</Button>
          
        </Box>
      </form>
    </div>
  )
}

export default AddPost