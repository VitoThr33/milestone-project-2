import { Box, Button, Typography,TextField, } from '@mui/material'
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Auth = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "users") => {
    const res = await axios
      .post(`https://cspn-sports.herokuapp.com/${type}`, {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest("users/register")
        .then((data) => localStorage.setItem )
        .then(() => dispatch(authActions.login()))
        .then(() => naviagte("/posts"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem )
        .then(() => dispatch(authActions.login()))
        .then(() => naviagte("/posts"));
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        display="flex" 
        flexDirection={'column'} 
        alignItems="center" 
        justifyContent={"center"}
        boxShadow="10px 10px 20px"
        padding={3}
        margin='auto'
        marginTop={5}
        borderRadius={5}
        maxWidth={500}
        
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="username"
              onChange={handleChange}
              value={inputs.username}
              placeholder="Username"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
          
        </Box>
      </form>
    </div>
  )
}

export default Auth

