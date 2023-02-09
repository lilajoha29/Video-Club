import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../assets/LogoColor.svg";
import SingleMovie from "./SingleMovie";

function movieList() {

  const[datamovies, setdatamovies] = useState ([])

  useEffect(() => {
      axios.get('api/movies/getmovie').then(res => {
        console.log(res.data)
        setdatamovies(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  const movielist = datamovies.map(movie => {
    return (
      <SingleMovie movie={movie}/>
    )
  })

  return (
    <div>
      <img src={Logo} className="w-5/12 md:w-4/12 m-auto pt-5 md:pt-10"></img>
      <h1 className="font-Quicksand font-bold text-xl md:text-3xl text-lightYellow text-center py-5 md:p-10">
        Lista de películas
      </h1>
      {movielist}
    </div>
  );
};

export default movieList;
