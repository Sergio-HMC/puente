export default function Footer(){
  return(<footer className="py-10 border-t border-slate-200 bg-white">
    <div className="container-lg text-sm text-slate-600 flex flex-col md:flex-row items-center justify-content-between gap-4">
      <div>© {new Date().getFullYear()} Latam Gate Europe</div>
      <div className="flex items-center gap-6">
        <a href="#paquetes" className="hover:opacity-80">Paquetes</a>
        <a href="#contacto" className="hover:opacity-80">Contacto</a>
      </div>
    </div>
  </footer>);
}
