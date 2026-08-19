// 1. Taxonomía jerárquica
const taxonomyData = {
  "Artículos Académicos": ["Revista","Artículos de Investigación","Artículos de Opinión","Artículos de Revisión","Trabajo de Grado"],
  "Estadísticas": ["Estadísticas Vitales","Estadísticas de Mortalidad","Boletines Estadísticos"],
  "Investigaciones CIEX": ["Informes Técnicos","Investigación y Datos Primarios","Proyectos Especiales"],
  "Documentos de Referencia": ["Normatividad Sectorial","Estándares Internacionales","Lineamientos Metodológicos"],
  "Divulgación": ["Ponencias","Presentaciones","Videos","Webinars","Podcast","Metaverso"],
  "Alianzas y Convenios": ["Universidades","Entidades Gubernamentales","Asociaciones del sector"],
  "Memorias Institucionales": ["Actas de Comité CIEX","Historial de Reuniones","Premios y Reconocimientos"]
};

// 2. Documentos de ejemplo (con metadatos)
const documents = [
  {
    title: "Duelos Inevitables: Negación y sufrimiento prolongado",
    file: "docs/SENA_Ponencia_Duelos_Inevitable_Congreso_2026.pdf",
    cover: "covers/portada_sena_duelo_inevitables.jpg",
    categories: ["Duelo"],
    type: "Ponencia",
    topic: "Congreso Cartografía del Duelo",
    year: "2026",
    author: ["SENA", "Luz Restrepo"]
  },
  {
    title: "Trailer - Docuserie: El Mapa del Adiós",
    link: "https://www.youtube.com/watch?v=-_4lXTC5LwU",
    cover: "covers/portada_trailer.jpg",
    categories: ["Rituales Funerario","Docuserie","Trailer"],
    type: "Video",
    topic: "Cinema",
    year: "2026",
    author: "CIEX"
  },
  {
    title: "Link de Interés - Docuserie: El Mapa del Adiós",
    file: "docs/CIEX_Link_Interes_Docuserie.pdf",
    cover: "covers/portada_link_interes.jpg",
    categories: ["Activo de Memoria"],
    type: "Boletín",
    topic: "Ritual Funerario",
    year: "2026",
    author: ["CIEX"]
  },
  {
    title: "Colombia's Funeral Sector - Thanos Magazine",
    file: "docs/CIEX_Revista_Thanos_Sector_Funerario_Colombia.pdf",
    cover: "covers/portada_ciex_thanos.jpg",
    categories: ["Sector Funerario", "Colombia","Thanos","FIAT-IFTA"],
    type: "Revista",
    topic: "Sectorial",
    year: "2026",
    author: ["CIEX","Thanos Magazine","FIAT-IFTA"]
  },
  {
    title: "CIEX - 2da Ed. Diagnóstico Sectorial sobre Percepción del Servicio y Oscilación de Precios Funerarios en Colombia",
    file: "docs/CIEX_Segunda_Edicion.pdf",
    cover: "covers/portada_ciex_segunda_edicion-1-2.jpg",
    categories: ["Informes Técnicos", "Tarifas"],
    type: "Documento",
    topic: "Sectorial",
    year: "2026",
    author: "CIEX"
  },
  {
    title: "Dashboard CIEX - 2026",
    cover: "covers/portada_ciex_dashboard.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiN2ExYmY2M2ItNzIxZC00MDcyLWFkOTAtYjc2ZTYxYzNhNGQ4IiwidCI6IjYwNjZiMGQ0LTRmYzgtNDMzNS05NjdiLWJmZDFmNzQ2Y2I0MSIsImMiOjR9",
    categories: ["Investigación y Datos Primarios"],
    type: "Dashboard",
    topic: "Mortalidad",
    year: "2026",
    author: "CIEX"
  },
  {
    title: "Metaverso CIEX",
    link: "https://www.spatial.io/s/Webinar-CIEX-en-el-Metaverso-6808167d54495458f02595bf?share=4167120326229369913",
    cover: "covers/portada_ciex_metaverso.jpg",
    categories: ["Metaverso"],
    type: "Metaverso",
    topic: "Sectorial",
    year: "2026",
    author: "CIEX"
  },
  {
    title: "Diagnóstico sectorial sobre percepción del servicio y oscilación de precios funerarios en Colombia",
    file: "docs/CIEX_Diagnostico_Servicio_2026.pdf",
    cover: "covers/portada_ciex_precios.jpg",
    categories: ["Presentaciones"],
    type: "Documento",
    topic: "Sectorial",
    year: "2026",
    author: "CIEX"
  },
  {
    title: "Democratizando los datos: El sector funerario conectado por la información",
    file: "docs/CIEX_Democratizacion_Datos_Funebres_2025.pdf",
    cover: "covers/portada_ciex_democratizando.jpg",
    categories: ["Presentaciones"],
    type: "Documento",
    topic: "Empresarial",
    year: "2025",
    author: "CIEX"
  },
  {
    title: "El DATO en la Industria Funeraria de Colombia",
    file: "docs/CIEX_El_Dato_Industria_Funeraria_Colombia_2025.pdf",
    cover: "covers/portada_ciex_dato_funerario.jpg",
    categories: ["Presentaciones"],
    type: "Documento",
    topic: "Estadísticas",
    year: "2025",
    author: "CIEX"
  },
  {
    title: "Dashboard CIEX - 2024",
    cover: "covers/portada_ciex_dashboard.jpg",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNjcyOWIyODYtNGRlZi00ZTU2LWE3MGUtNjNmNTNjNDZhMDZmIiwidCI6IjYwNjZiMGQ0LTRmYzgtNDMzNS05NjdiLWJmZDFmNzQ2Y2I0MSIsImMiOjR9",
    categories: ["Investigación y Datos Primarios"],
    type: "Dashboard",
    topic: "Mortalidad",
    year: "2024",
    author: "CIEX"
  },
  {
    title: "CIEX - 1er Ed. Caract del Ecosistema Funerario en Colombia",
    file: "docs/CIEX_Primera_Edicion.pdf",
    cover: "covers/portada_ciex_primera_edicion.jpg",
    categories: ["Informes Técnicos"],
    type: "Documento",
    topic: "Sectorial",
    year: "2024",
    author: "CIEX"
  },
  {
    title: "Boletín Estadísticas Vitales - DANE 2024",
    file: "docs/CIEX_Boletin_EEVV_DANE_2024pr.pdf",
    cover: "covers/portada_dane_boletin24pr.jpg",
    categories: ["Boletines Estadísticos"],
    type: "Documento",
    topic: "Mortalidad",
    year: "2025",
    author: "DANE"
  },
  {
    title: "Radiografía del Sector Funerario en España - Panasef",
    file: "docs/Panasef_Radiografia_Sector_2023.pdf",
    cover: "covers/portada_panasef.jpg",
    categories: ["Revista"],
    type: "Documento",
    topic: "Sectorial",
    year: "2023",
    author: "Panasef"
  },
  {
    title: "Plan Estadístico Nacional - DANE 2023/2027",
    file: "docs/DANE_PNE_2023-2027.pdf",
    cover: "covers/portada_dane.jpg",
    categories: ["Normatividad Sectorial"],
    type: "Documento",
    topic: "Estadísticas",
    year: "2023",
    author: "DANE"
  },
  {
    title: "Costumbre y hábitos funerarios - Fenalco",
    file: "docs/CIEX_Estudio_HabitosFunerarios_Fenalco_2021.pdf",
    cover: "covers/portada_fenalco.jpg",
    categories: ["Artículos de Investigación"],
    type: "Documento",
    topic: "Ritos",
    year: "2021",
    author: "Fenalco"
  },
  {
    title: "Boletín Estadísticas Vitales - DANE 2023/2024-I",
    file: "docs/CIEX_Boletin_EEVV_DANE_2024.pdf",
    cover: "covers/portada_dane_boletin.jpg",
    categories: ["Boletines Estadísticos"],
    type: "Documento",
    topic: "Mortalidad",
    year: "2024",
    author: "DANE"
  },
  {
    title: "Capital intelectual para el Desarrollo Económico del Sector Funerario de Cúcuta",
    file: "docs/CIEX_Articulo_GestionCapitalIntelectual_UFPS_2024.pdf",
    cover: "covers/portada_gestion_conocimiento.jpg",
    categories: ["Artículos Académicos","Universidades"],
    type: "Documento",
    topic: "Economía",
    year: "2024",
    author: "Liliana Bermeo-Majin"
  },
  {
    title: "Evaluación del Control Interno en el Recaudo de Cartera en el Sector Funerario",
    file: "docs/CIEX_TrabajoGrado_ControlRecaudoCartera_UCC_2022.pdf",
    cover: "covers/portada_recaudo_cartera.jpg",
    categories: ["Artículos Académicos","Trabajo de Grado"],
    type: "Documento",
    topic: "Cartera",
    year: "2022",
    author: "Castañeda Vargas et al"
  }
];

