import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import '../App.css'
import Header from '../components/Header';

function Tag() {

const navigate = useNavigate();
const location = useLocation();
const tag = location.pathname.split("/").at(-1).replace("-"," ");

  return (
    <div className='mt-20 flex flex-col w-11/12 max-w-[670px] items-center mx-auto'>
        <Header/>
          <div className='flex gap-x-3 my-4 items-baseline self-start'>
            <button 
             className='p-2 border rounded-md'
            onClick={()=>navigate(-1)}
            >
                Back
            </button> 
            <p className='text-xl'>Blogs Tagged <span className='font-bold text-blue-600'>{`#${tag}`}</span></p>
          </div>
         <Blogs/>
         <Pagination/>
    </div>
  )
}

export default Tag