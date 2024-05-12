"use client"
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";

const ModoDark = () => {
  const { manejarDark, darkMode } = useAuth();

  return (
    <div
      className="flex flex-row justify-center items-center"
      onClick={manejarDark}
    >
      {darkMode ? (
        <BsSun className="text-xl cursor-pointer hover:text-gray-500" />
      ) : (
        <BsMoonFill className="text-xl cursor-pointer hover:text-gray-500" />
      )}
    </div>
  );
};

export default ModoDark;
