import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../context/AuthContext";
import Evento from "@/components/Evento";

function DrawerEventos({ imagenes: imagen, datosEvento }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { darkMode } = useAuth();

  return (
    <>
      <button
      className="bg-slate-200/50 rounded-lg py-2 px-4 font-semibold text-black"
      onClick={onOpen}>Ver más</button>


      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={darkMode ? "#111827" : "white"}>
          <DrawerCloseButton
            bg={darkMode ? "white" : "black"}
            color={darkMode ? "#111827" : "white"}
          />

          <DrawerBody>
            <Evento imagenes={imagen} datosEvento={datosEvento} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerEventos;
