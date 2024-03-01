import React from 'react'
import notFound from '../../../public/404.gif'

const Loader = () => {
  return (
    < div className='flex items-center justify-center w-screen h-screen bg-[#050F1A]'>
    ]
    <img src={notFound} alt="" className=' h-[70%] w-[50%] rounded-[50px]  object-cover ' />
   
    </ div>
  )
}

export default Loader