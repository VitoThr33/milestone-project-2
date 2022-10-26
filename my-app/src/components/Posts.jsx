import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import {useEffect, useState, useRef} from "react";

function Post() {

  //state variables
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [sport, setSport] = useState("all")
  const isMounted = useRef(false);

  //run once to fetch data from api
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://cspn-sports.herokuapp.com/posts/");
      const result = await response.json();
      setData(result);
    }
    getData();
    
  }, [])

  //run after first render to re-render main page
  useEffect(() => {
    if (isMounted.current) {
      setIsLoading(false);
    } else {
      isMounted.current = true;
    }
  }, [data])

  //renders if data is not loaded yet
  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  //main render
  return (

    <div>
      <Navbar setSport={setSport}/>
      
      {data.map(post => {
        if (sport === "all") {
          return (
            <Cards title={post.title} id={post.id}/>
          )
        } else {
          if (sport === post.sport) {
            return (
              <Cards title={post.title} id={post.id} image={post.image}/>
            )
          }
        }
      })}


    </div>
  )
}

export default Post