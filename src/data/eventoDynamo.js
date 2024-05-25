// Evento # 3
import img_evento_01 from "../img/eventos/17-09-23/flayer-evento.jpg";
import img_evento_01_01 from "../img/eventos/17-09-23/img-01.jpg";
import img_evento_01_02 from "../img/eventos/17-09-23/img-02.jpg";

// Evento # 2
import img_evento_02 from "../img/eventos/09-07-23/flayer-evento.jpg";
import img_evento_02_01 from "../img/eventos/09-07-23/img-01.jpg";
import img_evento_02_02 from "../img/eventos/09-07-23/img-02.jpg";
import img_evento_02_03 from "../img/eventos/09-07-23/img-03.jpg";
import img_evento_02_04 from "../img/eventos/09-07-23/img-04.jpg";
import img_evento_02_05 from "../img/eventos/09-07-23/img-05.jpg";
import img_evento_02_06 from "../img/eventos/09-07-23/img-06.jpg";
import img_evento_02_07 from "../img/eventos/09-07-23/img-07.jpg";
import img_evento_02_08 from "../img/eventos/09-07-23/img-08.jpg";
import img_evento_02_09 from "../img/eventos/09-07-23/img-09.jpg";
import img_evento_02_10 from "../img/eventos/09-07-23/img-10.jpg";
import img_evento_02_11 from "../img/eventos/09-07-23/img-11.jpg";
import img_evento_02_12 from "../img/eventos/09-07-23/img-12.jpg";
import img_evento_02_13 from "../img/eventos/09-07-23/img-13.jpg";

// Evento # 1
import img_evento_03 from "../img/eventos/28-05-23/flayer-evento.jpg";
import img_evento_03_01 from "../img/eventos/28-05-23/img-01.jpg";
import img_evento_03_02 from "../img/eventos/28-05-23/img-02.jpg";
import img_evento_03_03 from "../img/eventos/28-05-23/img-03.jpg";
import img_evento_03_04 from "../img/eventos/28-05-23/img-04.jpg";
import img_evento_03_05 from "../img/eventos/28-05-23/img-05.jpg";
import img_evento_03_06 from "../img/eventos/28-05-23/img-06.jpg";
import img_evento_03_07 from "../img/eventos/28-05-23/img-07.jpg";
import img_evento_03_08 from "../img/eventos/28-05-23/img-08.jpg";
import img_evento_03_09 from "../img/eventos/28-05-23/img-09.jpg";

// Creador de eventos
import autorManuel from "../img/autor/manuel-sandoval.jpeg";
import autorCarlos from "../img/autor/carlos-ortega.jpeg";

export const eventos = [
  {
    id: 3,
    titulo: "Adoración Pública.",
    descripcion: "Lorem",
    descripcionCompleta: `Lorem.`,
    fecha: "Septiembre 17 2023",
    autor: "Manuel Sandoval",
    imgAutor: autorManuel,
    imgPrincipal: img_evento_01,
    img: [img_evento_01_01, img_evento_01_02],
    video: [],
    redes: {
      facebook: {
        link1:
          "https://www.facebook.com/share/r/6PG7B8A6ov7yvJCY/?mibextid=W40cHY",
        link2:
          "https://www.facebook.com/share/r/2x8yxDFjsMwXAqyq/?mibextid=W40cHY",
      },
      instagram: {
        link1:
          "https://www.instagram.com/reel/CujrNzQMqyM/?igsh=cXd4bHZyZ2F0dWY4",
        link2:
          "https://www.instagram.com/reel/Cu9xgQUP-JK/?igsh=dzBrc3k4aGJ1aXNv",
      },
    },
  },
  {
    id: 2,
    titulo: "Adoración Pública Cancha Ciudad del Parque.",
    descripcion:
      "En el corazón de Ciudad del Parque, la cancha principal se convirtió en el epicentro de una experiencia única al aire libre...",
    descripcionCompleta: `En el corazón de Ciudad del Parque, la cancha principal se convirtió en el epicentro de una experiencia única al aire libre, atrayendo a más de 200 personas de todas las edades. El evento se inició con una emotiva bienvenida a Dios y al público, marcada por una oración que resonó en los corazones de todos los presentes.

    Sin interrupción, el ambiente se impregnó de una energía vibrante cuando los instrumentos musicales cobraron vida y los adoradores presentes aceleraron el mover de la presencia del Eterno a través de la alabanza y la adoración. Esta exaltación produjo una atmósfera de gozo y satisfacción que envolvió a todos los asistentes, preparándolos para lo que estaba por venir.
    
    Las obras de teatro, ejecutadas con maestría y pasión, cautivaron a la audiencia, añadiendo capas de emoción y significado a la experiencia. Pero el clímax llegó con la llegada del evangelista Pedro Valiente, cuya poderosa exposición de la palabra del Señor resonó en los corazones de todos los presentes.
    
    A medida que las palabras del evangelista llenaban el aire, la gloria de Dios se hizo más palpable que nunca, transformando vidas y cambiando corazones en un momento que quedará grabado en la memoria de todos los que tuvieron el privilegio de presenciarlo.
    
    Sin duda, esta fue una experiencia que trascendió el tiempo y el espacio, dejando una huella imborrable en aquellos que tuvieron el honor de ser testigos de ella.`,
    fecha: "Julio 09 2023",
    autor: "Carlos Ortega",
    imgAutor: autorCarlos,
    imgPrincipal: img_evento_02,
    img: [
      img_evento_02_02,
      img_evento_02_01,
      img_evento_02_03,

      img_evento_02_05,
      img_evento_02_04,
      img_evento_02_06,
      img_evento_02_07,
      img_evento_02_08,
      img_evento_02_09,
      img_evento_02_10,
      img_evento_02_11,
      img_evento_02_12,
      img_evento_02_13,
    ],
    video: [],
    redes: {
      facebook: {
        link1: "",
        link2: "",
      },
      instagram: {
        link1: "",
        link2: "",
      },
    },
  },
  {
    id: 1,
    titulo: `Adoración Pública`,
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nobis dolorum. lorem",
    fecha: "Mayo 28 2023",
    autor: "Manuel Sandoval",
    imgAutor: autorManuel,
    imgPrincipal: img_evento_03,
    img: [
      img_evento_03_02,
      img_evento_03_01,
      img_evento_03_03,
      img_evento_03_05,
      img_evento_03_04,
      img_evento_03_06,
      img_evento_03_08,
      img_evento_03_07,
      img_evento_03_09,
    ],
    video: [],
    redes: {
      facebook: {
        link1: "",
        link2: "",
      },
      instagram: {
        link1: "",
        link2: "",
      },
    },
  },
];