// Visor interno de presentaciones exportadas como video.
// Cada registro compatible usa: viewer: { kind: "video", sources: [...] }.
const mediaViewer = document.getElementById('mediaViewer');
const mediaViewerDialog = mediaViewer.querySelector('.media-viewer__dialog');
const mediaViewerTitle = document.getElementById('mediaViewerTitle');
const mediaViewerVideo = document.getElementById('mediaViewerVideo');
const mediaViewerStatus = document.getElementById('mediaViewerStatus');
const mediaViewerError = document.getElementById('mediaViewerError');
const mediaViewerClose = document.getElementById('mediaViewerClose');
const mediaViewerFullscreen = document.getElementById('mediaViewerFullscreen');
const mediaViewerFallback = document.getElementById('mediaViewerFallback');
let mediaViewerPreviousFocus = null;
let failedViewerSources = 0;
let mediaViewerLoadId = 0;

function isVideoViewerDocument(doc) {
  return doc.viewer && doc.viewer.kind === 'video';
}

function resolveViewerUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return '';

  try {
    const url = new URL(value, document.baseURI);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
  } catch (_) {
    return '';
  }
}

function getViewerSources(config) {
  const candidates = [];

  if (config.src) {
    candidates.push({ src: config.src, type: config.type });
  }
  if (Array.isArray(config.sources)) {
    candidates.push(...config.sources);
  }

  return candidates
    .map(source => typeof source === 'string' ? { src: source } : source)
    .filter(source => source && typeof source.src === 'string')
    .map(source => ({
      src: resolveViewerUrl(source.src),
      type: typeof source.type === 'string' ? source.type : ''
    }))
    .filter(source => source.src);
}

