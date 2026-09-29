// Contenido conceptual editable. Contacto, domicilio y matrícula son ficticios.
export type Professional = {
  name: string;
  role: string;
  focus: string;
  photo: string | null;
  biography: string | null;
  license: string | null;
};

export const site = {
  name: "RAMOS & ASOCIADOS",
  role: "ABOGADOS",
  address: "Durante Quiros 1",
  demoNotice: "Demo conceptual: teléfono, dirección y matrícula ficticios, no verificados.",
  studioDescription: "Una práctica jurídica orientada al análisis preciso de cada situación y al desarrollo de estrategias claras.",
  focus: "Derecho Laboral",
  phoneDisplay: "+54 9 3512 66-4787",
  whatsappHref: "https://wa.me/5493512664787",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "El Estudio", href: "#estudio" },
    { label: "Práctica", href: "#practica" },
    { label: "Profesional", href: "#profesional" },
    { label: "Contacto", href: "#contacto" },
  ],
  practiceAreas: [
    {
      title: "Derecho Laboral",
      description: "Asesoramiento y representación en materia laboral con atención al contexto particular de cada consulta.",
    },
  ],
  // Reservas editoriales: no se publican hasta contar con información real.
  futurePracticeAreas: [
    { number: "02", title: null },
    { number: "03", title: null },
    { number: "04", title: null },
  ],
  professionals: [
    {
      name: "Antonio Ramos",
      role: "Abogado",
      focus: "Derecho Laboral",
      photo: "/images/antonio.png",
      biography: null,
      license: "123456",
    },
  ] as Professional[],
  method: [
    { title: "Análisis", description: "Escuchar y comprender los hechos antes de definir una dirección." },
    { title: "Estrategia", description: "Evaluar alternativas con claridad y criterio jurídico." },
    { title: "Acompañamiento", description: "Mantener una comunicación cercana durante el proceso." },
    { title: "Confidencialidad", description: "Tratar cada consulta con el cuidado que merece." },
  ],
} as const;
