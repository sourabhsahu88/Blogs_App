import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Home() {
  return (
    <div className='flex flex-col mt-20 max-w-[670px] w-11/12 mx-auto items-center'>
          <Header/>
          <Blogs/>
          <Pagination/>
    </div>
  )
}

export default Home