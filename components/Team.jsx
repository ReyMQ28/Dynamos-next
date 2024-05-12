"use client";
import teamDynamo from "../data/teamDynamo";
import { useAuth } from "@/context/AuthContext";
import EnlacesIconTeam from "./EnlacesIconTeam";
import Image from "next/image";
import "@/css/app.css";

function Team() {
  const { darkMode } = useAuth();

  return (
    <div
      className={`w-full flex flex-col justify-center items-center lg:pt-32 md:pt-32 sm:pt-24 ${
        darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
      }`}
    >
      <div
        className={`max-h-max flex flex-col justify-center items-center md:rounded-xl`}
      >
        <div className="flex flex-col">
          <h2
            className={`font-sans font-bold lg:text-5xl md:text-5xl text-center md:mb-10 sm:text-3xl sm:mb-5 dark:text-white ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}
          >
            Team Dynamos
          </h2>
          <p
            className={`text-center md:text-2xl sm:text-base md:mb-10 sm:mb-5 text-gray-700 dark:text-gray-300 lg:mx-40 md:mx-40 sm:mx-8 ${darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"}`}
          >
            Únete a nuestra <strong>comunidad Dynamos</strong>, donde el amor y
            la fe nos unen. Juntos crecemos espiritualmente y construimos un
            camino de esperanza. ¡Te invitamos a formar parte de
            <strong> nuestra familia!</strong>
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center md:mb-20 sm:mb-10">
          <CardTeam />
        </div>
      </div>
    </div>
  );
}

const CardTeam = () => {
  const { darkMode } = useAuth();

  return teamDynamo.map((valor, i) => {
    return (
      <div
        className={`flex md:max-h-96 md:w-96 rounded-2xl flex-col text-center justify-center items-center sm:max-h-80 sm:w-72 m-4 sm:px-16 sm:py-12 shadow-lg shadow-white/50 fondo-oscuro-claro ${
          darkMode ? "fondo-oscuro-claro-dark" : "fondo-oscuro-claro"
        } cursor-pointer lg:hover:scale-105 md:hover:scale-105 transition duration-500 ease-in-out`}
        key={i}
      >
        <Image
          className="flex w-52 rounded-full items-center justify-center mb-6"
          src={valor.img}
          alt={`Imagen de ${valor.nombre}`}
        />
        <p
          className={`font-bold mb-1 cursor-pointer md:text-base sm:text-sm text-white dark:text-white`}
        >
          {valor.nombre}
        </p>
        <p
          className={`mb-4 md:text-sm sm:text-xs dark:text-gray-400 text-gray-200`}
        >
          {valor.cargo}
        </p>
        <EnlacesIconTeam valores={valor} />
      </div>
    );
  });
};

export default Team;
