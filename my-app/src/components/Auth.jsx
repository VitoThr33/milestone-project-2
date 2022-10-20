import { Box, Button, Typography,TextField, } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate()
  const [inputs, setInputs]= useState({
    name:"",
    email:"",
    password:""
  });

  const [isSignup, setIsSignup]=useState(false)
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit=(e)=> {
    e.preventDefault()
    console.log(inputs);
  }
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
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
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