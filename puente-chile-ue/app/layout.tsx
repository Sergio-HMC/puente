export const metadata={title:"Latam Gate Europe — Puente Chile → España",description:"Tu empresa en España sin viajar desde Chile. Constitución, banco europeo, fiscalidad y operaciones, todo remoto."};
import "../styles/globals.css"; import type { ReactNode } from "react"; import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function RootLayout({children}:{children:ReactNode}){
  return(<html lang="es"><head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
  </head><body className="min-h-screen bg-slate-50 font-sans"><Navbar/>{children}<Footer/></body></html>);
}
