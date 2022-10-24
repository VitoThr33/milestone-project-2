import React from 'react'
import { CardMedia, CardContent, Card, Typography } from '@mui/material'
import Comments from './Comments'
import UserComment from './UserComent'
import {useLocation, useNavigate} from "react-router-dom"

function PostDetail(props) {
  const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.substring(9);
    console.log(id)

    function handleSubmit(event) {
      event.preventDefault();

      navigate("/posts")
    }

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
              <form className='delete-postBTN' 
              action={`https://cspn-sports.herokuapp.com/posts/${id}?_method=DELETE`} 
              method="POST" >
                <input type='submit' value='DELETE POST'/>
              </form>
          </CardContent>
        </Card>
      </div>
      
    )
  
  }

export default PostDetail