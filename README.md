# Biblioteca CIEX

Biblioteca estática para publicar documentos de investigación, enlaces, dashboards y presentaciones audiovisuales.

El catálogo se administra en `script.js`; los documentos viven en `docs/` y las portadas en `covers/`.

## Presentaciones con video

El sitio incluye un visor HTML5 para reproducir, sin descarga previa, presentaciones exportadas como MP4/WebM. Consulta [PRESENTACIONES.md](PRESENTACIONES.md) para preparar el archivo, alojarlo y agregarlo al catálogo.

## Vista local

Sirve la carpeta mediante HTTP; no abras `index.html` directamente como `file://`.

```powershell
python -m http.server 8000
```

Luego abre `http://localhost:8000/`.
