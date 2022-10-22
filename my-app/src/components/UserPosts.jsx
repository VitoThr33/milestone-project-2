import React from 'react'
import Cards from './Cards'
import { Button, CardContent, Typography } from '@mui/material'
import Navbar from './Navbar'

function UserPosts() {
  return (
    <div className='my-post-pag'>
      <Navbar />
      
        <CardContent>
          <Typography 
            variant='h4'
            align='center'
          >My Posts
          </Typography>
          <Cards />
        </CardContent>
      
    </div>
  )
}

export default UserPosts