import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../App.css'

function Pagination() {
 
  const {page,totalPages,handlePageChange} = useContext(AppContext) ;

  return (
    <div className='w-full flex justify-center fixed bottom-0 px-5 py-2 bg-white'>
         <div className='w-11/12 max-w-[670px] flex justify-between items-baseline'>
                <div className='flex gap-x-3'>
                    { page>1 &&
                        <button onClick={()=>handlePageChange(page-1)}
                        className='px-2 py-2 border rounded-md'
                        >
                            Previous
                        </button>
                    }
                    { page<totalPages &&
                        <button onClick={()=>handlePageChange(page+1)}
                        className='px-2 py-2 border rounded-md'
                        >
                            Next
                        </button>
                    }
                </div>
                <div>
                    <p className='text-md font-semibold'>Page {page} of {totalPages}</p>
                </div>
         </div>
    </div>
  )
}

export default Pagination