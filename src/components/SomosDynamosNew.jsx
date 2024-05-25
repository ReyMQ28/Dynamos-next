"use client"
import Mision from "@/components/Mision";
import ObjEspecificos from "@/components/ObjEspecificos";
import ObjGeneral from "@/components/ObjGeneral";
import Vision from "@/components/Vision";
import { useAuth } from "@/context/AuthContext";



function SomosDynamosNew() {
  const { darkMode } = useAuth();

  return (
    <div className={`${
      darkMode ? "fondo-estandar-oscuro" : "fondo-estandar-claro"
    }`} >
      <Mision />
      <Vision />
      <ObjGeneral />
      <ObjEspecificos />
    </div>
  );
}

export default SomosDynamosNew;
