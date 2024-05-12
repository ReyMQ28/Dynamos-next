import Bienvenida from "@/components/Bienvenida";
import Eventos from "@/components/Eventos";
import Team from "@/components/Team";
import Testimonios from "@/components/Testimonios";

function homePage() {
  return (
    <div>
      <Bienvenida />
      <Eventos />
      <Testimonios />
      <Team />
    </div>
  );
}

export default homePage;
