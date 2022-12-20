import React from "react";
import { CardContent, Typography } from '@mui/material'

function Comments(props: { id: boolean; name: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; comment: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    //handle submit function
    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        await fetch(`https://cspn-sports.herokuapp.com/comments/${props.id}`, {
        method: "DELETE"
      });
      window.location.reload(false);
    }


    return(
        <div className="comment-section">
            <CardContent>
                <Typography 
                textAlign={'left'}
                variant='h6'
                border={2}
                borderColor='black'
                sx={{maxWidth:600, minWidth:600}}
                >
                    {props.name}
                </Typography>
                <Typography
                border={2}
                borderColor='black' 
                textAlign={'left'}
                sx={{maxWidth: 600, minWidth: 600}}
                >
                    {props.comment}
                </Typography>
                <form className="comment-delete" onSubmit={handleSubmit}>
                    <input type='submit' value='DELETE COMMENT' />
                </form>

            </CardContent>

            
        </div>
    )
}



export default Comments