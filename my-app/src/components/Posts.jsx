import React from 'react'
import Cards from './Cards'

function Post() {

  // const response = await fetch("https://cspn-sports.herokuapp.com/posts");
  // const result = await response.json();
  // console.log(result);

  fetch("https://cspn-sports.herokuapp.com/posts")
  .then(res => {
    res.json();
  }).then(result => {
    console.log(result);
  })

  return (
    <div>
      <Cards />
      <Cards />
    </div>
  )
}

export default Post