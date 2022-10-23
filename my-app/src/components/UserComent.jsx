import React from "react";
import { TextField, Button } from '@mui/material'

function UserComment() {
    return(
        <div>
            <TextField
            fullWidth={true}
            multiline={true}
            
            />
            <div className="comment-button">
                <Button size="small">Comment</Button>
            </div>
        </div>
    )
}

export default UserComment