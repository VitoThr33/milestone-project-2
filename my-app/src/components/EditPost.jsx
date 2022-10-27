import { useLocation, useNavigate } from "react-router-dom"
import React, { useState, useEffect, useRef } from "react"
import { Typography, Box, InputLabel, TextField, Button, FormControlLabel,RadioGroup,Radio} from "@mui/material";
import { useStyles } from "./utils";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

function EditPost() {
    //navigate
    const navigate = useNavigate();
    
    //get id from pathname
    const location = useLocation();
    const id = location.pathname.substring(12);
    console.log(id);

    //styling
    const classes = useStyles();

    //state variables to get data
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(false);

    //input to store data
    const [inputs, setInputs] = useState({
        title: "",
        imageURL: "",
        text: ""
    });

    //run once to fetch data from api
    useEffect(() => {
        async function getData() {
          const response = await fetch(`https://cspn-sports.herokuapp.com/posts/${id}`);
          const result = await response.json();
          setData(result);
          console.log(result);
        }
  
        getData();
    }, []);

    //run after first render to re-render main page
    useEffect(() => {
        if (isMounted.current) {
          setIsLoading(false)
        } else {
          isMounted.current = true;
        }
    }, [data])

    //function to handle submit
    async function handleSubmit(event) {
        await fetch(`https://cspn-sports.herokuapp.com/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
        });
        navigate(`/myposts/${id}`)
    }

    //function to handle change to inputs
    function handleChange(e) {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(inputs)
    }

    //renders if data not loaded
    if (isLoading) {
        return (
          <div>Loading...</div>
        )
    }

    //renders after loaded
    return (
        <div>
            <Box display="flex"
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
                    fontWeight={'bold'}>
                    EDIT POST
                </Typography>
                <InputLabel className={classes.font} sx={labelStyles}>Title</InputLabel>
                <TextField 
                className={classes.font}
                name="title"
                defaultValue={data.title}
                onChange={handleChange}
                
                variant="outlined"/>
                <InputLabel className={classes.font} sx={labelStyles}>ImageURL</InputLabel>
                <TextField
                className={classes.font}
                name="imageURL"
                onChange={handleChange}
                defaultValue={data.image}
                variant="outlined" />
                <InputLabel className={classes.font} sx={labelStyles}>
                Post
                </InputLabel>
                <TextField
                defaultValue={data.post}
                className={classes.font}
                name="text"
                onChange={handleChange}
                variant="outlined"
                multiline={true}
                />
                <Button 
                type="submit" 
                onClick={handleSubmit}
                to="/myposts" 
                variant='contained' 
                sx={{ margin: 1, borderRadius: 4 }} 
                color="warning">Edit Post</Button>
            </Box>
        </div>
    )


}

export default EditPost;