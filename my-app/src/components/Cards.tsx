import React from 'react'
import { CardMedia, CardContent, Card, Typography,CardActionArea,Button } from '@mui/material'
import { Link } from "react-router-dom"
import { Url } from 'url';

function Cards(props: { title: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; image: Url; id: boolean }) {
  return (
    <div className='cards-posts'>
    
      <Card sx={{ borderRadius:5, minWidth:500, maxWidth:500}}>
        <CardContent>
          <Typography gutterBottom variant="h4">
              {props.title}
          </Typography>
          <CardMedia
            component="img"
            height="300"
            width={200}
            image={`${props.image}`}
            alt="Post Image"
          />
            <CardActionArea>

              <Link to={`/posts/${props.id}`} className='read-button'>Read Article</Link>

            </CardActionArea>
        </CardContent>
      </Card>
    </div>
  )
};

export default Cards