"use client"
import Link  from "next/link";
import logoDynamo from "@/img/logo/logo-dynamo.png";
import { enlacesFooter } from "../data/enlaces.footer";
import EnlacesIconsFooter from "./EnlacesIconsFooter";
import { enlacesIconFooter } from "../data/enlaces.icon.footer";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import "../css/app.css";

function Footer() {
  const { darkMode } = useAuth(); 

  return (
    <div
      className={`flex flex-col justify-center items-center text-gray-400 pt-20 pb-10 ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}
    >
      <Link href="/">
        <Image
          src={logoDynamo}
          alt="Logo de Movimiento Dynamo"
          className="md:w-24 sm:w-16 animate-bounce md:mb-0 sm:mb-5"
        />
      </Link>
      <div className="md:flex flex-row sm:hidden md:my-4">
        {enlacesFooter.map((enlace, i) => {
          return (
            <p
              key={i}
              className="mx-5 text-gray-400 hover:text-gray-600 font-bold cursor-pointer"
            >
              <Link href={enlace.ruta}>{enlace.nombre}</Link>
            </p>
          );
        })}
      </div>
      {enlacesIconFooter.map((enlace, i) => {
        const redes = enlace.redes;
        return <EnlacesIconsFooter key={i} enlace={redes} />;
      })}

      <p className={`select-none md:w-full md:text-base sm:text-xs text-center ${darkMode ? "text-gray-300" : "text-gray-400"}`}>
        © 2023 Movimiento Dynamos, Inc. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
