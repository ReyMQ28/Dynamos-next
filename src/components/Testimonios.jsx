"use client"
import testimonioDynamo from "../data/testimoniosDynamo";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext"
import Image from "next/image";

function Testimonios() {
  const [contador, setContador] = useState(0);
  const { darkMode } = useAuth();

  const onclickAdelante = () => {
    setContador(contador + 1);
  };

  const onclickAtras = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    const lonTestimonios = testimonioDynamo.length;
    if (contador == lonTestimonios - 1) {
      setContador(0);
    }
    if (contador == 0) {
      setContador(1);
    }
  }, [contador]);

  return (
    <div className={`w-full lg:pt-32 md:pt-32 sm:pt-24 ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}>
     <div>
        <h2 className={`text-center md:text-5xl font-bold select-none sm:text-3xl sm:mb-5 ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}>
          Nuestros Testimonios
        </h2>
        <div className="flex w-full justify-center items-center">
          <div>
            <BsFillArrowLeftSquareFill
              className="md:text-6xl mr-3 cursor-pointer sm:text-3xl"
              onClick={onclickAtras}
            />
          </div>
          <div
            className={`md:w-8/12 md:h-96 flex md:flex-row sm:flex-col justify-center items-center select-none sm:mt-16 sm:mb-20 sm:w-9/12 sm:h-96 shadow-lg shadow-white/50 sm:rounded-xl`}
          >
            <div className="md:mt-0 sm:-mt-24 md:-mb-0 sm:mb-5">
              <Image
                src={testimonioDynamo[contador].img}
                alt={`Testimonio de ${testimonioDynamo[contador].nombre}`}
                className="md:w-60 rounded-3xl md:scale-125 md:mr-0 sm:w-36 sm:scale-100 sm:mr-3"
              />
            </div>
            <div className="flex flex-col md:w-6/12 md:ml-20 sm:w-10/12 sm:text-justify">
              <p
                className={`md:text-2xl md:mb-5 sm:text-xs sm:mb-1 italic md:h-40 sm:h-24 ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"} `}
              >
                {testimonioDynamo[contador].testimonio}
              </p>
              <p
                className={`md:mb-2 md:text-xl sm:text-xs sm:mb-1 text-gray-500 `}
              >
                <strong>{testimonioDynamo[contador].nombre}</strong>
              </p>
              <p
                className={`md:text-xl sm:text-xs text-gray-500`}
              >
                {testimonioDynamo[contador].cargo}
              </p>
            </div>
          </div>
          <BsFillArrowRightSquareFill
            className="md:text-6xl ml-3 cursor-pointer sm:text-3xl"
            onClick={onclickAdelante}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonios;