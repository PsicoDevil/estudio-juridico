import Image from "next/image";
import type { Professional } from "@/data/site";

export function ProfessionalPortrait({ person }: { person: Professional }) {
  return <figure className="professional-portrait">
    {person.photo && <Image src={person.photo} alt={`${person.name}, abogado, leyendo junto a una ventana`} width={1272} height={1236} sizes="(max-width: 680px) 100vw, 45vw" />}
    <figcaption><span>{person.role} · {person.focus}</span><strong>{person.name}</strong>{person.license && <small>Matrícula {person.license} · Dato ficticio para la demo</small>}</figcaption>
  </figure>;
}
