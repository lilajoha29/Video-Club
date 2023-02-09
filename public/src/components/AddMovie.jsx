import { text } from "body-parser";
import React, { useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios';

const addMovie = () => {

  const [Title, setTitle] = useState("");
  const [Year, setYear] = useState("");
  const [Duration, setDuration] = useState("");
  const [Language, setLanguage] = useState("");
  const [Launch, setLaunch] = useState("");
  const [Country, setCountry] = useState("");


  function addNewMovie() {
    var movies = {
      Title: Title,
      Year: Year,
      Duration: Duration,
      Language: Language,
      Launch: Launch,
      Country: Country,
      idMovie: uniqid()
    }
    console.log(movies);

    axios.post('http://localhost:5000/api/movie/addNewMovie', movies)
    .then(res => {
        alert(res.data)
    })
    .then(err => {console.log(err)})
  }


  return (
    <div>
      <h1 className="font-Quicksand font-bold text-xl md:text-3xl text-lightYellow text-center py-5 md:p-10">
        Agregar nueva película
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section>
          <form className="grid gap-2 bg-darkRed/60 w-11/12 m-auto py-2.5 md:py-5 rounded-md text-center">
            <input
              type="text"
              placeholder="Escriba el nombre de la película"
              value={Title}
              onChange={(e) => {setTitle(e.target.value)}}
              className="text-center font-Quicksand font-normal text-sm md:text-xl my-auto flex justify-center bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightBlue text-lightBlue"
            ></input>
            <input
              type="text"
              placeholder="Escriba el año de lanzamiento de la película"
              value={Year}
              onChange={(e) => { setYear(e.target.value) }}
              className="text-center font-Quicksand font-normal text-sm md:text-xl my-auto flex justify-center bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightBlue text-lightBlue"
            ></input>
            <input
              type="text"
              placeholder="Escriba la duración de la película"
              value={Duration}
              onChange={(e) => { setDuration(e.target.value) }}
              className="text-center font-Quicksand font-normal text-sm md:text-xl my-auto flex justify-center bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightBlue text-lightBlue"
            ></input>
            <input
              type="text"
              placeholder="Escriba el idioma original de la película"
              value={Language}
              onChange={(e) => { setLanguage(e.target.value) }}
              className="text-center font-Quicksand font-normal text-sm md:text-xl my-auto flex justify-center bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightBlue text-lightBlue"
            ></input>
            <input
              type="text"
              placeholder="Escriba la fecha de lanzamiento (dd/mm/aaaa)"
              value={Launch}
              onChange={(e) => { setLaunch(e.target.value) }}
              className="text-center font-Quicksand font-normal text-sm md:text-xl my-auto flex justify-center bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightBlue text-lightBlue"
            ></input>
            <input
              type="text"
              placeholder="Escriba el país de origen de la película"
              value={Country}
              onChange={(e) => { setCountry(e.target.value) }}
              className="text-center font-Quicksand font-normal text-sm md:text-xl my-auto flex justify-center bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightBlue text-lightBlue"
            ></input>
          </form>
          <div className="w-9/12 m-auto py-5 flex justify-around pb-48">
            <button
              onClick={addNewMovie}
              className="font-Quicksand font-semibold md:text-xl px-4 md:px-8 py-0.5 text-center text-white hover:text-darkRed bg-lightBlue hover:bg-lightYellow rounded-md border-2 border-darkBlue hover:border-darkYellow"
            >
              AGREGAR
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default addMovie;
