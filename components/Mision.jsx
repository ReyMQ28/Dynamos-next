"use client";
import { useAuth } from "@/context/AuthContext";
import mision1 from "../img/somosdynamos/mision1.jpeg";
import mision2 from "../img/somosdynamos/mision2.jpeg";
import mision3 from "../img/somosdynamos/mision3.jpeg";
import Image from "next/image";
import "@/css/app.css";

function Mision() {
  const { darkMode } = useAuth();

  return (
    <div className=" flex flex-row justify-center items-center lg:mt-12 md:mt-12 sm:mt-12 w-full h-full imagen-about sm:mb-20">
      {/* Mision */}
      <div
        className="flex flex-col justify-center items-center h-auto lg:w-[600px] lg:pb-60 lg:pt-20 lg:mb-20 md:w-[600px] md:pb-60 md:pt-20 md:mb-20
      sm:w-[600px] sm:pb-10 sm:pt-20 sm:mb-20"
      >
        {/* circulo */}
        <div
          className={`flex flex-col rounded-full items-center lg:w-[600px] lg:h-[600px] lg:-mb-20 md:w-[600px] md:h-[600px] md:-mb-20 sm:w-[320px] sm:h-[320px] sm:-mb-64 ${
            darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
          }`}
        ></div>
        {/* texto */}
        <div className="lg:w-96 lg:-mt-96 lg:mr-24 md:w-96 md:-mt-96 md:mr-24 sm:w-48 sm:-mt-7 sm:mr-">
          <h1 className={`dark:text-gray-300 italic font-extrabold lg:text-[68px] lg:mb-16 lg:ml-10 md:text-[68px] md:mb-16 md:ml-10 sm:text-3xl sm:mb-3 sm:ml-0 ${
            darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
          }`}>
            MISIÓN
          </h1>
          <p className={`text-justify dark:text-gray-300 text-gray-900 font-bold lg:text-base lg:mb-12 lg:w-80 lg:-ml-2 md:text-base md:mb-12 md:w-80 md:-ml-2 sm:text-[11px] sm:mb-6 sm:w-44 sm:-ml-8 sm:font-extrabold-bold ${
            darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
          }`}>
            Este movimiento de valientes está inspirado por el Espiritu Santo
            para restaurar el avivamiento en la humanidad y al servicio de la
            poblacion en general, nos movemos en obras espirutuales y
            sociales.Nuestro equipo de trabajo desarrola su gestión sobre una
            solida base de principios cristianos.
          </p>
          <p className={`dark:text-gray-300 italic lg:text-sm md:text-sm sm:text-xs font-semibold lg:ml-8 md:ml-8 sm:ml-2 ${
            darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
          }`}>
            @Dynamos_movimiento
          </p>
        </div>
      </div>
      {/* Imagenes */}
      <div className="flex flex-col justify-center items-center w-auto h-auto lg:-mt-28 lg:-ml-52 md:-mt-28 md:-ml-52 sm:-mt-3 sm:-ml-32 sm:mr-2">
        <Image
          className="lg:w-64 lg:h-56 lg:my-2 md:w-64 md:h-56 md:my-2 sm:w-48 sm:h-28 sm:my-1"
          src={mision1}
          alt=""
        />
        <Image
          className="lg:w-64 lg:h-56 lg:my-2 md:w-64 md:h-56 md:my-2 sm:w-48 sm:h-28 sm:my-1"
          src={mision2}
          alt=""
        />
        <Image
          className="lg:w-64 lg:h-56 lg:my-2 md:w-64 md:h-56 md:my-2 sm:w-48 sm:h-28 sm:my-1"
          src={mision3}
          alt=""
        />
      </div>
    </div>
  );
}

export default Mision;
