"use client";

import eventoDynamo from "../data/eventoDynamo";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import "@/css/app.css";

function Eventos() {
  const { darkMode } = useAuth();

  return (
    <div
      className={`w-full flex flex-col justify-center items-center lg:pt-24 md:pt-24 sm:pt-12 ${
        darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
      }`}
    >
      <div className="flex flex-col justify-center items-center w-10/12">
        <div className="md:w-11/12 sm:w-11/12">
          <h2 className={`lg:text-5xl md:text-5xl font-bold dark:text-white md:mb-10 sm:text-3xl sm:mt-10 sm:mb-5 sm:text-center ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}>
            Eventos Dynamos
          </h2>
          <p className={`md:mb-10 lg:text-2xl md:text-2xl sm:text-base sm:mb-3 text-gray-700 dark:text-gray-200 text-center ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}>
            No te pierdas ninguno de <strong>nuestros eventos</strong>. Aquí
            compartiremos y exploraremos juntos los acontecimientos que han
            marcado y marcarán <strong>nuestra comunidad</strong>. ¡Únete a
            nosotros en este momento especial!
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center sm:w-11/12 sm:mb-10 md:mb-40">
          <CardEvento />
        </div>
      </div>
    </div>
  );
}

const CardEvento = () => {
  return eventoDynamo.map((valor, i) => {
    return (
      <div key={i} className="flex justify-center items-center sm:m-3 sm:mb-5">
        <div
          className={`flex flex-col justify-center items-center md:p-4 rounded-md`}
        >
          <Image
            src={valor.img}
            alt={`evento ${valor.titulo}`}
            className="w-80 rounded-xl mb-4"
          />
          <div className="flex flex-col justify-center items-start">
            <div className="flex mb-3">
              <p className={`md:text-lg sm:text-xs `}>{valor.fecha}</p>
              <Image
                src={valor.imgCreador}
                alt={`Imagen de ${valor.creador}`}
                className="md:w-7 rounded-full md:mx-4 sm:mx-2 sm:w-5"
              />
              <p className={`md:text-lg sm:text-xs`}>
                {valor.creador}
              </p>
            </div>
            <p
              className={`md:w-80 md:text-lg sm:text-justify sm:text-xs sm:w-80 `}
            >
              {valor.titulo}
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default Eventos;
