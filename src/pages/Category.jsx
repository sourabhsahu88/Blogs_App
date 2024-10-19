import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import '../App.css'
import Header from '../components/Header';

function Category() {

 const navigate = useNavigate();
 const location = useLocation();
 const category = location.pathname.split("/").at(-1).replace("-"," ");   

  return (
    <div className='mt-20 flex flex-col w-11/12 max-w-[670px] items-center mx-auto'>
        <Header/>
        <div className='flex justify-start items-baseline self-start my-4 gap-x-4'>
            <button 
            className='p-2 border rounded-md '
            onClick={()=>navigate(-1)}
            >
                Back
            </button>
            <p className='text-xl'>Blogs On <span className='font-bold'>{category}</span></p>
        </div>
         <Blogs />
         <Pagination/>
    </div>
  )
}

export default Category