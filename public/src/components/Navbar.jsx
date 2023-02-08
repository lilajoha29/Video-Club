import React from 'react'
import {AiFillHome} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='bg-darkRed text-white py-2 font-Quicksand flex justify-between'>
      <AiFillHome className='m-2 text-3xl'/>
      <h1 className='m-2 text-2xl'>Agregar película +</h1>
    </div>
  )
}

export default Navbar