function getViewerAspectRatio(value) {
  const normalized = String(value || '16/9').trim().replace(':', '/');
  const match = normalized.match(/^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);

  if (!match) return { css: '16 / 9', number: 16 / 9 };

  const width = Number(match[1]);
  const height = Number(match[2]);
  const ratio = width / height;

  if (!Number.isFinite(ratio) || ratio < .25 || ratio > 4) {
    return { css: '16 / 9', number: 16 / 9 };
  }

  return { css: `${width} / ${height}`, number: ratio };
}

function clearMediaViewerVideo() {
  mediaViewerVideo.pause();
  mediaViewerVideo.removeAttribute('poster');
  mediaViewerVideo.removeAttribute('src');
  mediaViewerVideo.replaceChildren();
  mediaViewerVideo.load();
  mediaViewerVideo.hidden = true;
}

function showMediaViewerError() {
  if (mediaViewer.hidden) return;

  mediaViewerStatus.hidden = true;
  mediaViewerVideo.hidden = true;
  mediaViewerError.hidden = false;
  mediaViewerFallback.hidden = !mediaViewerFallback.hasAttribute('href');
}

function openMediaViewer(doc) {
  if (!isVideoViewerDocument(doc)) return;

  const config = doc.viewer;
  const sources = getViewerSources(config);
  const aspectRatio = getViewerAspectRatio(config.aspectRatio);
  const loadId = ++mediaViewerLoadId;

  mediaViewerPreviousFocus = document.activeElement;
  mediaViewerTitle.textContent = doc.title;
  mediaViewerDialog.style.setProperty('--viewer-aspect-ratio', aspectRatio.css);
  mediaViewerDialog.style.setProperty('--viewer-aspect-ratio-number', aspectRatio.number);
  mediaViewerError.hidden = true;
  mediaViewerStatus.hidden = false;
  mediaViewerFallback.hidden = true;
  mediaViewerFallback.removeAttribute('href');
  failedViewerSources = 0;
  clearMediaViewerVideo();

  mediaViewer.hidden = false;
  mediaViewer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('media-viewer-open');

  if (!sources.length) {
    showMediaViewerError();
    mediaViewerClose.focus();
    return;
  }

  const poster = resolveViewerUrl(config.poster || doc.cover);
  if (poster) mediaViewerVideo.poster = poster;

  sources.forEach(source => {
    const sourceElement = document.createElement('source');
    sourceElement.src = source.src;
    if (source.type) sourceElement.type = source.type;
    sourceElement.addEventListener('error', () => {
      if (loadId !== mediaViewerLoadId) return;

      failedViewerSources += 1;
      if (failedViewerSources >= sources.length && mediaViewerVideo.readyState === 0) {
        showMediaViewerError();
      }
    });
    mediaViewerVideo.appendChild(sourceElement);
  });

  if (Array.isArray(config.captions)) {
    config.captions.forEach(caption => {
      const src = resolveViewerUrl(caption && caption.src);
      if (!src || !caption.srclang || !caption.label) return;

      const track = document.createElement('track');
      track.kind = caption.kind || 'captions';
      track.src = src;
      track.srclang = caption.srclang;
      track.label = caption.label;
      track.default = Boolean(caption.default);
      mediaViewerVideo.appendChild(track);
    });
  }

  mediaViewerFallback.href = sources[0].src;
  mediaViewerVideo.preload = config.preload === 'auto' ? 'auto' : 'metadata';
  mediaViewerVideo.hidden = false;
  mediaViewerVideo.load();
  mediaViewerClose.focus();

  if (config.autoplay === true) {
    mediaViewerVideo.play().catch(() => {
      // El navegador puede bloquear autoplay; los controles siguen disponibles.
    });
  }
}

