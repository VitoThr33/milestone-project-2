import React from 'react'
import {CardMedia, CardContent, Card, Typography,CardActionArea,Button} from '@mui/material'

function Cards(props) {
  return (
    <div className='post-test'>
    
      <Card sx={{ maxWidth: 450 }}>
        <CardContent>
          <Typography gutterBottom variant="h4">
              {props.title}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image="{prop.imgUrl}"
            alt="User's Post alt"
          />
            <Typography variant="body2">
            {props.details}
          </Typography>
            <CardActionArea>
              <Button href="/myposts/:id"size="small">Read More</Button>
            </CardActionArea>
        </CardContent>
      </Card>
    </div>
  )
};

export default Cards