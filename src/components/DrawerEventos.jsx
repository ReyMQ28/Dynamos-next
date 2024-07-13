import {
  Button,
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
      <Button
        onClick={onOpen}
        className="text-black text-5xl justify-end cursor-pointer hover:text-white"
        _hover={{ bg: darkMode ? "red.500" : "blue.500" }}
      >Ver mas</Button>

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
