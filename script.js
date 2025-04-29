const documents = [
  {
    title: "CIEX - 1er Ed. Caract del Ecosistema Funerario en Colombia",
    file: "docs/CIEX_Primera_Edicion.pdf",
    cover: "covers/portada_ciex_primera_edicion.jpg",
    categories: ["Investigaciones CIEX", "Informes Técnicos"]
  },
  {
    title: "Panasef - Radiografía del Sector Funerario",
    file: "docs/Panasef_Radiografia_Sector_2023.pdf",
    cover: "covers/portada_panasef.png",
    categories: ["Artículos Académicos", "Revista"]
  },
  {
    title: "Plan Estadístico Nacional 2023-2027",
    file: "docs/DANE_PNE_2023-2027.pdf",
    cover: "covers/portada_dane.png",
    categories: ["Documentos de Referencia​", "Normatividad Sectorial"]
  }
];
function renderDocuments(filterCategory = "") {
  const documentList = document.getElementById('documentList');
  documentList.innerHTML = "";
  const filteredDocuments = documents.filter(doc =>
    !filterCategory || doc.categories.includes(filterCategory)
  );
  filteredDocuments.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'document-card';
    card.innerHTML = `
      <img src="${doc.cover}" alt="Portada" class="document-cover">
      <h2>${doc.title}</h2>
      <div class="tags">
        ${doc.categories.map(cat => `<span class="tag">${cat}</span>`).join('')}
      </div>
      <a href="${doc.file}" target="_blank">📄 Ver Documento</a>
    `;
    documentList.appendChild(card);
  });
}
function renderTaxonomies() {
  const taxonomyList = document.getElementById('taxonomyList');
  const categorySet = new Set();
  documents.forEach(doc => {
    doc.categories.forEach(cat => categorySet.add(cat));
  });
  categorySet.forEach(category => {
    const li = document.createElement('li');
    li.textContent = category;
    li.addEventListener('click', () => renderDocuments(category));
    taxonomyList.appendChild(li);
  });
}
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.document-card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});
renderDocuments();
renderTaxonomies();
