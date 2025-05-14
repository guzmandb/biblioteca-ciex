// Taxonomía jerárquica
const taxonomyData = {
  "Artículos Académicos": ["Revista", "Artículos de Investigación", "Artículos de Opinión", "Artículos de Revisión"],
  "Estadísticas": ["Estadísticas Vitales", "Estadísticas de Mortalidad", "Boletines Estadísticos"] ,
  "Investigaciones CIEX": ["Informes Técnicos", "Encuestas y Datos Primarios", "Proyectos Especiales"],
  "Documentos de Referencia": ["Normatividad Sectorial", "Estándares Internacionales", "Lineamientos Metodológicos"],
  "Divulgación": ["Ponencias", "Presentaciones Públicas", "Videos y Webinars", "Podcast"],
  "Alianzas y Convenios": ["Universidades", "Entidades Gubernamentales", "Asociaciones del sector"],
  "Memorias Institucionales": ["Actas de Comité CIEX", "Historial de Reuniones", "Premios y Reconocimientos"]
};


// Lista de documentos
const documents = [
  {
    title: "CIEX - 1er Ed. Caract del Ecosistema Funerario en Colombia",
    file: "docs/CIEX_Primera_Edicion.pdf",
    cover: "covers/portada_ciex_primera_edicion.jpg",
    categories: ["Informes Técnicos"]
  },
  {
    title: "Radiografía del Sector Funerario en España - Panasef",
    file: "docs/Panasef_Radiografia_Sector_2023.pdf",
    cover: "covers/portada_panasef.png",
    categories: ["Revista"]
  },
  {
    title: "Plan Estadístico Nacional 2023-2027 - DANE",
    file: "docs/DANE_PNE_2023-2027.pdf",
    cover: "covers/portada_dane.png",
    categories: ["Normatividad Sectorial"]
  },
  {
    title: "Boletín técnico Estadísticas Vitales (EEVV) - Defunciones no fetales - DANE",
    file: "docs/CIEX_Boletin_EEVV_DANE_2024.pdf",
    cover: "covers/portada_dane_boletin.png",
    categories: ["Informes Técnicos", "Boletines Estadísticos"]
  },
  {
    title: "Costumbre y hábitos funerarios - Fenalco",
    file: "docs/CIEX_Estudio_HabitosFunerarios_Fenalco_2021.pdf",
    cover: "covers/portada_fenalco.png",
    categories: ["Informes Técnicos"]
  }
];
function clearSelection() {
  document.querySelectorAll('#taxonomyList li, .tag').forEach(el => el.classList.remove('selected'));
}

// Muestra documentos según filtro
function renderDocuments(filter = "") {
  clearSelection();
  const list = document.getElementById('documentList');
  list.innerHTML = "";
  const isParent = taxonomyData.hasOwnProperty(filter);
  const filtered = documents.filter(doc => {
    if (!filter) return true;
    if (isParent) {
      const subs = taxonomyData[filter];
      return doc.categories.includes(filter) || doc.categories.some(c => subs.includes(c));
    }
    return doc.categories.includes(filter);
  });
  filtered.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'document-card';
    card.innerHTML = `
      <img src="${doc.cover}" class="document-cover" alt="${doc.title}">
      <h2>${doc.title}</h2>
      <div class="tags">
        ${doc.categories.map(cat => `<span class="tag" data-cat="${cat}">${cat}</span>`).join('')}
      </div>
      <a href="${doc.file}" target="_blank">📄 Ver Documento</a>
    `;
    // Tags clickeables
    card.querySelectorAll('.tag').forEach(span => {
      span.addEventListener('click', e => {
        e.stopPropagation();
        clearSelection();
        span.classList.add('selected');
        renderDocuments(span.dataset.cat);
        // resaltar li correspondiente
        const li = document.querySelector(`#taxonomyList li[data-name="${span.dataset.cat}"]`);
        if (li) li.classList.add('selected');
      });
    });
    list.appendChild(card);
  });
}

// Construye la barra lateral (acordeón)
function renderTaxonomies() {
  const nav = document.getElementById('taxonomyList');
  // ya tenemos "Inicio"
  Object.entries(taxonomyData).forEach(([parent, subs]) => {
    const li = document.createElement('li');
    li.className = 'taxonomy-parent expanded';
    li.setAttribute('data-name', parent);
    li.textContent = parent;
    // click en padre
    li.addEventListener('click', e => {
      e.stopPropagation();
      clearSelection();
      li.classList.add('selected');
      renderDocuments(parent);
      // alterna colapso
      const childUl = li.querySelector('ul');
      const isExp = li.classList.toggle('expanded');
      childUl.style.display = isExp ? 'block' : 'none';
    });
    // sublist
    if (subs.length) {
      const ul2 = document.createElement('ul');
      subs.forEach(sub => {
        const subLi = document.createElement('li');
        subLi.className = 'taxonomy-child';
        subLi.setAttribute('data-name', sub);
        subLi.textContent = sub;
        // click en hijo
        subLi.addEventListener('click', e => {
          e.stopPropagation();
          clearSelection();
          subLi.classList.add('selected');
          renderDocuments(sub);
        });
        ul2.appendChild(subLi);
      });
      li.appendChild(ul2);
    }
    nav.appendChild(li);
  });
}

// Toggle sidebar en móvil
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});

// Inicio
document.getElementById('homeButton').addEventListener('click', () => {
  clearSelection();
  document.getElementById('homeButton').classList.add('selected');
  renderDocuments();
});
renderTaxonomies();
renderDocuments();