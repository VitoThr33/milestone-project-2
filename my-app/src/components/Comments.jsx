import React from "react";
import { CardContent, Typography } from '@mui/material'

function Comments() {
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
                    Comment user name
                </Typography>
                <Typography
                border={2}
                borderColor='black' 
                textAlign={'left'}
                sx={{maxWidth: 600, minWidth: 600}}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. 
                    Phasellus vestibulum lorem sed risus ultricies tristique nulla 
                    aliquet enim. Tempus quam pellentesque nec nam aliquam. 
                    Vel risus commodo viverra maecenas accumsan lacus vel facilisis. 
                    Nulla aliquet enim tortor at. Volutpat consequat mauris nunc congue 
                    nisi vitae suscipit tellus mauris. Ultrices in iaculis nunc sed 
                    augue lacus viverra vitae congue. Vitae auctor eu augue ut. 
                    Amet dictum sit amet justo donec enim diam vulputate.
                </Typography>
                <form className="comment-delete" action=
                {`https://cspn-sports.herokuapp.com/posts/{id}
                ?_method=DELETE`} method="POST">
                <input type='submit' value='DELETE COMMENT' />
                </form>

            </CardContent>

            
        </div>
    )
}



export default Comments