import React, { useState } from 'react'

const addMovie = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div>
      <h1 className='font-Quicksand font-bold text-xl md:text-3xl text-lightYellow text-center py-5 md:p-10'>Agregar nueva película</h1>

      <section>
        <div className= 'grid gap-2 bg-darkRed/60 w-10/12 md:w-4/12 m-auto py-2.5 md:py-5 rounded-md grid-cols-1 '>
          <input className='text-center py-1 mx-2.5 md:mx-5 rounded-md  font-Quicksand text-lightBlue font-bold border-2 border-darkBlue' type="text" placeholder='Escriba el nombre de la película' />
          <input className='text-center py-1 mx-2.5 md:mx-5 rounded-md  font-Quicksand text-lightBlue font-bold border-2 border-darkBlue' type="text" placeholder='Escriba el año de lanzamiento de la película' />
          <input className='text-center py-1 mx-2.5 md:mx-5 rounded-md  font-Quicksand text-lightBlue font-bold border-2 border-darkBlue' type="text" placeholder='Escriba la duración de la película' />
          <input className='text-center py-1 mx-2.5 md:mx-5 rounded-md  font-Quicksand text-lightBlue font-bold border-2 border-darkBlue' type="text" placeholder='Escriba el idioma original de la película' />
          <input className='text-center py-1 mx-2.5 md:mx-5 rounded-md  font-Quicksand text-lightBlue font-bold border-2 border-darkBlue' type="text" placeholder='Escriba la fecha de lanzamiento (dd/mm/aaaa)' />
          <input className='text-center py-1 mx-2.5 md:mx-5 rounded-md  font-Quicksand text-lightBlue font-bold border-2 border-darkBlue' type="text" placeholder='Escriba el país de origen de la película' />

        </div>
        <div className='w-9/12 m-auto py-5 flex justify-around'>
          <button className='font-Quicksand font-semibold md:text-xl px-4 md:px-8 py-1 text-center text-white hover:text-darkRed bg-lightBlue hover:bg-lightYellow rounded-md border-2 border-darkBlue hover:border-darkYellow'>AGREGAR</button>
        </div>
      </section>
    </div>
  )
}

export default addMovie


