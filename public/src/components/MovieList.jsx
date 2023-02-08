import React from "react";
import Logo from "../assets/LogoColor.svg";

const movieList = () => {
  return (
    <div>
      <img src={Logo} className="w-5/12 md:w-4/12 m-auto pt-5 md:pt-10"></img>
      <h1 className="font-Quicksand font-bold text-xl md:text-3xl text-lightYellow text-center py-5 md:p-10">
        Lista de películas
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section>
          <div className="grid gap-2 bg-darkRed/60 w-10/12 m-auto py-2.5 md:py-5 rounded-md">
            <div className="grid grid-cols-4 bg-white mx-2.5 md:mx-5 rounded-md border-2 border-lightYellow text-lightBlue">
              <h1 className="col-start-1 col-end-2 font-Quicksand font-semibold px-3 text-center md:text-xl md:py-0.5">
                ID
              </h1>
              <h2 className="col-start-2 col-end-5 font-Quicksand font-normal px-3 text-sm md:text-xl my-auto">
                123456789
              </h2>
            </div>
            <div className="grid grid-cols-4 text-lightBlue mx-2.5 md:mx-5">
              <div className="col-start-1 col-end-3 bg-white mr-1 rounded-md border-2 border-lightYellow my-auto">
                <h2 className="font-Quicksand font-semibold px-1.5 md:px-3 md:text-xl md:py-0.5 text-center">
                  Título
                </h2>
              </div>
              <div className="col-start-3 col-end-5 bg-white/80 ml-1 rounded-md border-2 border-lightYellow">
                <h3 className="font-Quicksand font-normal px-1.5 md:px-3 text-sm md:text-xl my-0.5 md:my-1 break-all">
                  Encanto
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-4 text-lightBlue mx-2.5 md:mx-5">
              <div className="col-start-1 col-end-2 bg-white mr-1 rounded-md border-2 border-lightYellow my-auto">
                <h2 className="font-Quicksand font-semibold px-1.5 md:px-3 md:text-xl md:py-0.5 text-center">
                  Año
                </h2>
              </div>
              <div className="col-start-2 col-end-5 bg-white/80 ml-1 rounded-md border-2 border-lightYellow">
                <h3 className="font-Quicksand font-normal px-1.5 md:px-3 text-sm md:text-xl my-0.5 md:my-1 break-all">
                  2021
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-4 text-lightBlue mx-2.5 md:mx-5">
              <div className="col-start-1 col-end-3 bg-white mr-1 rounded-md border-2 border-lightYellow my-auto">
                <h2 className="font-Quicksand font-semibold px-1.5 md:px-3 md:text-xl md:py-0.5 text-center">
                  Duración
                </h2>
              </div>
              <div className="col-start-3 col-end-5 bg-white/80 ml-1 rounded-md border-2 border-lightYellow">
                <h3 className="font-Quicksand font-normal px-1.5 md:px-3 text-sm md:text-xl my-0.5 md:my-1 break-all">
                  109 min
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-4 text-lightBlue mx-2.5 md:mx-5">
              <div className="col-start-1 col-end-3 bg-white mr-1 rounded-md border-2 border-lightYellow my-auto">
                <h2 className="font-Quicksand font-semibold px-1.5 md:px-3 md:text-xl md:py-0.5 text-center">
                  Idioma
                </h2>
              </div>
              <div className="col-start-3 col-end-5 bg-white/80 ml-1 rounded-md border-2 border-lightYellow">
                <h3 className="font-Quicksand font-normal px-1.5 md:px-3 text-sm md:text-xl my-0.5 md:my-1 break-all">
                  Español
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-4 text-lightBlue mx-2.5 md:mx-5">
              <div className="col-start-1 col-end-3 bg-white mr-1 rounded-md border-2 border-lightYellow my-auto">
                <h2 className="font-Quicksand font-semibold px-1.5 md:px-3 md:text-xl md:py-0.5 text-center">
                  Lanzamiento
                </h2>
              </div>
              <div className="col-start-3 col-end-5 bg-white/80 ml-1 rounded-md border-2 border-lightYellow">
                <h3 className="font-Quicksand font-normal px-1.5 md:px-3 text-sm md:text-xl my-0.5 md:my-1 break-all">
                  24/11/2021
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-4 text-lightBlue mx-2.5 md:mx-5">
              <div className="col-start-1 col-end-2 bg-white mr-1 rounded-md border-2 border-lightYellow my-auto">
                <h2 className="font-Quicksand font-semibold px-1.5 md:px-3 md:text-xl md:py-0.5 text-center">
                  País
                </h2>
              </div>
              <div className="col-start-2 col-end-5 bg-white/80 ml-1 rounded-md border-2 border-lightYellow">
                <h3 className="font-Quicksand font-normal px-1.5 md:px-3 text-sm md:text-xl my-0.5 md:my-1 break-all">
                  Estados Unidos
                </h3>
              </div>
            </div>
          </div>
          <div className="w-9/12 m-auto py-5 flex justify-around">
            <button className="font-Quicksand font-semibold md:text-xl px-4 md:px-8 py-0.5 md:py-1 text-center text-white hover:text-darkRed bg-lightBlue hover:bg-lightYellow rounded-md border-2 border-darkBlue hover:border-darkYellow">
              EDITAR
            </button>
            <button className="font-Quicksand font-semibold md:text-xl px-4 md:px-8 py-0.5 text-center text-white hover:text-darkRed bg-lightBlue hover:bg-lightYellow rounded-md border-2 border-darkBlue hover:border-darkYellow">
              ELIMINAR
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default movieList;
