import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "../App.css"
import BlogDetails from './BlogDetails';

function Blogs() {
 
    const {loading,posts} = useContext(AppContext);

  return (
    <div className='flex flex-col justify-center mx-auto mb-16 gap-y-5'>
         {
            loading?(
              <Spinner/>
            )
            :
            (
              posts.map((post)=>(
                 <BlogDetails key={post.id} post={post}/>
              ))
            )
         }  
    </div>
  )
}

export default Blogs