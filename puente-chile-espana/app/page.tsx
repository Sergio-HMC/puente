"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Globe2,
  Handshake,
  ShieldCheck,
  Truck,
  Building2,
  ArrowRight,
  Percent,
  Languages,
  LineChart,
  BadgeEuro,
  Timer,
} from "lucide-react";
import Button from "../components/Button";

const features = [
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Equipo local",
    text: "Gestoría + legal + comercial, todo bajo un solo interlocutor.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Riesgo bajo",
    text: "Cumplimiento fiscal, legal, sanitario y de etiquetado sin sorpresas.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Puerta a la UE",
    text: "España como hub para escalar a 27 países.",
  },
];

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Aterrizaje legal-fiscal",
    text: "SL/Sucursal, NIF-IVA, contratos, marcas (OEPM/EUIPO).",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Importación & logística",
    text: "Aranceles, Incoterms, 3PL, fulfilment y devoluciones.",
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: "Go-to-Market",
    text: "Validación, precios, canales B2B/retail/marketplaces.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Representación comercial",
    text: "Prospección, agendas B2B y gestión de cuentas.",
  },
  {
    icon: <BadgeEuro className="w-6 h-6" />,
    title: "Localización fiscal",
    text: "IVA OSS, partners y primeros leads.",
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Modelo por hitos",
    text: "Fee base + éxito compartido por ventas/KPIs.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "3.000-5.000 €",
    bullets: [
      "Análisis express (2-3 semanas)",
      "Plan de entrada y presupuesto",
      "Checklist regulatorio",
      "Estimador de costes",
    ],
  },
  {
    name: "Landing",
    price: "8.000-15.000 €",
    bullets: [
      "Alta fiscal/societaria",
      "Registros + primer envío piloto",
      "Prueba de canal (marketplace o B2B)",
      "Agenda comercial inicial",
    ],
  },
  {
    name: "Representación",
    price: "1.500-4.000 €/mes",
    bullets: [
      "Pipeline comercial y reuniones",
      "Reporting y back-office básico",
      "Gestión fiscal y legal",
      "Acceso a partners y red local",
    ],
  },
];

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-brand-primary mb-6"
            >
              Conectamos Latam con Europa
            </motion.h1>
            <p className="text-lg text-slate-600 mb-8">
              Tu socio local en España/UE: te acompañamos en lo legal, fiscal y
              logístico, y abrimos puertas comerciales para que tu negocio crezca
              sin fronteras. <br />
              <br />
              Tú te concentras en el producto. Nosotros en que funcione aquí.
            </p>
            <div className="flex gap-4">
              <Button>Quiero evaluar mi entrada</Button>
              <Button variant="outline">Ver servicios</Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/alianza.webp"
              alt="Alianza entre Latam y Europa"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-brand-prussian mb-12">
            Por qué nosotros
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl shadow-sm">
                <div className="text-brand-primary mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-brand-prussian mb-12">
            Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-brand-primary mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-brand-prussian mb-12">
            Paquetes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((p, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl shadow-sm flex flex-col">
                <h3 className="text-xl font-semibold text-brand-primary mb-2">{p.name}</h3>
                <p className="text-2xl font-bold mb-4">{p.price}</p>
                <ul className="space-y-2 text-slate-600 flex-grow">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-prussian mt-1" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6">Quiero este plan</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-brand-prussian mb-6">
            Contacto
          </h2>
          <p className="text-slate-600 mb-8">
            Agenda una llamada con nuestro equipo y empieza tu camino hacia Europa.
          </p>
          <Button>Agendar llamada</Button>
        </div>
      </section>
    </main>
  );
}
