import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import {useEffect, useState, useRef} from "react";

function Post() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://cspn-sports.herokuapp.com/posts/");
      const result = await response.json();
      setData(result);
    }
    getData();
    
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      setIsLoading(false);
    } else {
      isMounted.current = true;
    }
  }, [data])

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (

    <div>
      <Navbar />
      <Cards />
      <Cards />
      {data.forEach(post => {
        return (
          <Cards name={post.title} />
        )
      })}


    </div>
  )
}

export default Post