"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe2, Handshake, ShieldCheck, Truck, Building2, ArrowRight, Percent, Languages, LineChart, BadgeEuro, Timer } from "lucide-react";
import Button from "@/components/Button";

const features = [
  { icon: <Timer className="w-6 h-6" />, title: "Time‑to‑market", text: "Reducimos tu entrada a España/UE de meses a semanas." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Riesgo bajo", text: "Cumplimiento fiscal, legal, sanitario y de etiquetado sin sorpresas." },
  { icon: <Handshake className="w-6 h-6" />, title: "Equipo local", text: "Gestoría + legal + comercial, todo bajo un solo interlocutor." },
  { icon: <Globe2 className="w-6 h-6" />, title: "Puerta a la UE", text: "España como hub para escalar a 27 países." },
];

const services = [
  { icon: <Building2 className="w-6 h-6" />, title: "Aterrizaje legal‑fiscal", text: "SL/Sucursal, NIF‑IVA, contratos, marcas (OEPM/EUIPO)." },
  { icon: <Truck className="w-6 h-6" />, title: "Importación & logística", text: "Aranceles, Incoterms, 3PL, fulfillment y devoluciones." },
  { icon: <Languages className="w-6 h-6" />, title: "Go‑to‑Market", text: "Validación, precios, canales B2B/retail/marketplaces." },
  { icon: <LineChart className="w-6 h-6" />, title: "Representación comercial", text: "Prospección, agendas B2B y gestión de cuentas." },
  { icon: <BadgeEuro className="w-6 h-6" />, title: "SaaS EU", text: "Localización, IVA OSS, partners y primeros leads." },
  { icon: <Percent className="w-6 h-6" />, title: "Modelo por hitos", text: "Fee base + éxito compartido por ventas/KPIs." },
];

const pricing = [
  { name: "Starter", price: "3.000–5.000 €", bullets: ["Análisis express (2–3 semanas)", "Plan de entrada y presupuesto de importación", "Checklist regulatoria por categoría"] },
  { name: "Landing", price: "8.000–15.000 €", bullets: ["Alta fiscal/societaria", "Registros y primer envío piloto", "Prueba de canal (marketplace o 3–5 leads B2B)"] },
  { name: "Representación", price: "1.500–4.000 €/mes", bullets: ["Pipeline comercial y reuniones", "Reporting y back‑office básico", "Comisión 3–8% sobre ventas"] },
];

export default function Page() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-2xl bg-slate-900 text-white font-bold">PE</span>
            <span className="font-semibold tracking-tight">Puente España ⇄ Chile</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#valor" className="hover:opacity-80">Valor</a>
            <a href="#servicios" className="hover:opacity-80">Servicios</a>
            <a href="#precios" className="hover:opacity-80">Precios</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contacto">
              <Button className="rounded-2xl bg-slate-900 text-white hover:opacity-90">Agenda una llamada</Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Tu puente de <span className="text-slate-600">Chile</span> a <span className="text-slate-600">España/UE</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Aterrizaje legal‑fiscal, importación y representación comercial para emprendedores y pymes que quieren vender en España y escalar a Europa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto">
                <Button className="rounded-2xl bg-slate-900 text-white hover:opacity-90 flex items-center gap-2">Quiero evaluar mi entrada <ArrowRight className="w-4 h-4" /></Button>
              </a>
              <a href="#precios">
                <Button className="rounded-2xl">Ver paquetes</Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4" />
              <span>Checklist regulatorio y estimador de costes incluidos en el plan Starter</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl border border-slate-200 shadow-lg p-6 space-y-3 bg-white">
              <h3 className="text-xl font-semibold">Calcula tu primer envío piloto</h3>
              <div className="grid grid-cols-2 gap-3">
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Categoría (p. ej., alimentos)" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Valor FOB (USD)" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Peso (kg)" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Volumen (m³)" />
              </div>
              <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Incoterm (p. ej., DDP)" />
              <Button className="w-full rounded-2xl bg-slate-900 text-white hover:opacity-90">Obtener estimación</Button>
              <p className="text-xs text-slate-500">*Estimación orientativa. Confirmamos aranceles y tasas antes de cualquier envío.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE */}
      <section id="valor" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Propuesta de valor</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">Acortamos tiempos, eliminamos errores caros y abrimos puertas comerciales gracias a un equipo binacional con base en España y raíces en Chile.</p>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Servicios</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">{s.icon}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Paquetes</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {pricing.map((p, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-base font-normal text-slate-600">{p.price}</span>
                </div>
                <div className="space-y-2">
                  {p.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 rounded-2xl">{i === 1 ? "Empezar" : "Consultar"}</Button>
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
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Conversemos sobre tu entrada a España</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Cuéntanos tu proyecto y en 48h te enviamos un diagnóstico inicial con próximos pasos y un rango de inversión.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> NDA bajo demanda</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Respuesta en 48h</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Llamadas en horario Chile o España</li>
            </ul>
          </div>
          <form
            action="https://formspree.io/f/your-id"
            method="POST"
            className="rounded-2xl border border-slate-200 shadow-lg bg-white p-6 space-y-3"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Nombre" name="name" required />
              <input type="email" className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Email" name="email" required />
            </div>
            <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Empresa (opcional)" name="company" />
            <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Sector / categoría" name="sector" />
            <textarea className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Cuéntanos en 3–4 líneas tu objetivo y plazos" name="message" rows={4} />
            <Button className="w-full rounded-2xl bg-slate-900 text-white hover:opacity-90" type="submit">Enviar</Button>
            <p className="text-xs text-slate-500">Al enviar, aceptas nuestra política de privacidad y el contacto por email.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-slate-900 text-white font-bold">PE</span>
            <span>Puente España ⇄ Chile</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">Aviso legal</a>
            <a href="#" className="hover:opacity-80">Privacidad</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
          <div>© {new Date().getFullYear()} Todos los derechos reservados</div>
        </div>
      </footer>
    </div>
  );
}
