import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import "@/css/global.css";

import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Dynamos",
  description: "Landing page Dynamos",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="es">
        <body>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
          </ChakraProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
