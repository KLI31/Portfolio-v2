# Spec: Blog (v1)

## Propósito
Visibilidad profesional: compartir eventos, aprendizajes y decisiones técnicas.

## Contenido
- Autor único.
- Markdown puro (`.md`) vía Astro Content Collections. Sin MDX.
- Solo en español por ahora. Sin traducción a `/en/`.
- Metadata por post:
  - `title`
  - `date`
  - `excerpt` — solo para `<meta description>` (SEO), no se muestra en el listado.
  - `coverImage` — obligatoria.
- Sin tags/categorías.

## Rutas
- `/blog` — listado.
- `/blog/[slug]` — detalle de post.

## Navegación
- Enlace "Blog" en `Header.astro`.
- Visible solo en la versión española del nav. Oculto en `/en/`.

## Diseño — Listado
Lista vertical simple (no grid de tarjetas). Por cada entrada:
- Fecha.
- Título en negrita.
- Imagen m2iniatura a la derecha.
- Sin tag, sin excerpt visible.

Referencia visual: layout tipo "Recent Publications" (fecha + título a la izquierda, imagen a la derecha), sin la etiqueta de categoría que trae la referencia original.

## Diseño — Post individual
- Imagen de portada como hero arriba.
- Título + fecha debajo.
- Contenido markdown en columna centrada, ancho legible (~65–75ch).
- Reutiliza `Layout.astro` (header/footer/dark mode consistentes con el resto del sitio).

## Fuera de alcance (v1)
- Tags/categorías.
- RSS.
- Buscador.
- Comentarios.
- Tiempo de lectura.
- Versión en inglés.
