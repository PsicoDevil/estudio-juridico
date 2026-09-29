# RAMOS & ASOCIADOS — demo conceptual

Sitio editorial en Next.js para RAMOS & ASOCIADOS, Abogados. El área conocida es Derecho Laboral y el profesional principal es Antonio Ramos. Teléfono, dirección y matrícula son ficticios y no están verificados.

## Desarrollo y validación

```sh
npm install
npm run dev
npm run lint
npm run build
```

En PowerShell con scripts deshabilitados, utilizar `npm.cmd`.

## Contenido y componentes

- `data/site.ts`: marca, contacto ficticio, texto del estudio, metodología, profesionales y áreas. Agregar profesionales al arreglo `professionals` sin inventar sus datos. Las reservas 02–04 en `futurePracticeAreas` no se muestran al público.
- `components/ProfessionalPortrait.tsx`: retrato y datos profesionales reutilizables.
- `components/Brand.tsx`, `Header.tsx`, `Reveal.tsx`, `ContactForm.tsx`: identidad, navegación adaptable, animaciones y formulario visual.
- `app/page.tsx`, `app/globals.css`: composición editorial y estilos responsive.
- `app/layout.tsx`, `app/icon.svg`, `app/robots.ts`: metadata, favicon y acceso de robots. La demo mantiene `noindex, nofollow`; se permite el rastreo para que los buscadores puedan leer esa directiva.
- `public/images/antonio.png`: copia binariamente idéntica del retrato disponible en `public/antonio.png`. Sin edición ni filtros. Se muestra únicamente en Profesional. Cambiar la ruta en los datos para reemplazar la fotografía definitiva.

Los CTA abren el enlace conceptual de WhatsApp solicitado. El formulario sólo valida los campos y muestra una confirmación de prueba; no envía ni guarda datos.

## Pendiente para publicación

Confirmar teléfono, domicilio, matrícula y jurisdicción, textos y alcance de la práctica, biografía y fotografía definitiva. Completar los datos del eventual segundo profesional y otras áreas únicamente cuando estén disponibles. Definir destino real del formulario y tratamiento de datos. Configurar el dominio definitivo antes de agregar canonical, URLs absolutas de Open Graph y sitemap, y retirar noindex sólo al aprobar el contenido real.

El logo original `public/ramos.png` se integra mediante `Brand` en el header, El Estudio y el footer. El hero utiliza composición tipográfica sin retrato.
