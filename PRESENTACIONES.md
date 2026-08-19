# Publicar presentaciones con video

## Arquitectura elegida

La Biblioteca CIEX es un sitio estático, por lo que la opción más simple y robusta es publicar una versión de visualización de la presentación como video MP4 y reproducirla dentro del visor HTML5 del sitio.

Esta ruta conserva lo que el público ve y escucha —videos incrustados, transiciones, animaciones, narración y audio—, pero convierte la presentación en una reproducción lineal. El archivo PPTX original puede conservarse de forma privada o publicarse por separado si también se desea ofrecer una descarga.

## 1. Preparar el archivo en PowerPoint

1. Incrusta los videos; evita vínculos a archivos ubicados solo en el computador del autor.
2. En `Archivo > Información`, ejecuta **Optimizar compatibilidad multimedia** si aparece la opción.
3. Revisa o graba los intervalos de las diapositivas.
4. Usa `Archivo > Exportar > Crear un video`.
5. Elige Full HD y exporta como MP4. Para la web, usa video H.264 y audio AAC.
6. Reproduce el MP4 completo antes de publicarlo y comprueba cada video, audio y transición.

Guía oficial: [Convertir una presentación en video](https://support.microsoft.com/en-us/PowerPoint/turn-your-presentation-into-a-video).

## 2. Alojar el video

Para presentaciones reales, guarda el MP4 en almacenamiento de objetos o un CDN público, por ejemplo Vercel Blob, y copia su URL HTTPS. Evita agregar videos grandes al repositorio: Git y cada despliegue crecerían rápidamente.

El servidor debe entregar:

- `Content-Type: video/mp4` para MP4 o `video/webm` para WebM.
- Solicitudes por rangos (`Accept-Ranges` y respuestas `206`) para adelantar o retroceder con fluidez.
- Una URL pública estable. Si se usan URLs firmadas, deben durar al menos toda la sesión de reproducción.

Referencia: [Vercel Blob](https://vercel.com/docs/vercel-blob).

## 3. Agregar la tarjeta al catálogo

Añade un objeto a `documents` en `script.js`. El campo `viewer` activa el visor interno:

```js
{
  title: "Nombre de la presentación",
  cover: "covers/portada-presentacion.jpg",
  categories: ["Presentaciones"],
  type: "Presentación",
  topic: "Tema",
  year: "2026",
  author: "CIEX",
  viewer: {
    kind: "video",
    label: "Ver presentación",
    aspectRatio: "16/9",
    sources: [
      {
        src: "https://cdn.ejemplo.com/presentaciones/nombre.mp4",
        type: "video/mp4"
      },
      {
        src: "https://cdn.ejemplo.com/presentaciones/nombre.webm",
        type: "video/webm"
      }
    ],
    captions: [
      {
        src: "https://cdn.ejemplo.com/presentaciones/nombre-es.vtt",
        srclang: "es",
        label: "Español",
        default: true
      }
    ]
  }
}
```

Solo el MP4 es obligatorio. WebM y subtítulos WebVTT son respaldos opcionales. `aspectRatio` admite, por ejemplo, `16/9` o `4/3` y usa `16/9` si se omite.

Para una prueba pequeña también se admite una ruta local como `media/presentacion.mp4`, pero no es la opción recomendada para archivos grandes.

## 4. Validar antes de publicar

- Abre y cierra el visor varias veces: el audio debe detenerse al cerrar.
- Comprueba reproducción, pausa, avance, volumen y pantalla completa.
- Prueba escritorio y móvil, incluida la orientación horizontal.
- Prueba teclado: `Tab` recorre los controles y `Esc` cierra el visor.
- Confirma que filtros, buscador, PDFs y enlaces existentes siguen funcionando.
- Verifica el MP4 completo en el preview de Vercel antes de promoverlo a producción.

## Si se necesita navegación real por diapositivas

El MP4 no conserva hipervínculos, ramificaciones ni el avance manual entre diapositivas. Si esas funciones son indispensables, la siguiente opción es publicar el PPTX en OneDrive/SharePoint e incrustar el iframe oficial generado por PowerPoint para la web. Esto exige permisos públicos correctos y crea una dependencia de Microsoft.

No se recomienda extraer y renderizar el PPTX directamente en el navegador. Reconstruir correctamente videos, posiciones, recortes, tiempos, animaciones y codecs requiere un pipeline de conversión aparte y bastante más mantenimiento.

## Alcance de "sin descargar"

El usuario puede reproducir la presentación sin descargar manualmente un archivo. Sin embargo, ningún reproductor HTML5 público puede impedir por completo que una persona con conocimientos técnicos guarde los bytes que su navegador recibe.
