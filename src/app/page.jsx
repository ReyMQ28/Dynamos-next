import Bienvenida from "@/components/NewBienvenida";
import SomosDynamosNew from "@/components/SomosDynamosNew";
import Eventos from "@/components/Eventos";
import Team from "@/components/Team";
import Testimonios from "@/components/Testimonios";

function homePage() {
  return (
    <div>
      <Bienvenida />
      <SomosDynamosNew />
      <Eventos />
      <Testimonios />
      <Team />
    </div>
  );
}

export default homePage;
