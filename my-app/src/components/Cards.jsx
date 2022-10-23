import React from 'react'
import { CardMedia, CardContent, Card, Typography,CardActionArea,Button } from '@mui/material'


function Cards(props) {
  return (
    <div className='cards-posts'>
    
      <Card sx={{ borderRadius:5, minWidth:500, maxWidth:500}}>
        <CardContent>
          <Typography gutterBottom variant="h4">
              Title Goes Here
          </Typography>
          <CardMedia
            component="img"
            height="300"
            width={200}
            image='https://picsum.photos/id/237/536/354'
            alt="User's Post alt"
          />
            <CardActionArea>
              <Button
             contentAlign={'center'}
               href="/myposts/:id"size="small">Read Article</Button>
            </CardActionArea>
        </CardContent>
      </Card>
    </div>
  )
};

export default Cards