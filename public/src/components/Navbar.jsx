import React from 'react'
import {AiFillHome} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='bg-darkRed text-white py-2 font-Quicksand flex justify-between'>
      <a href="/">
        <button>
          <AiFillHome className='m-2 text-3xl'/>
        </button>
      </a>
      <a href="/AddMovie">
        <button>
          <h1 className='m-2 text-2xl'>Agregar película +</h1>
        </button>
      </a>

    </div>
  )
}

export default Navbar
