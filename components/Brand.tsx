import Image from "next/image";
import logo from "@/public/ramos.png";
import { site } from "@/data/site";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a className="brand" href="#inicio" onClick={onClick} aria-label={`${site.name}, volver al inicio`}>
      <Image src={logo} alt={`${site.name} · ${site.role}`} sizes="(max-width: 680px) 210px, 320px" className="brand-logo" />
    </a>
  );
}
