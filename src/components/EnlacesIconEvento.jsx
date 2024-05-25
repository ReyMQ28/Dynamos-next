"use client"
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";

function EnlacesIconEvento({ valores }) {
  const valor = valores;
  return (
    <div className="team-icons flex flex-row justify-center items-center">
      {valor.redes.facebook && (
        <Link to={valor.redes.facebook} target="_blank">
          <BsFacebook
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.instagram && (
        <Link to={valor.redes.instagram} target="_blank">
          <BsInstagram
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.tikTok && (
        <Link to={valor.redes.tikTok} target="_blank">
          <BsTiktok
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.youTube && (
        <Link to={valor.redes.youTube} target="_blank">
          <BsYoutube
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.linkedIn && (
        <Link to={valor.redes.linkedIn} target="_blank">
          <BsLinkedin
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
      {valor.redes.web && (
        <Link to={valor.redes.web} target="_blank">
          <TbWorldWww
            className={`mx-2 text-2xl text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400`}
          />
        </Link>
      )}
    </div>
  );
}

export default EnlacesIconEvento;
