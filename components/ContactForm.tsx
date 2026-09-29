"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
export function ContactForm() {
  const [previewed, setPreviewed] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setPreviewed(true); }
  return <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note">
    <div className="form-topline"><span>CONTANOS TU CONSULTA</span><span>DEMO</span></div>
    <div className="form-grid">
      <label>Nombre *<input name="name" autoComplete="name" placeholder="Tu nombre completo" required /></label>
      <label>Email *<input name="email" type="email" autoComplete="email" placeholder="tu@email.com" required /></label>
      <label>Teléfono<input name="phone" type="tel" autoComplete="tel" placeholder="Tu número de contacto" /></label>
      <label className="form-message">Consulta *<textarea name="message" placeholder="Contanos brevemente el motivo de tu consulta" rows={5} required /></label>
    </div>
    <p className="form-note" id="form-note">Formulario de demostración. No envía ni guarda datos. Los campos con * son obligatorios.</p>
    <button className="button button-dark" type="submit">Probar formulario <ArrowUpRight size={17} /></button>
    <p className="form-status" role="status">{previewed ? "Vista de prueba completada. Tu consulta no fue enviada ni guardada." : ""}</p>
  </form>;
}
