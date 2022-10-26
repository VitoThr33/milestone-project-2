import React,{useState} from 'react';
import { Typography, Box, InputLabel, TextField, Button, FormControlLabel,RadioGroup,Radio} from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import { useStyles } from "./utils";
import axios from "axios";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };



function AddPost() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    imageURL: "",
    post: "",
    sport: "",

    
  });
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("https://cspn-sports.herokuapp.com/users/posts", {
        title: inputs.title,
        image: inputs.imageURL,
        post: inputs.post,
        sport: inputs.sport,
        
        user: localStorage.getItem("_id"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/posts"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

          <InputLabel className={classes.font} sx={labelStyles}>Title</InputLabel>
          <TextField 
          className={classes.font}
          name="title"
          onChange={handleChange}
          value={inputs.title}
          variant="outlined"/>
          <InputLabel className={classes.font} sx={labelStyles}>ImageURL</InputLabel>
          <TextField
           className={classes.font}
           name="imageURL"
           onChange={handleChange}
           value={inputs.imageURL}
           variant="outlined" />
           <InputLabel className={classes.font} sx={labelStyles}>
           Post
          </InputLabel>
          <TextField
            className={classes.font}
            name="post"
            onChange={handleChange}
            value={inputs.post}
            variant="outlined"
            multiline={true}
           />
           <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel  name="sport" onChange={handleChange}  value={inputs.sport} control={<Radio />} label="Baseball" />
        <FormControlLabel name="sport" onChange={handleChange}  value={inputs.sport} control={<Radio />} label="Football" />
        <FormControlLabel name="sport" onChange={handleChange}  value={inputs.sport} control={<Radio />} label="Basketball" />
        <FormControlLabel name="sport" onChange={handleChange}  value={inputs.sport} control={<Radio />} label="Soccer" />
        <FormControlLabel name="sport" onChange={handleChange}  value={inputs.sport} control={<Radio />} label="Other" />
      </RadioGroup>
           <Button type="submit" LinkComponent={Link} to="/myposts" variant='contained' sx={{ margin: 1, borderRadius: 4 }} color="warning">Create Post</Button>

           
       

          
        </Box>
      </form>
    </div>
  )
};

export default AddPost