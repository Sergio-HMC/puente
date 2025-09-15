"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Building2, Truck, Languages, LineChart, BadgeEuro, Percent } from "lucide-react";

export default function Page() {
  const services = [
    { icon: <Building2 className="w-6 h-6" />, title: "Aterrizaje legal-fiscal", text: "SL/Sucursal, NIF-IVA, contratos, marcas (OEPM/EUIPO)." },
    { icon: <Truck className="w-6 h-6" />, title: "Importación & logística", text: "Aranceles, Incoterms, 3PL, fulfillment y devoluciones." },
    { icon: <Languages className="w-6 h-6" />, title: "Go-to-Market", text: "Validación, precios, canales B2B/retail/marketplaces." },
    { icon: <LineChart className="w-6 h-6" />, title: "Representación comercial", text: "Prospección, agendas B2B y gestión de cuentas." },
    { icon: <BadgeEuro className="w-6 h-6" />, title: "SaaS EU", text: "Localización, IVA OSS, partners y primeros leads." },
    { icon: <Percent className="w-6 h-6" />, title: "Modelo por hitos", text: "Fee base + éxito compartido por ventas/KPIs." },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logos/logo_azul_principal.svg" alt="Latam Gate Europe" width={36} height={36} />
            <span className="font-bold text-brand-prussian">Latam Gate Europe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#valor" className="hover:opacity-80">Valor</a>
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#precios" className="hover:opacity-80">Precios</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 shadow-sm transition bg-brand-primary text-white hover:opacity-90">
              Agenda una llamada
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-brand-prussian">
              Conectamos <span className="text-brand-primary">Latam</span> con <span className="text-brand-primary">Europa</span>
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              Somos tu equipo local en España/UE: armamos la entrada, hacemos los papeles, movemos tu primer envío y abrimos puertas comerciales.
              Tú te enfocas en el producto. Nosotros en que funcione.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 shadow-sm transition bg-brand-primary text-white hover:opacity-90 gap-2">
                Quiero evaluar mi entrada <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#precios" className="inline-flex items-center justify-center rounded-2xl border border-brand-primary px-4 py-2 shadow-sm transition text-brand-primary hover:bg-brand-cornsilk">
                Ver paquetes
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-brand-tea" />
              <span>Checklist regulatorio y estimador de costes incluidos en Starter</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl border border-slate-200 shadow-lg p-6 space-y-3 bg-white">
              <h3 className="text-xl font-semibold text-brand-prussian">Calcula tu primer envío piloto</h3>
              <div className="grid grid-cols-2 gap-3">
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Categoría (p. ej., alimentos)" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Valor FOB (USD)" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Peso (kg)" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Volumen (m³)" />
              </div>
              <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Incoterm (p. ej., DDP)" />
              <button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 shadow-sm transition bg-brand-primary text-white hover:opacity-90 w-full">
                Obtener estimación
              </button>
              <p className="text-xs text-slate-500">*Estimación orientativa. Confirmamos aranceles y tasas antes de cualquier envío.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE */}
      <section id="valor" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-brand-prussian">Por qué nosotros</h2>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Reducimos tiempos, evitamos errores caros y abrimos puertas comerciales gracias a un equipo binacional con base en España y raíces en Chile.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { title: "Menos tiempo, más avance", text: "Pasas de meses a semanas para vender en España/UE." },
              { title: "Sin dolores de cabeza", text: "Fiscalidad, contratos, etiquetas y logística bajo control." },
              { title: "Equipo local a demanda", text: "Gestoría + legal + comercial, sin contratar plantilla en destino." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold mb-1 text-brand-primary">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-16 md:py-20" style={{ background: "#FAF4D3" }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-brand-prussian">Servicios</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <div className="w-10 h-10 rounded-xl bg-brand-cornsilk flex items-center justify-center mb-4 text-brand-primary">{s.icon}</div>
                <h3 className="font-semibold mb-1 text-brand-primary">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-brand-prussian">Paquetes</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { name: "Starter", price: "3.000–5.000 €", bullets: ["Análisis express (2–3 semanas)", "Plan de entrada y presupuesto", "Checklist regulatorio por categoría"] },
              { name: "Landing", price: "8.000–15.000 €", bullets: ["Alta fiscal/societaria", "Registros + primer envío piloto", "Prueba de canal (marketplace o 3–5 leads B2B)"] },
              { name: "Representación", price: "1.500–4.000 €/mes", bullets: ["Pipeline comercial y reuniones", "Reporting y back-office básico", "Comisión 3–8% sobre ventas"] },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-brand-primary">{p.name}</span>
                  <span className="text-base font-normal text-slate-600">{p.price}</span>
                </div>
                <div className="space-y-2">
                  {p.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-brand-tea" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <a href="#contacto" className={"inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 shadow-sm transition w-full " + (i === 1 ? "bg-brand-primary text-white hover:opacity-90" : "text-brand-primary border-brand-primary hover:bg-brand-cornsilk")}>
                  {i === 1 ? "Empezar" : "Consultar"}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">¿Volúmenes altos o SaaS? Pide una propuesta a medida.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-brand-prussian">Conversemos</h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Cuéntanos tu proyecto y en 48h te enviamos un diagnóstico inicial con próximos pasos y un rango de inversión.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-tea" /> NDA bajo demanda</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-tea" /> Respuesta en 48h</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-tea" /> Llamadas en horario Chile o España</li>
            </ul>
          </div>
          <form action="https://formspree.io/f/your-id" method="POST" className="rounded-2xl border border-slate-200 shadow-lg bg-white p-6 space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Nombre" name="name" required />
              <input type="email" className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Email" name="email" required />
            </div>
            <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Empresa (opcional)" name="company" />
            <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Sector / categoría" name="sector" />
            <textarea className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Cuéntanos en 3–4 líneas tu objetivo y plazos" name="message" rows={4} />
            <button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 shadow-sm transition bg-brand-primary text-white hover:opacity-90 w-full" type="submit">
              Enviar
            </button>
            <p className="text-xs text-slate-500">Al enviar, aceptas nuestra política de privacidad y el contacto por email.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Image src="/logos/logo_azul_principal.svg" alt="Latam Gate Europe" width={28} height={28} />
            <span>Latam Gate Europe</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">Aviso legal</a>
            <a href="#" className="hover:opacity-80">Privacidad</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
          <div>© {new Date().getFullYear()} Latam Gate Europe</div>
        </div>
      </footer>
    </div>
  );
}
