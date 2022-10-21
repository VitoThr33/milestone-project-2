import React from 'react'
import Cards from './Cards'
import axios from "axios"

function Post() {

  // const response = await fetch("https://cspn-sports.herokuapp.com/posts");
  // const result = await response.json();
  // console.log(result);

  axios({
    method: "get",
    url: "http://cspn-sports.herokuapp.com/posts"
  })
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