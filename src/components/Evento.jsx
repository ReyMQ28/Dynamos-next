import EnlacesIconEvento from "@/components/EnlacesIconEvento";
import Image from "next/image";
import "../css/app.css";

const Evento = ({ imagenes, datosEvento }) => {
  return imagenes.map((img, i) => {
    return (
      <div key={i} className="flex flex-col justify-center items-center">
        <h2 className="lg:text-5xl md:text-5xl sm:text-xl dark:text-white lg:my-5 md:my-5 sm:my-3 font- bold">
          {datosEvento[0].titulo}
        </h2>
        <p className="lg:text-xl md:text-xl sm:text-lg lg:my-10 md:my-10 sm:my-5 dark:text-white lg:px-40 italic text-justify">
          {datosEvento[0].descripcionCompleta}
        </p>
        <div className={`flex flex-wrap justify-start items-center lg:my-5 md:my-5 sm:my-3`}>
          {img.map((imagen, i) => {
            return (
              <Image
                key={i}
                src={imagen}
                alt={`imagen ${i}`}
                className="lg:w-[455px] md:w-[400px] sm:w-80 h-auto rounded-xl lg:m-4 md:m-4 sm:m-2"
              />
            );
          })}
        </div>
          <EnlacesIconEvento valores={datosEvento[0]} />
        <p className="lg:my-10 md:my-10 sm:my-5 lg:text-lg md:text-lg sm:text-sm dark:text-white">
          Publicado por:{" "}
          <span className="font-semibold">{datosEvento[0].autor}</span> el{" "}
          <span className="font-semibold">{datosEvento[0].fecha}</span>
        </p>
      </div>
    );
  });
};

export default Evento;