function closeMediaViewer() {
  if (mediaViewer.hidden) return;

  mediaViewerLoadId += 1;

  if (document.fullscreenElement === mediaViewerDialog && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }

  clearMediaViewerVideo();
  mediaViewer.hidden = true;
  mediaViewer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('media-viewer-open');

  if (mediaViewerPreviousFocus && typeof mediaViewerPreviousFocus.focus === 'function') {
    mediaViewerPreviousFocus.focus();
  }
}

async function toggleMediaViewerFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (mediaViewerDialog.requestFullscreen) {
      await mediaViewerDialog.requestFullscreen();
    } else if (typeof mediaViewerVideo.webkitEnterFullscreen === 'function') {
      mediaViewerVideo.webkitEnterFullscreen();
    }
  } catch (_) {
    // Fullscreen puede estar restringido por el navegador o el dispositivo.
  }
}

function trapMediaViewerFocus(event) {
  if (event.key !== 'Tab') return;

  const focusable = Array.from(mediaViewerDialog.querySelectorAll(
    'button:not([disabled]), a[href]:not([hidden]), video[controls]'
  )).filter(element => !element.hidden);

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

mediaViewerVideo.addEventListener('loadedmetadata', () => {
  mediaViewerStatus.hidden = true;
  mediaViewerError.hidden = true;
});
mediaViewerVideo.addEventListener('canplay', () => {
  mediaViewerStatus.hidden = true;
});
mediaViewerVideo.addEventListener('error', showMediaViewerError);
mediaViewerClose.addEventListener('click', closeMediaViewer);
mediaViewerFullscreen.addEventListener('click', toggleMediaViewerFullscreen);
mediaViewer.querySelector('[data-viewer-close]').addEventListener('click', closeMediaViewer);
mediaViewer.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMediaViewer();
  trapMediaViewerFocus(event);
});
document.addEventListener('fullscreenchange', () => {
  mediaViewerFullscreen.textContent = document.fullscreenElement
    ? 'Salir de pantalla completa'
    : 'Pantalla completa';
});

// Estado de filtros
let currentTaxonomy = "";
let selectedTypes = new Set();
let selectedTopics = new Set();
let selectedYear = "Todos";
let selectedAuthor = "Todos";

// estado de búsqueda
let searchTerm = '';

// Limpia selección visual
function clearSelectionVisual() {
  document.querySelectorAll('#taxonomyList li, .tag').forEach(el => el.classList.remove('selected'));
}

