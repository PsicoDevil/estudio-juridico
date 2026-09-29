"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { site } from "@/data/site";

export function Header() {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const close = (event: KeyboardEvent) => { if (open && event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } };
    const resize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", close); window.removeEventListener("resize", resize); };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="header-inner wrap">
          <Brand onClick={() => setOpen(false)} />
          <nav className="desktop-nav" aria-label="Navegación principal">
            {site.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-cta" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            Solicitar consulta <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegación móvil" aria-hidden={!open}>
          {site.navigation.map((item, index) => (
            <a key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} />
            </a>
          ))}
          <p>RAMOS & ASOCIADOS · ABOGADOS</p>
        </nav>
      </header>
      <a className="mobile-consultation" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
        <span>Solicitar consulta por WhatsApp</span><ArrowUpRight size={18} strokeWidth={1.5} />
      </a>
    </>
  );
}
