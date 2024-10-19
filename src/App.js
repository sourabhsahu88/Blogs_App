import React, { useContext,useEffect } from 'react'
import { AppContext } from './context/AppContext'
import Home from './pages/Home'
import Tag from './pages/Tag';
import Category from './pages/Category'
import Blog from './pages/Blog';
import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParam,setSearchParam] = useSearchParams();
  const location = useLocation()

  useEffect(()=>{
    const page = searchParam.get("page") ?? 1;
     
    if(location.pathname.includes("tags")){
      fetchBlogPosts(Number(page),`${location.pathname.split("/").at(-1).replaceAll("-"," ")}`)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," "); 
      fetchBlogPosts(Number(page),null,category);
      console.log("inside category")
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);

  return (
    <div className='' >
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/categories/:category" element={<Category/>} ></Route>
            <Route path="/tags/:tag" element={<Tag/>} ></Route>
            <Route path="/blogs/:blogId" element={<Blog/>} ></Route>
        </Routes>
    </div>
  )
}

export default App
