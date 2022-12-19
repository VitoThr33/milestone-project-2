import React from "react";
import { Button } from '@mui/material'
function Navbar(props) {
    return(
        <div className="navbar">
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey" onClick={() => props.setSport("baseball")}>MLB</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey" onClick={() => props.setSport("basketball")}>NBA</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey" onClick={() => props.setSport("football")}>NFL</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey" onClick={() => props.setSport("soccer")}>Soccer</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey" onClick={() => props.setSport("other")}>Other</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey" onClick={() => props.setSport("all")}>All</Button>
        </div>

    )
}

export default Navbar