// Aplica todos los filtros y taxonomía
function renderDocuments() {
  clearSelectionVisual();
  const list = document.getElementById('documentList');
  list.innerHTML = "";    // limpia SOLO las cards

  const filtered = documents.filter(doc => {
    // búsqueda por título con normalización
    if (searchTerm) {
      const titleNorm = normalizeText(doc.title);
      if (!titleNorm.includes(searchTerm)) return false;
    }
    // Filtrado taxonomía
    if (currentTaxonomy) {
      const isParent = taxonomyData[currentTaxonomy];
      if (isParent) {
        if (doc.categories.includes(currentTaxonomy) === false &&
            !doc.categories.some(c=> isParent.includes(c))) return false;
      } else if (!doc.categories.includes(currentTaxonomy)) {
        return false;
      }
    }
    // Tipo
    if (selectedTypes.size && !selectedTypes.has(doc.type)) return false;
    // Tema
    if (selectedTopics.size && !selectedTopics.has(doc.topic)) return false;
    // Año
    if (selectedYear !== "Todos" && doc.year !== selectedYear) return false;
    // Autor
    if (selectedAuthor !== "Todos" && doc.author !== selectedAuthor) return false;
    return true;
  });

  updateFilterUI(filtered);
  renderTaxonomies(filtered);

  filtered.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'document-card';
    const hasInlineViewer = isVideoViewerDocument(doc);
    const docUrl = doc.file || doc.link || '#';
    const viewerActionLabel = doc.viewer && doc.viewer.label
      ? doc.viewer.label
      : (doc.type === 'Video' ? 'Ver video' : 'Ver presentación');
    const coverContent = hasInlineViewer
      ? `<button type="button" class="document-cover-trigger" data-viewer-open aria-label="${viewerActionLabel}: ${doc.title}"><img src="${doc.cover}" class="document-cover" alt="${doc.title}" loading="lazy" width="240" height="140"></button>`
      : `<a href="${docUrl}" target="_blank" rel="noopener"><img src="${doc.cover}" class="document-cover" alt="${doc.title}" loading="lazy" width="240" height="140"></a>`;
    const titleContent = hasInlineViewer
      ? `<button type="button" class="document-title-trigger" data-viewer-open>${doc.title}</button>`
      : `<a href="${docUrl}" target="_blank" rel="noopener" style="color: inherit; text-decoration: none; display: block;">${doc.title}</a>`;
    card.innerHTML = `
      ${coverContent}
      <h2>${titleContent}</h2>
      <div class="tags">
        ${doc.categories.map(cat=>`<span class="tag" data-cat="${cat}">${cat}</span>`).join('')}
        <span class="tag" data-topic="${doc.topic}">${doc.topic}</span>
        <span class="tag" data-year="${doc.year}">${doc.year}</span>
      </div>
      <div class="actions">
        ${hasInlineViewer ? `<button type="button" data-viewer-open>&#9654; ${viewerActionLabel}</button>` : ``}
        ${doc.file ? `<a href="${doc.file}" target="_blank" rel="noopener">📄 Ver Documento</a>` : ``}
        ${doc.link ? `<a href="${doc.link}" target="_blank" rel="noopener" class="dashboard-link">🔗 Ir a Link</a>` : ``}
      </div>
    `;

    card.querySelectorAll('[data-viewer-open]').forEach(button => {
      button.addEventListener('click', () => openMediaViewer(doc));
    });

    // Click en cada tag: cat → taxonomy, topic → tema, year → año
    card.querySelectorAll('.tag').forEach(span => {
      span.addEventListener('click', e => {
        e.stopPropagation();
        if (span.dataset.cat) {
          currentTaxonomy = span.dataset.cat;
        } else if (span.dataset.topic) {
          selectedTopics.clear();
          selectedTopics.add(span.dataset.topic);
        } else if (span.dataset.year) {
          selectedYear = span.dataset.year;
        }
        renderDocuments();
      });
    });

    list.appendChild(card);
  });
}

// Nueva función
function updateFilterUI(docs) {
  // Tipo
  document.querySelectorAll('#typeFilters label').forEach(lbl => {
    const val = lbl.querySelector('input').value;
    lbl.style.display = docs.some(d => d.type === val) ? '' : 'none';
  });

  // Tema
  document.querySelectorAll('#topicFilters label').forEach(lbl => {
    const val = lbl.querySelector('input').value;
    lbl.style.display = docs.some(d => d.topic === val) ? '' : 'none';
  });

  // Año
  const ys = document.getElementById('yearSelect');
  Array.from(ys.options).forEach(opt => {
    if (opt.value === 'Todos') return;
    opt.style.display = docs.some(d => d.year === opt.value) ? '' : 'none';
  });
  if (!docs.some(d => d.year === ys.value)) {
    ys.value = 'Todos';
    selectedYear = 'Todos';
  }

  // Autor
  const au = document.getElementById('authorSelect');
  Array.from(au.options).forEach(opt => {
    if (opt.value === 'Todos') return;
    opt.style.display = docs.some(d => d.author === opt.value) ? '' : 'none';
  });
  if (!docs.some(d => d.author === au.value)) {
    au.value = 'Todos';
    selectedAuthor = 'Todos';
  }
}

// Construye filtro de tipos, temas, años y autores
function initFilters() {
  const types = [...new Set(documents.map(d=>d.type))];
  const topics = [...new Set(documents.map(d=>d.topic))];
  const years = [...new Set(documents.map(d=>d.year))].sort();
  const authors = [...new Set(documents.map(d=>d.author))];

  const tf = document.getElementById('typeFilters');
  types.forEach(t=>{
    const lbl = document.createElement('label');
    lbl.innerHTML = `<input type="checkbox" value="${t}"> ${t}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) selectedTypes.add(t);
      else selectedTypes.delete(t);
      renderDocuments();
    });
    tf.appendChild(lbl);
  });

  const topf = document.getElementById('topicFilters');
  topics.forEach(t=>{
    const lbl = document.createElement('label');
    lbl.innerHTML = `<input type="checkbox" value="${t}"> ${t}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) selectedTopics.add(t);
      else selectedTopics.delete(t);
      renderDocuments();
    });
    topf.appendChild(lbl);
  });

  const ys = document.getElementById('yearSelect');
  years.forEach(y=>{
    const opt = document.createElement('option');
    opt.value = y; opt.textContent = y;
    ys.appendChild(opt);
  });
  ys.addEventListener('change', e=>{
    selectedYear = e.target.value; renderDocuments();
  });

  const au = document.getElementById('authorSelect');
  authors.forEach(a=>{
    const opt = document.createElement('option');
    opt.value = a; opt.textContent = a;
    au.appendChild(opt);
  });
  au.addEventListener('change', e=>{
    selectedAuthor = e.target.value; renderDocuments();
  });
}

// Construye la barra lateral (acordeón)
function renderTaxonomies(filteredDocs = documents) {
  const nav = document.getElementById('taxonomyList');
  // "Todas" con badge global
  nav.innerHTML = `
    <li id="homeButton" class="taxonomy-home selected">
      Todas <span class="badge">${filteredDocs.length}</span>
    </li>
  `;

  Object.entries(taxonomyData).forEach(([parent, subs]) => {
    // cuenta docs para padre (directos o en sus hijos)
    const countParent = filteredDocs.filter(doc => 
      doc.categories.includes(parent) ||
      subs.some(sub => doc.categories.includes(sub))
    ).length;
    if (countParent === 0) return; // omitir padres vacíos

    const li = document.createElement('li');
    li.className = 'taxonomy-parent expanded';
    li.setAttribute('data-name', parent);

    // toggle arrow solo si hay hijos con docs
    const validSubs = subs.filter(sub =>
      filteredDocs.some(doc => doc.categories.includes(sub))
    );
    if (validSubs.length) {
      const toggle = document.createElement('button');
      toggle.className = 'toggle-arrow';
      toggle.textContent = '▶';
      toggle.addEventListener('click', e => {
        e.stopPropagation();
        li.classList.toggle('expanded');
        const childUl = li.querySelector('ul');
        if (childUl) {
          childUl.style.display = li.classList.contains('expanded') ? 'block' : 'none';
        }
      });
      li.appendChild(toggle);
    }

    // label padre
    const label = document.createElement('span');
    label.textContent = parent;
    label.addEventListener('click', e => {
      e.stopPropagation();
      currentTaxonomy = parent;
      renderDocuments();
    });
    li.appendChild(label);

    // badge padre
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = countParent;
    li.appendChild(badge);

    // hijos con badge
    if (validSubs.length) {
      const childUl = document.createElement('ul');
      validSubs.forEach(sub => {
        const subCount = filteredDocs.filter(doc => doc.categories.includes(sub)).length;
        if (subCount === 0) return;

        const subLi = document.createElement('li');
        subLi.className = 'taxonomy-child';
        subLi.setAttribute('data-name', sub);

        const subLabel = document.createElement('span');
        subLabel.textContent = sub;
        subLabel.addEventListener('click', e => {
          e.stopPropagation();
          currentTaxonomy = sub;
          renderDocuments();
        });
        subLi.appendChild(subLabel);

        const subBadge = document.createElement('span');
        subBadge.className = 'badge';
        subBadge.textContent = subCount;
        subLi.appendChild(subBadge);

        childUl.appendChild(subLi);
      });
      li.appendChild(childUl);
    }

    nav.appendChild(li);
  });
}


//Limpio de filtros
function clearAllFilters() {
  currentTaxonomy = "";
  selectedTypes.clear();
  selectedTopics.clear();
  selectedYear = "Todos";
  selectedAuthor = "Todos";
  // UI:
  document.getElementById("yearSelect").value = "Todos";
  document.getElementById("authorSelect").value = "Todos";
  document.querySelectorAll("#typeFilters input, #topicFilters input")
  .forEach(cb => cb.checked = false);
  clearSelectionVisual();
  document.getElementById("homeButton").classList.add("selected");
}

// Hook para hamburger mobile
const sidebarEl = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  sidebarEl.classList.add('open');
  sidebarOverlay.classList.add('active');
}
function closeSidebar() {
  sidebarEl.classList.remove('open');
  sidebarOverlay.classList.remove('active');
}

document.getElementById('menuToggle')
.addEventListener('click', () => {
  sidebarEl.classList.contains('open') ? closeSidebar() : openSidebar();
});

sidebarOverlay.addEventListener('click', closeSidebar);

// Hook para el nuevo botón
document.getElementById('clearFiltersBtn')
.addEventListener('click', ()=> {
  clearAllFilters();
  renderDocuments();
});

document.addEventListener('click', e => {
  const toggle  = document.getElementById('menuToggle');
  if (sidebarEl.classList.contains('open') &&
      !sidebarEl.contains(e.target) &&
      !toggle.contains(e.target) &&
      !sidebarOverlay.contains(e.target)) {
    closeSidebar();
  }
});

// helper para quitar tildes y pasar a minúsculas
function normalizeText(str) {
  return str
    .normalize('NFD')             // separa diacríticos
    .replace(/[\u0300-\u036f]/g, '') // quita tildes
    .toLowerCase();
}

// listener del buscador
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchToggle = document.getElementById('searchToggle');
const searchWrapper = document.querySelector('.search-wrapper');

searchInput.addEventListener('input', e => {
  searchTerm = normalizeText(e.target.value.trim());
  renderDocuments();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  renderDocuments();
  searchInput.focus();
});

// Lupa móvil: abre / cierra el campo de búsqueda
searchToggle.addEventListener('click', () => {
  const isOpen = searchWrapper.classList.toggle('open');
  if (isOpen) {
    setTimeout(() => searchInput.focus(), 50);
  } else {
    searchInput.value = '';
    searchTerm = '';
    renderDocuments();
  }
});

// Cierra el buscador móvil al perder foco si está vacío
searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    if (!searchInput.value.trim()) {
      searchWrapper.classList.remove('open');
    }
  }, 150);
});

// inicialización
initFilters();
renderTaxonomies();
renderDocuments();

// ========== Smart sticky header + Scroll to top ==========
(() => {
  const header = document.querySelector('header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  let lastScrollY = 0;
  const SCROLL_THRESHOLD = 10; // píxeles mínimos de cambio para reaccionar

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    // Header: ocultar al bajar, mostrar al subir
    if (Math.abs(currentY - lastScrollY) > SCROLL_THRESHOLD) {
      if (currentY > lastScrollY && currentY > 80) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      lastScrollY = currentY;
    }

    // Botón scroll-to-top: visible después de 300px
    if (currentY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
