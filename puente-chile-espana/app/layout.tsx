export const metadata = {
  title: "Puente España ⇄ Chile",
  description: "Aterrizaje legal‑fiscal, importación y representación comercial para entrar a España/UE.",
};

import "./../styles/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {children}
      </body>
    </html>
  );
}
