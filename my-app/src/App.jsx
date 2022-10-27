import Header from "./components/Header";
import Auth from "./components/Auth";
import Posts from "./components/Posts";
import UserPosts from "./components/UserPosts";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import React from "react";
import './App.css';
import {Route, Routes,} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn= useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path ="/auth" element={<Auth/>}/>
            <Route path ="/posts" element={<Posts/>}/>
            <Route path ="/posts/add" element={<AddPost/>}/>
            <Route path ="/myPosts" element={<UserPosts/>}/>
            <Route path ="/myPosts/:id" element={<PostDetail/>}/>
            <Route path="/posts/edit/:id" element={<EditPost />} />
            
          </Routes>
        </main>
    </React.Fragment>
}

export default App;
