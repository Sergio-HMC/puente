"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV=[
  {href:"#servicios",label:"Servicios"},
  {href:"#por-que-nosotros",label:"¿Por qué nosotros?"},
  {href:"#paquetes",label:"Paquetes"},
  {href:"#contacto",label:"Contacto"},
];

export default function Navbar(){
  const [open,setOpen]=useState(false);
  return(<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
    <div className="container-lg py-3 md:py-4 flex items-center justify-between">
      <Link href="/" className="text-brand-prussian font-extrabold text-xl">Latam Gate Europe</Link>
      <nav className="hidden md:flex items-center gap-8 text-[15px]">
        {NAV.map(i=>(<a key={i.href} href={i.href} className="pb-1 hover:opacity-80">{i.label}</a>))}
      </nav>
      <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200" onClick={()=>setOpen(!open)} aria-label={open? "Cerrar":"Abrir"}>{open? <X className="w-5 h-5"/>:<Menu className="w-5 h-5"/>}</button>
    </div>
    {open && (<div className="md:hidden border-t border-slate-200 bg-white">
      <div className="container-lg py-3 flex flex-col gap-3">
        {NAV.map(i=>(<a key={i.href} href={i.href} onClick={()=>setOpen(false)}>{i.label}</a>))}
      </div>
    </div>)}
  </header>);
}
