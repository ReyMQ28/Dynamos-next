import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import "@/css/global.css"

// import { Aladin, Roboto, Acme } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dynamos",
  description: "Landing page Dynamos",
};

// const font_project = Acme({
//   weight: ["400"],
//   styles: ["normal", "italic"],
//   subsets: ["latin"],
// });

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="es">
        <body /* className={font_project.className} */>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
