import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import {useEffect, useState, useRef} from "react";
import { Portal } from '@mui/material';

function Post() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [sport, setSport] = useState("baseball")
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
      <Navbar setSport={setSport}/>
      
      {data.map(post => {
        if (sport === post.sport) {
          return (
            <Cards title={post.title} id={post.id}/>
          )
        }
      })}


    </div>
  )
}

export default Post