import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
  return (
    <div>
          <div className='flex flex-col gap-x-2'>
                      <NavLink to={`blogs/${post.id}`}>
                         <p className='text-md font-bold'>{post.title}</p>
                      </NavLink>
                       <p className='text-sm mt-1'>
                        By <span className='italic'>{post.author}</span> on {" "}
                        <NavLink to={`categories/${post.category.replaceAll(" ","-")}`}>
                           <span className='underline font-bold'>{post.category}</span>
                        </NavLink>
                        </p>
                        <p className='text-sm'>Created On <span>{post.date}</span></p>   
                        <p className='text-sm mt-3 font-medium'>{post.content}</p>
                       <div className='flex text-xs gap-x-2 mt-3'>
                           {
                             post.tags.map((tag,index)=>{
                                return <NavLink to={`tags/${tag.replaceAll(" ","-")}`} key={index}><span  className='text-blue-600'>{`#${tag}`}</span></NavLink>
                             })
                           }
                      </div>  
             </div>
    </div>
  )
}

export default BlogDetails