import Image from "next/image";
import { Building2, Banknote, Globe2, MonitorSmartphone, MapPin, UsersRound, Plane, Scale, Building, ShieldCheck } from "lucide-react";
import { Links } from "@/data/links";

export default function Home(){
  return(<main>
    {/* Hero */}
    <section className="bg-white">
      <div className="container-lg py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="badge">Puente Chile → España / UE</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand-prussian">Tu empresa en España, sin viajar desde Chile</h1>
          <p className="mt-5 text-slate-700 text-lg leading-relaxed">Constituimos tu sociedad en España, abrimos tu cuenta bancaria europea y te entregamos todo lo necesario para facturar legalmente en la Unión Europea. Todo gestionado de forma remota, con un equipo local que te representa.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#paquetes" className="btn btn-primary">Quiero expandirme a Europa</a>
            <a href="#contacto" className="btn btn-outline">Hablar con el equipo</a>
          </div>
        </div>
        <div className="card p-0 overflow-hidden">
          <Image src="/images/hero-banner.jpg" alt="Banner" width={1920} height={720}/>
        </div>
      </div>
    </section>

    {/* Por qué nosotros */}
    <section id="por-que-nosotros" className="section-muted">
      <div className="container-lg py-14 md:py-20">
        <h2 className="text-3xl font-bold text-brand-prussian text-center">¿Por qué nosotros?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-brand-prussian flex items-center gap-2"><UsersRound className="w-5 h-5"/> Equipo local</h3>
            <p className="mt-2 text-slate-700">Abogados, gestores y asesores en España que conocen las normas y el mercado europeo. Te acompañamos desde el inicio para que tu empresa cumpla con todos los requisitos.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-brand-prussian flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> Riesgo bajo</h3>
            <p className="mt-2 text-slate-700">Minimizamos el riesgo de tu inversión: gestionamos la parte legal, fiscal y operativa, evitando sorpresas y gastos innecesarios.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-brand-prussian flex items-center gap-2"><Globe2 className="w-5 h-5"/> Puente UE</h3>
            <p className="mt-2 text-slate-700">Somos tu socio estratégico para entrar en España y la Unión Europea. Conectamos con proveedores, clientes y aliados, para que tu negocio crezca desde el primer día.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Servicios */}
    <section id="servicios" className="bg-white">
      <div className="container-lg py-14 md:py-20">
        <h2 className="text-3xl font-bold text-brand-prussian text-center">Servicios integrales</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({length:9}).map((_,i)=>(
            <div className="card p-6" key={i}>
              <Image src={`/images/servicios-${i+1}.jpg`} alt={`Servicio ${i+1}`} width={1200} height={800} className="rounded-xl mb-3"/>
              <h4 className="font-semibold">Servicio {i+1}</h4>
              <p className="text-slate-700 mt-1">Descripción breve del servicio {i+1}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Paquetes / Pricing */}
    <section id="paquetes" className="section-muted">
      <div className="container-lg py-14 md:py-20">
        <h2 className="text-3xl font-bold text-brand-prussian text-center">Paquetes y modelo de cobro</h2>
        <p className="text-slate-600 text-center mt-2">Elige el nivel que necesitas hoy; puedes escalar cuando quieras.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Pack Inicio */}
          <div className="card p-6 flex flex-col">
            <div className="text-sm text-slate-500">Pack Inicio</div>
            <h3 className="text-2xl font-bold text-brand-prussian mt-1">“Tu empresa en España”</h3>
            <div className="mt-3 text-3xl font-extrabold text-brand-prussian">€ 4.000 – 6.000</div>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Constitución de sociedad (CIF y registro).</li>
              <li>Apertura de cuenta bancaria europea.</li>
              <li>Dirección fiscal en España.</li>
              <li>Página web corporativa básica.</li>
              <li>Asesoría inicial legal y fiscal.</li>
            </ul>
            <a href="#contacto" className="btn btn-primary mt-6">Empezar</a>
          </div>

          {/* Pack Gestión */}
          <div className="card p-6 flex flex-col border-2 border-brand-primary">
            <div className="text-sm text-slate-500">Pack Gestión</div>
            <h3 className="text-2xl font-bold text-brand-prussian mt-1">“Operación legal y fiscal”</h3>
            <div className="mt-3 text-3xl font-extrabold text-brand-prussian">€ 800 – 1.200 / mes</div>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Administrador único en España.</li>
              <li>Contabilidad mensual e impuestos.</li>
              <li>Cumplimiento fiscal y legal.</li>
              <li>Soporte remoto continuo.</li>
            </ul>
            <a href="#contacto" className="btn btn-primary mt-6">Quiero delegar</a>
          </div>

          {/* Pack Expansión */}
          <div className="card p-6 flex flex-col">
            <div className="text-sm text-slate-500">Pack Expansión</div>
            <h3 className="text-2xl font-bold text-brand-prussian mt-1">“Crecer en Europa”</h3>
            <div className="mt-3 text-3xl font-extrabold text-brand-prussian">desde € 1.500 / mes</div>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Salas de reuniones y oficinas.</li>
              <li>Transitarios y logística UE.</li>
              <li>Desarrollo comercial y reuniones.</li>
              <li>Marketing digital y crecimiento.</li>
            </ul>
            <div className="mt-4 text-sm text-slate-600">
              <b>Variable por éxito:</b> 3–5% sobre ventas gestionadas o 10–15% sobre margen de clientes aportados. <br/>
              <b>Equity (opcional):</b> 5–10% en proyectos de alto potencial a cambio de menores variables.
            </div>
            <a href="#contacto" className="btn btn-primary mt-6">Quiero crecer</a>
          </div>
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section id="contacto" className="bg-white">
      <div className="container-lg py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-brand-prussian">¿Listo para abrir tu empresa en España?</h2>
          <p className="text-slate-700 mt-2">Te guiamos de principio a fin. Todo remoto, sin viajar.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href={Links.whatsapp} target="_blank" className="btn btn-outline">WhatsApp</a>
            <a href={Links.calendly} target="_blank" className="btn btn-outline">Agenda reunión</a>
            <a href={Links.email} className="btn btn-outline">Email</a>
          </div>
        </div>
        <div className="card p-0 overflow-hidden">
          <Image src="/images/contacto.jpg" alt="Contacto" width={1600} height={900}/>
        </div>
      </div>
    </section>
  </main>);
}
