import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { blogUrl } from '../baseUrl'
import Spinner from '../components/Spinner'

function Blog() {

  const [blog,setBlog] = useState(null);
  const [relatedBlogs,setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {setLoading,loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1); 

  async function fetchBlogData(){
    setLoading(true);
    try{
     const url =`${blogUrl}?blogId=${blogId}`
     const response = await fetch(url);
     const data =await response.json();
     console.log("printing blog data")
     console.log(data);
     setBlog(data.blog);
     setRelatedBlogs(data.relatedBlogs);
    }
    catch(err){
        console.log(err);
        setBlog(null);
        setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
        fetchBlogData();
    }
  },[location.pathname]);

  return (
    <div className='mt-20 flex flex-col w-11/12 max-w-[670px] items-center mx-auto'>
         <Header/>
         <button 
         className=' self-start my-4 p-2 border rounded-md'
         onClick={()=>navigate(-1)}
         >
             Back
         </button>
         <div>
              {
                loading?(<Spinner/>):
                (
                  blog?(
                    <div>
                      <BlogDetails post={blog}/>
                      <h1 className='font-bold text-2xl mb-4 mt-10'>Related Blogs:</h1>
                      <div className='flex flex-col gap-y-4'>
                         {
                            relatedBlogs?.map((post)=>{
                               return <BlogDetails key={post.id} post={post}/>
                            })
                         }
                      </div>
                     </div>   
                  ):(
                    <div>
                        <p>No Post found</p>
                     </div>
                  )
                )
              }
         </div>
    </div>
  )
}

export default Blog