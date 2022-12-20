import React from 'react'
import Cards from './Cards'
import { Button, CardContent, Typography } from '@mui/material'
import Navbar from './Navbar'

function UserPosts() {
  return (
    <div className='my-post-pag'>
      <Navbar setSport={function (arg0: string): void {
        throw new Error('Function not implemented.')
      } } />
      
        <CardContent>
          <Typography 
            variant='h4'
            align='center'
          >My Posts
          </Typography>
          <Cards title={undefined} image={undefined} id={false} />
        </CardContent>
      
    </div>
  )
}

export default UserPosts

