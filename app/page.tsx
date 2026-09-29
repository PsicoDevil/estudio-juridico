import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { ProfessionalPortrait } from "@/components/ProfessionalPortrait";
import { Brand } from "@/components/Brand";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span><i aria-hidden="true" />{children}</p>;
}

function ConsultationLink({ light = false }: { light?: boolean }) {
  return (
    <a className={`button ${light ? "button-light" : "button-dark"}`} href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
      Solicitar consulta <ArrowUpRight size={17} strokeWidth={1.5} />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <a className="skip-link" href="#contenido">Saltar al contenido</a><main id="inicio"><div id="contenido" tabIndex={-1} />
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-inner">
            <div className="hero-main">
              <p className="hero-eyebrow">{site.role} <span aria-hidden="true">/</span> {site.focus}</p>
              <h1 id="hero-title">RAMOS<span className="hero-associates">& ASOCIADOS</span></h1>
              <div className="hero-statement">
                <span className="hero-rule" aria-hidden="true" />
                <div><p className="hero-description">El derecho requiere análisis.<br />Cada caso, una estrategia.</p></div>
              </div>
              <div className="hero-actions"><ConsultationLink light /><a className="underlined-link light-link" href="#profesional">Conocer al profesional <ArrowRight size={17} strokeWidth={1.4} /></a></div>
            </div>
            <div className="hero-bottom"><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}</a><span>CONTACTO FICTICIO · DEMO CONCEPTUAL</span></div>
          </div>
        </section>

        <section className="section professional" id="profesional" aria-labelledby="professional-title">
          <div className="wrap">
            <Reveal><SectionLabel number="01">EL PROFESIONAL</SectionLabel></Reveal>
            <div className="professional-grid">
              <div className="professional-gallery">{site.professionals.map(person => <ProfessionalPortrait key={person.name} person={person} />)}</div>
              <Reveal delay={0.1}><div className="professional-copy"><p className="overline">LA PERSONA DETRÁS DE CADA CONSULTA</p><h2 className="display-title" id="professional-title">Antonio<br /><em>Ramos.</em></h2><p className="intro-line">Una práctica personal, con atención a los hechos y a las personas detrás de cada consulta.</p><p>Antonio Ramos brinda asesoramiento y representación en materia laboral. El punto de partida es comprender la situación, explicar las alternativas con claridad y definir una estrategia acorde a cada necesidad.</p><a className="underlined-link" href="#contacto">Iniciar una conversación <ArrowUpRight size={17} strokeWidth={1.4} /></a></div></Reveal>
            </div>
            <div className="professional-bottom"><span>ESCUCHA ATENTA</span><span>ANÁLISIS RIGUROSO</span><span>TRATO PERSONAL</span></div>
          </div>
        </section>

        <section className="section labor" id="practica" aria-labelledby="labor-title">
          <div className="wrap labor-layout">
            <div className="labor-heading"><Reveal><SectionLabel number="02">DERECHO LABORAL</SectionLabel><h2 className="display-title" id="labor-title">El trabajo<br />es parte de<br /><em>tu historia.</em></h2></Reveal></div>
            <div className="labor-content"><Reveal delay={0.1}><p className="labor-number" aria-hidden="true">02<span>/07</span></p><p className="intro-line">Cada situación laboral tiene un contexto propio. Escucharlo es el primer paso para abordarla con criterio.</p><p>La práctica se enfoca en brindar orientación clara y acompañamiento durante la evaluación de alternativas y los pasos que correspondan.</p><a className="underlined-link" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <ArrowUpRight size={17} strokeWidth={1.4} /></a></Reveal></div>
          </div>
          <div className="wrap labor-bottom"><span>ASESORAMIENTO</span><span>REPRESENTACIÓN</span><span>ACOMPAÑAMIENTO</span></div>
        </section>

        <section className="section areas" id="areas" aria-labelledby="areas-title">
          <div className="wrap">
            <Reveal><SectionLabel number="03">ÁREAS DE PRÁCTICA</SectionLabel></Reveal>
            <div className="areas-heading"><Reveal><h2 className="display-title" id="areas-title">Enfoque definido.<br /><em>Atención singular.</em></h2></Reveal><Reveal delay={0.1}><p>Asesoramiento, representación y análisis de situaciones laborales. Una estrategia jurídica que parte de comprender cada contexto.</p></Reveal></div>
            <div className="practice-list">
              {site.practiceAreas.map((area, index) => <Reveal key={area.title}><div className="practice-row"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{area.title}</h3><p>{area.description}</p></div><a href="#practica" aria-label={`Conocer ${area.title}`}><ArrowUpRight size={27} strokeWidth={1.2} aria-hidden="true" /></a></div></Reveal>)}
            </div>
            <div className="areas-foot"><span>DERECHO LABORAL · NUESTRA PRÁCTICA</span><span>01 / 01</span></div>
          </div>
        </section>

        <section className="section studio" id="estudio" aria-labelledby="studio-title">
          <div className="wrap studio-layout">
            <div className="studio-visual">
              <Brand />
            </div>
            <div className="studio-copy"><Reveal><SectionLabel number="04">EL ESTUDIO</SectionLabel><h2 className="display-title" id="studio-title">Una identidad<br /><em>con nombre propio.</em></h2><p className="intro-line">{site.studioDescription}</p><p>El análisis, la claridad y el trato personal orientan nuestra manera de abordar cada consulta.</p><div className="studio-people">{site.professionals.map((person, index) => <div className="studio-person" key={person.name}><span>{String(index + 1).padStart(2, "0")} / PROFESIONAL</span><strong>{person.name}</strong><small>{person.role} · {person.focus}</small></div>)}</div></Reveal></div>
          </div>
        </section>

        <section className="section methodology" id="metodologia" aria-labelledby="method-title">
          <div className="wrap"><Reveal><SectionLabel number="05">METODOLOGÍA</SectionLabel></Reveal><div className="method-grid"><Reveal><div><h2 className="display-title" id="method-title">Un proceso<br /><em>con sentido.</em></h2><p>Cuatro principios para abordar cada consulta con claridad, atención y responsabilidad.</p></div></Reveal><div className="method-list">{site.method.map((step, index) => <Reveal key={step.title} delay={index * 0.05}><div className="method-row"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><ArrowUpRight size={18} strokeWidth={1.1} aria-hidden="true" /></div></Reveal>)}</div></div></div>
        </section>

        <section className="consultation" aria-labelledby="consultation-title"><div className="wrap consultation-layout"><Reveal><SectionLabel number="06">CONSULTA</SectionLabel><h2 id="consultation-title">El siguiente paso<br /><em>empieza hablando.</em></h2></Reveal><Reveal delay={0.1}><div><p>Si necesitás orientación en materia laboral, escribí directamente a Antonio por WhatsApp.</p><ConsultationLink light /><a className="consultation-phone" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}</a></div></Reveal></div></section>

        <section className="section contact" id="contacto" aria-labelledby="contact-title"><div className="wrap"><Reveal><SectionLabel number="07">CONTACTO</SectionLabel></Reveal><div className="contact-layout"><div><Reveal><h2 className="display-title" id="contact-title">Conversemos<br /><em>sobre tu consulta.</em></h2><p className="contact-intro">{site.name}<br />{site.address}<br />Matrícula {site.professionals[0].license}</p></Reveal><p className="demo-note">{site.demoNotice}</p><ConsultationLink /><div className="contact-options"><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={22} strokeWidth={1.4} /><span>WHATSAPP<strong>{site.phoneDisplay}</strong></span><ArrowUpRight size={18} strokeWidth={1.3} /></a></div></div><Reveal delay={0.08}><ContactForm /></Reveal></div></div></section>
      </main>
      <footer className="footer"><div className="wrap"><div className="footer-main"><div><Brand /><p>Asesoramiento y representación en materia laboral.</p></div><nav aria-label="Navegación del pie de página">{site.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-contact"><span>CONTACTO DIRECTO</span><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">{site.phoneDisplay} <ArrowUpRight size={18} strokeWidth={1.3} /></a><p>WhatsApp · Contacto ficticio</p><p>{site.address}</p><p>Matrícula {site.professionals[0].license} · Ficticia</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RAMOS & ASOCIADOS. TODOS LOS DERECHOS RESERVADOS.</span><span>{site.demoNotice}</span><a href="#inicio">VOLVER ARRIBA ↑</a></div></div></footer>
    </>
  );
}
