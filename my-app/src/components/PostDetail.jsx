import React from 'react'
import {CardMedia, CardContent, Card, Typography} from '@mui/material'
import Comments from './Comments'
function PostDetail(props) {
    return(
      <div> 
        <Card sx={{ maxWidth: 2000 }}>
        <CardContent>
            <Typography gutterBottom variant="h4">
              <h1>Title goes here</h1>
            </Typography>
            <hr></hr>
            <CardMedia
            component="img"
            height="400"
            width={900}
            image="{prop.imgUrl}"
            alt="User's IMG Goes here"
          />
            <Typography variant="body2">
            {props.details}
            </Typography>
          </CardContent>
        </Card>
          <h4>What people think</h4>
          <Comments />
      </div>
    )
  
  }

export default PostDetail