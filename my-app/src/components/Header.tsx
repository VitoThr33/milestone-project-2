import React, { useState, second, } from 'react';
import { AppBar, Toolbar, Box, Button, Tab, Tabs, } from "@mui/material";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const [value, setvalue] = useState(second)
    return (
                                                            //Headerbar Tabs once logged in then Login SignUp/Logout buttons
        <AppBar position="sticky" sx={{ background: "gray" }}>
            <Toolbar>
                <Button 
                href='/Posts'
                variant="text"
                size='large'
                color='inherit'
                
                >CSPN</Button>
                {isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight='auto' >
                    <Tabs textColor="inherit" value={value} onChange={(e, val) => setvalue(val)}>
                        <Tab LinkComponent={Link} to="/posts" label="All Posts" />
                        {/* <Tab LinkComponent={Link} to="/myposts" label="My Posts" /> */}
                        <Tab LinkComponent={Link} to="/posts/add" label="Add New Post" />
                    </Tabs>
                </Box>}               
                <Box display="flex" marginLeft="auto">
                    {!isLoggedIn && <><Button  LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Login</Button>
                    <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">SignUp</Button></>}
                    {isLoggedIn && <Button  onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color="warning">Logout</Button>}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header