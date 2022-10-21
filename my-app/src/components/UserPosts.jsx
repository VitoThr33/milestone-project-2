import React from 'react'
import Cards from './Cards'
import {Card, Typography} from '@mui/material'

function UserPosts() {
  return (
    <div className='my-post-page'>
      
      <Card>
        <Typography 
          variant='h3'
          align='center'
        >My Posts
        </Typography>
        <Cards />
      </Card> 
    </div>
  )
}

export default UserPosts