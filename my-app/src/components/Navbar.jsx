import React from "react";
import { Button } from '@mui/material'
function Navbar() {
    return(
        <div className="navbar">
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey">MLB</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey">NBA</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey">NFL</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey">Soccer</Button>
            <Button size="large" variant="contained" sx={{ borderRadius:10, margin: 1 }} color="grey">Other</Button>
        </div>

    )
}

export default Navbar