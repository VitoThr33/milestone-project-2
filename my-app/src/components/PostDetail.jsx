import React from 'react'
import { CardMedia, CardContent, Card, Typography } from '@mui/material'
import Comments from './Comments'
import UserComment from './UserComent'
function PostDetail(props) {
    return(
      <div className='post-details'> 
      
        <Card >
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
              
              
              <Typography varient='h4'>What do you think?</Typography>

              <UserComment />
              <Typography>What others Think</Typography>
              <Comments />
              <from className='delete-postBTN' action=
                {`https://cspn-sports.herokuapp.com/posts/{id}
                ?_method=DELETE`} method="POST">
                <input type='submit' value='DELETE POST' />
              </from>
          </CardContent>
        </Card>
      </div>
      
    )
  
  }

export default PostDetail