import React from 'react'
import {CardMedia, CardContent, Card, Typography,CardActionArea,Button} from '@mui/material'
import { maxHeight, maxWidth } from '@mui/system'

function Cards(props) {
  return (
    <div className='post-test'>
    
      <Card sx={{ minWidth:500, maxWidth:500  }}>
        <CardContent>
          <Typography gutterBottom variant="h4">
              Go Padres!
          </Typography>
          <CardMedia
            component="img"
            height="300"
            width={200}
            image='https://picsum.photos/id/237/536/354'
            alt="User's Post alt"
          />
            <Typography variant="body2">
            
          </Typography>
            <CardActionArea>
              <Button
             contentAlign={'left'}
               href="/myposts/:id"size="small">Read Article</Button>
            </CardActionArea>
        </CardContent>
      </Card>
    </div>
  )
};

export default Cards