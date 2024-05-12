"use client"
import Link  from "next/link";


const EnlaceFooter = ({nombre, ruta}) => {
  return (
    <p className="mx-5 hover:text-black font-bold cursor-pointer">
      <Link href="/">{nombre}</Link>
    </p>
  );
};

export default EnlaceFooter;
