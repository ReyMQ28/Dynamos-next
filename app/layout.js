// import "./global.css"
import Navbar from "@/components/Navbar";
import { Aladin, Roboto, Acme } from "next/font/google";

export const metadata = {
  title: "Dynamos",
  description: "Landing page Dynamos",
};  

const font_project = Acme({
  weight: ["400"],
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font_project.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
