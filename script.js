// 1. Taxonomía jerárquica
const taxonomyData = {
  "Artículos Académicos": ["Revista","Artículos de Investigación","Artículos de Opinión","Artículos de Revisión"],
  "Estadísticas": ["Estadísticas Vitales","Estadísticas de Mortalidad","Boletines Estadísticos"],
  "Investigaciones CIEX": ["Informes Técnicos","Investigación y Datos Primarios","Proyectos Especiales"],
  "Documentos de Referencia": ["Normatividad Sectorial","Estándares Internacionales","Lineamientos Metodológicos"],
  "Divulgación": ["Ponencias","Presentaciones Públicas","Videos y Webinars","Podcast"],
  "Alianzas y Convenios": ["Universidades","Entidades Gubernamentales","Asociaciones del sector"],
  "Memorias Institucionales": ["Actas de Comité CIEX","Historial de Reuniones","Premios y Reconocimientos"]
};

// 2. Documentos de ejemplo (con metadatos)
const documents = [
  {
    title: "Dashboard CIEX",
    cover: "covers/portada_ciex_dashboard.png",
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
    year: "2021",
    author: "CIEX"
  },
  {
    title: "Boletín Estadísticas Vitales - DANE 2024",
    file: "docs/CIEX_Boletin_EEVV_DANE_2024pr.pdf",
    cover: "covers/portada_dane_boletin24pr.png",
    categories: ["Boletines Estadísticos"],
    type: "Documento",
    topic: "Mortalidad",
    year: "2025",
    author: "DANE"
  },
  {
    title: "Radiografía del Sector Funerario en España - Panasef",
    file: "docs/Panasef_Radiografia_Sector_2023.pdf",
    cover: "covers/portada_panasef.png",
    categories: ["Revista"],
    type: "Documento",
    topic: "Sectorial",
    year: "2023",
    author: "Panasef"
  },
  {
    title: "Plan Estadístico Nacional - DANE 2023/2027",
    file: "docs/DANE_PNE_2023-2027.pdf",
    cover: "covers/portada_dane.png",
    categories: ["Normatividad Sectorial"],
    type: "Documento",
    topic: "Estadísticas",
    year: "2023",
    author: "DANE"
  },
  {
    title: "Costumbre y hábitos funerarios - Fenalco",
    file: "docs/CIEX_Estudio_HabitosFunerarios_Fenalco_2021.pdf",
    cover: "covers/portada_fenalco (2).png",
    categories: ["Artículos de Investigación"],
    type: "Documento",
    topic: "Ritos",
    year: "2021",
    author: "Fenalco"
  },
  {
    title: "Boletín Estadísticas Vitales - DANE 2023/2024-I",
    file: "docs/CIEX_Boletin_EEVV_DANE_2024.pdf",
    cover: "covers/portada_dane_boletin.png",
    categories: ["Boletines Estadísticos"],
    type: "Documento",
    topic: "Mortalidad",
    year: "2024",
    author: "DANE"
  }
];

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
  // document.querySelector(`#taxonomyList li[data-name="${currentTaxonomy}"]`)?.classList.add('selected');
  const list = document.getElementById('documentList');
  list.innerHTML = "";
  const filtered = documents
    .filter(doc => {
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

  // 1) Actualiza la UI de los filtros según 'filtered'
  updateFilterUI(filtered);

  // 2) Renderiza las taxonomías y tarjetas como ya lo haces
  renderTaxonomies(filtered);
  list.innerHTML = '';
  filtered.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'document-card';
    card.innerHTML = `
      <img src="${doc.cover}" class="document-cover" alt="${doc.title}">
      <h2>${doc.title}</h2>
      <div class="tags">
        ${doc.categories.map(cat=>`<span class="tag" data-cat="${cat}">${cat}</span>`).join('')}
        <span class="tag" data-topic="${doc.topic}">${doc.topic}</span>
        <span class="tag" data-year="${doc.year}">${doc.year}</span>
      </div>
      <div class="actions">
        ${doc.file ? `<a href="${doc.file}" target="_blank">📄 Ver Documento</a>` : ``}
        ${doc.link ? `<a href="${doc.link}" target="_blank" class="dashboard-link">🔗 Ver Dashboard</a>` : ``}
      </div>
    `;

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

    document.getElementById('documentList').appendChild(card);
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
document.getElementById('menuToggle')
.addEventListener('click', ()=> {
  document.querySelector('.sidebar').classList.toggle('open');
});

// Hook para el nuevo botón
document.getElementById('clearFiltersBtn')
.addEventListener('click', ()=> {
  clearAllFilters();
  renderDocuments();
});

// helper para quitar tildes y pasar a minúsculas
function normalizeText(str) {
  return str
    .normalize('NFD')             // separa diacríticos
    .replace(/[\u0300-\u036f]/g, '') // quita tildes
    .toLowerCase();
}

// listener del buscador
document.getElementById('searchInput').addEventListener('input', e => {
  searchTerm = normalizeText(e.target.value.trim());
  renderDocuments();
});

// inicialización
initFilters();
renderTaxonomies();
renderDocuments();
