const F17_FOLDERS = [
  { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y POZOS TIERRA" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA Y FUNCIONAMIENTO" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, BARRIDO 0 A 180 Y 180 A 360 (ALTA RESOLUCION)" },
  { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA, CORROSION" },
  { id: "f17_18", name: "18. Vista panoramica de la estacion por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS Y TIEMPO" },
  { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO EN PUERTA" },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA" },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION Y GESTION DE RESIDUOS" },
  { id: "f17_29", name: "29. Fotos de cambio de bateria", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO Y MEDICION DE BATERIA, CANDADO NUEVO" }
];

const MP_FOLDERS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO, PINZA" },
  { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA, ALTURA TORRE BASE, ROLDANA" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS" },
  { id: "mp_09", name: "9. Validacion de diagrama unifilar de tableros", desc: "DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS" },
  { id: "mp_14", name: "14. Medicion de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST)" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA (ANCHO, LARGO Y ALTURA)" },
  { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, VENTADA, MASTIL, MONOPOLO" },
  { id: "mp_21", name: "21. Aplicacion de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, VIENTOS, GRAMPAS Y GRILLETES" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, MEDIDA DE TUBO, AZIMUT Y ALTURA EJE" },
  { id: "mp_23", name: "23. Vistas de las coordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS (A, B, C, D)" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE HOJAS Y CAMBIO DE CINTILLO EN MIMETIZADO SI APLICA" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video", desc: "FOTOS PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR" },
  { id: "mp_27", name: "27. Altura soportes ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS Y OPERADOR" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, MALEZA 1.5M APROX, ANTES Y DESPUES" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, VERIFICAR FUNCIONAMIENTO" }
];

const FORMATOS_FOLDER = [
  { id: "formatos_mp", name: "Formatos MP (Fotos y PDF)", desc: "Sube fotos o documentos PDF de formatos de mantenimiento preventivo" }
];

let db;
let currentProjectId = null;
let currentProjectName = "";
let currentTab = 1;
let activeSubfolderId = null;
let camStream = null;
let currentGPS = { coords: "GPS buscando...", place: "Ubicando lugar..." };
let watermarkTimer = null;
let lastCapturedBlobUrl = null;
let sessionCaptureCount = 0;

// IndexedDB Setup
const request = indexedDB.open("ReportesSiteDB_v10", 1);
request.onupgradeneeded = (e) => {
  db = e.target.result;
  if (!db.objectStoreNames.contains("projects")) {
    db.createObjectStore("projects", { keyPath: "id" });
  }
  if (!db.objectStoreNames.contains("files")) {
    const fileStore = db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
    fileStore.createIndex("projectId", "projectId", { unique: false });
    fileStore.createIndex("subKey", ["projectId", "subId"], { unique: false });
  }
};
request.onsuccess = (e) => {
  db = e.target.result;
  renderProjects();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// Create Project
function createProject() {
  const input = document.getElementById("newProjectName");
  const name = input.value.trim();
  if (!name) return alert("Escribe un nombre para la carpeta principal.");
  const project = { id: "proj_" + Date.now(), name, createdAt: new Date().toLocaleDateString() };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").add(project);
  tx.oncomplete = () => {
    input.value = "";
    renderProjects();
  };
}

function renameProject(id, oldName) {
  const newName = prompt("Nuevo nombre de la carpeta principal:", oldName);
  if (!newName || !newName.trim()) return;
  const tx = db.transaction("projects", "readwrite");
  const store = tx.objectStore("projects");
  store.get(id).onsuccess = (e) => {
    const proj = e.target.result;
    if (proj) {
      proj.name = newName.trim();
      store.put(proj);
    }
  };
  tx.oncomplete = () => renderProjects();
}

function deleteProject(id, name) {
  if (!confirm(`¿Eliminar la carpeta "${name}" y todas sus fotos?`)) return;
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  const fileStore = tx.objectStore("files");
  const idx = fileStore.index("projectId");
  idx.openCursor(IDBKeyRange.only(id)).onsuccess = (e) => {
    const cursor = e.target.result;
    if (cursor) {
      cursor.delete();
      cursor.continue();
    }
  };
  tx.oncomplete = () => renderProjects();
}

function renderProjects() {
  const list = document.getElementById("projectList");
  const tx = db.transaction(["projects", "files"], "readonly");
  const projStore = tx.objectStore("projects");
  const fileStore = tx.objectStore("files");

  projStore.getAll().onsuccess = (e) => {
    const projects = e.target.result.sort((a, b) => b.id.localeCompare(a.id));
    if (projects.length === 0) {
      list.innerHTML = `<p style="text-align:center;color:#64748b;margin-top:30px;font-size:14px;">No hay carpetas creadas. Escribe el nombre del Site arriba para empezar.</p>`;
      return;
    }
    fileStore.getAll().onsuccess = (fe) => {
      const allFiles = fe.target.result;
      list.innerHTML = projects.map(p => {
        const count = allFiles.filter(f => f.projectId === p.id).length;
        return `
          <div class="project-card">
            <div class="project-top">
              <div class="project-title" onclick="openProject('${p.id}', '${escapeHtml(p.name)}')">📁 ${escapeHtml(p.name)}</div>
              <div style="display:flex;gap:6px;">
                <button class="icon-btn" onclick="renameProject('${p.id}', '${escapeHtml(p.name)}')">Editar</button>
                <button class="icon-btn danger" onclick="deleteProject('${p.id}', '${escapeHtml(p.name)}')">Borrar</button>
              </div>
            </div>
            <div class="project-meta">Creado: ${p.createdAt} • ${count} archivos guardados</div>
            <div class="project-actions">
              <button class="btn-open" onclick="openProject('${p.id}', '${escapeHtml(p.name)}')">Abrir</button>
              <button class="btn-zip" onclick="handleZipAction('${p.id}', '${escapeHtml(p.name)}', 'download')">Descargar ZIP</button>
              <button class="btn-share" onclick="handleZipAction('${p.id}', '${escapeHtml(p.name)}', 'share')">Compartir</button>
            </div>
          </div>
        `;
      }).join("");
    };
  };
}

function openProject(id, name) {
  currentProjectId = id;
  currentProjectName = name;
  document.getElementById("homeView").style.display = "none";
  document.getElementById("projectView").style.display = "block";
  document.getElementById("btnBack").style.display = "inline-block";
  document.getElementById("headerTitle").textContent = name;
  switchTab(1);
}

function goHome() {
  currentProjectId = null;
  document.getElementById("homeView").style.display = "block";
  document.getElementById("projectView").style.display = "none";
  document.getElementById("btnBack").style.display = "none";
  document.getElementById("headerTitle").textContent = "Reportes Site";
  renderProjects();
}

function switchTab(tabNum) {
  currentTab = tabNum;
  [1, 2, 3].forEach(n => {
    document.getElementById("tab" + n).classList.toggle("active", n === tabNum);
  });
  renderSubfolders();
}

function renderSubfolders() {
  const container = document.getElementById("subfolderList");
  let folders = F17_FOLDERS;
  if (currentTab === 2) folders = FORMATOS_FOLDER;
  if (currentTab === 3) folders = MP_FOLDERS;

  const tx = db.transaction("files", "readonly");
  const idx = tx.objectStore("files").index("projectId");
  idx.getAll(IDBKeyRange.only(currentProjectId)).onsuccess = (e) => {
    const projectFiles = e.target.result;
    container.innerHTML = folders.map(f => {
      const files = projectFiles.filter(item => item.subId === f.id);
      const acceptAttr = currentTab === 2 ? "image/*,application/pdf" : "image/*,video/*";
      
      const thumbsHtml = files.length > 0 ? `
        <div class="thumb-grid">
          ${files.map(file => {
            const url = URL.createObjectURL(file.blob);
            if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
              return `
                <div class="thumb-item">
                  <div class="thumb-pdf" onclick="window.open('${url}', '_blank')">📄<br>${escapeHtml(file.name)}</div>
                  <button class="thumb-del" onclick="deleteFile(${file.id})" title="Eliminar">×</button>
                </div>
              `;
            } else if (file.type && file.type.startsWith("video/")) {
              return `
                <div class="thumb-item">
                  <video src="${url}" muted onclick="window.open('${url}', '_blank')"></video>
                  <div class="thumb-name">🎥 ${escapeHtml(file.name)}</div>
                  <button class="thumb-del" onclick="deleteFile(${file.id})" title="Eliminar">×</button>
                </div>
              `;
            } else {
              return `
                <div class="thumb-item">
                  <img src="${url}" alt="${escapeHtml(file.name)}" onclick="openLightbox('${url}', '${escapeHtml(file.name)}')" />
                  <div class="thumb-name">${escapeHtml(file.name)}</div>
                  <button class="thumb-del" onclick="deleteFile(${file.id})" title="Eliminar">×</button>
                </div>
              `;
            }
          }).join("")}
        </div>
      ` : "";

      return `
        <div class="sub-card">
          <div class="sub-header">
            <div class="sub-title">${f.name}</div>
            <span class="badge ${files.length > 0 ? 'filled' : 'empty'}">${files.length > 0 ? files.length + ' archivo(s)' : 'Vacía'}</span>
          </div>
          <div class="sub-desc">${f.desc}</div>
          <div class="sub-btns">
            <button class="btn-cam" onclick="openCamera('${f.id}', '${escapeHtml(f.name)}')">📷 Cámara</button>
            <label class="btn-up" style="text-align:center;">
              📁 Subir Galería
              <input type="file" accept="${acceptAttr}" multiple style="display:none;" onchange="handleFileUpload(event, '${f.id}')" />
            </label>
          </div>
          ${thumbsHtml}
        </div>
      `;
    }).join("");
  };
}

function deleteFile(fileId) {
  if (!confirm("¿Eliminar este archivo?")) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = () => renderSubfolders();
}

function openLightbox(url, name) {
  document.getElementById("lightboxImg").src = url;
  document.getElementById("lightboxName").textContent = name;
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox(e) {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("open");
  }
}

// File Upload + Compression (<1MB except f17_15)
async function handleFileUpload(event, subId) {
  const files = Array.from(event.target.files);
  if (!files.length) return;

  for (const file of files) {
    let finalBlob = file;
    const isHighResFolder = (subId === "f17_15");
    if (file.type.startsWith("image/") && !isHighResFolder && file.size > 1024 * 1024) {
      finalBlob = await compressImageToUnder1MB(file);
    }
    await saveFileToDB(currentProjectId, subId, file.name, finalBlob, file.type);
  }
  event.target.value = "";
  renderSubfolders();
}

function compressImageToUnder1MB(blob) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(blob);
    img.onload = async () => {
      URL.revokeObjectURL(url);
      const canvas = document.getElementById("workCanvas");
      const ctx = canvas.getContext("2d");
      let width = img.width;
      let height = img.height;
      const maxDim = 1920;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      let quality = 0.85;
      let resultBlob = await new Promise(r => canvas.toBlob(r, "image/jpeg", quality));
      while (resultBlob && resultBlob.size > 1024 * 1024 && quality > 0.35) {
        quality -= 0.1;
        resultBlob = await new Promise(r => canvas.toBlob(r, "image/jpeg", quality));
      }
      resolve(resultBlob || blob);
    };
    img.onerror = () => resolve(blob);
    img.src = url;
  });
}

function saveFileToDB(projectId, subId, name, blob, type) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").add({
      projectId,
      subId,
      name,
      blob,
      type: type || blob.type || "image/jpeg",
      createdAt: Date.now()
    });
    tx.oncomplete = () => resolve();
  });
}

// Native Camera with Transparent Watermark Bottom-Right + Mini Preview
async function openCamera(subId, subName) {
  activeSubfolderId = subId;
  sessionCaptureCount = 0;
  lastCapturedBlobUrl = null;
  document.getElementById("camSubTitle").textContent = subName;
  document.getElementById("camPreviewBox").innerHTML = `<span style="color:#64748b;font-size:10px;">Sin foto</span>`;
  document.getElementById("camModal").classList.add("open");

  startGPS();
  updateLiveWatermark();
  watermarkTimer = setInterval(updateLiveWatermark, 1000);

  try {
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    document.getElementById("camVideo").srcObject = camStream;
  } catch (err) {
    alert("No se pudo acceder a la cámara. Verifica los permisos del navegador.");
    closeCamera();
  }
}

function closeCamera() {
  if (camStream) {
    camStream.getTracks().forEach(t => t.stop());
    camStream = null;
  }
  if (watermarkTimer) {
    clearInterval(watermarkTimer);
    watermarkTimer = null;
  }
  document.getElementById("camModal").classList.remove("open");
  renderSubfolders();
}

function startGPS() {
  if (!("geolocation" in navigator)) {
    currentGPS = { coords: "Sin GPS", place: "" };
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      currentGPS.coords = `${lat}, ${lon}`;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16`);
        const data = await res.json();
        if (data && data.address) {
          const a = data.address;
          const parts = [a.road || a.neighbourhood || a.suburb, a.city || a.town || a.village || a.county, a.state].filter(Boolean);
          currentGPS.place = parts.join(", ");
        } else {
          currentGPS.place = "";
        }
      } catch {
        currentGPS.place = "";
      }
      updateLiveWatermark();
    },
    () => {
      currentGPS.coords = "GPS no disponible";
      currentGPS.place = "";
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function getFormattedDateTime() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
}

function getWatermarkLines() {
  const lines = [
    currentProjectName,
    getFormattedDateTime(),
    currentGPS.coords
  ];
  if (currentGPS.place) lines.push(currentGPS.place);
  return lines;
}

function updateLiveWatermark() {
  const el = document.getElementById("camLiveWatermark");
  if (el) {
    el.innerHTML = getWatermarkLines().map(l => escapeHtml(l)).join("<br>");
  }
}

async function capturePhoto() {
  const video = document.getElementById("camVideo");
  if (!video.videoWidth) return;

  const canvas = document.getElementById("workCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Transparent background watermark, pure white text with crisp shadow, bottom-right corner
  const lines = getWatermarkLines();
  const fontSize = Math.max(18, Math.round(canvas.height * 0.024));
  const lineHeight = Math.round(fontSize * 1.32);
  const marginX = Math.round(canvas.width * 0.018);
  const marginY = Math.round(canvas.height * 0.018);

  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0, 0, 0, 0.92)";
  ctx.shadowBlur = Math.max(4, Math.round(fontSize * 0.22));
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  lines.slice().reverse().forEach((line, index) => {
    const y = canvas.height - marginY - (index * lineHeight);
    ctx.fillText(line, canvas.width - marginX, y);
  });

  // Reset shadow
  ctx.shadowColor = "transparent";

  let quality = 0.88;
  let blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", quality));
  const isHighResFolder = (activeSubfolderId === "f17_15");
  while (!isHighResFolder && blob && blob.size > 1024 * 1024 && quality > 0.4) {
    quality -= 0.1;
    blob = await new Promise(r => canvas.toBlob(r, "image/jpeg", quality));
  }

  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}_${String(now.getHours()).padStart(2,"0")}${String(now.getMinutes()).padStart(2,"0")}${String(now.getSeconds()).padStart(2,"0")}`;
  const fileName = `IMG_${stamp}.jpg`;

  await saveFileToDB(currentProjectId, activeSubfolderId, fileName, blob, "image/jpeg");

  sessionCaptureCount++;
  lastCapturedBlobUrl = URL.createObjectURL(blob);
  document.getElementById("camPreviewBox").innerHTML = `
    <img src="${lastCapturedBlobUrl}" alt="Última captura" />
    <span class="cam-count-badge">${sessionCaptureCount}</span>
  `;
}

function previewLastCaptured() {
  if (lastCapturedBlobUrl) {
    openLightbox(lastCapturedBlobUrl, `Foto capturada (${sessionCaptureCount})`);
  }
}

// ZIP Generation & Share Fix
async function buildProjectZipBlob(projectId, projectName) {
  const zip = new JSZip();
  const rootFolder = zip.folder(sanitizeFileName(projectName));

  // Fetch NO_APLICA.png blob
  let noAplicaBlob = null;
  try {
    const resp = await fetch("no_aplica.png");
    if (resp.ok) noAplicaBlob = await resp.blob();
  } catch (e) {}

  const files = await new Promise((resolve) => {
    const tx = db.transaction("files", "readonly");
    tx.objectStore("files").index("projectId").getAll(IDBKeyRange.only(projectId)).onsuccess = (e) => {
      resolve(e.target.result);
    };
  });

  const f17Root = rootFolder.folder("1. F17-CARPETA DE FOTOS");
  for (const sub of F17_FOLDERS) {
    const sf = f17Root.folder(sanitizeFileName(sub.name));
    const subFiles = files.filter(f => f.subId === sub.id);
    if (subFiles.length === 0 && noAplicaBlob) {
      sf.file("NO_APLICA.png", noAplicaBlob);
    } else {
      subFiles.forEach(item => sf.file(item.name, item.blob));
    }
  }

  const fmtRoot = rootFolder.folder("2. FORMATOS MP");
  const fmtFiles = files.filter(f => f.subId === "formatos_mp");
  if (fmtFiles.length === 0 && noAplicaBlob) {
    fmtRoot.file("NO_APLICA.png", noAplicaBlob);
  } else {
    fmtFiles.forEach(item => fmtRoot.file(item.name, item.blob));
  }

  const mpRoot = rootFolder.folder("3. MANTENIMIENTO PREVENTIVO");
  for (const sub of MP_FOLDERS) {
    const sf = mpRoot.folder(sanitizeFileName(sub.name));
    const subFiles = files.filter(f => f.subId === sub.id);
    if (subFiles.length === 0 && noAplicaBlob) {
      sf.file("NO_APLICA.png", noAplicaBlob);
    } else {
      subFiles.forEach(item => sf.file(item.name, item.blob));
    }
  }

  return await zip.generateAsync({ type: "blob", compression: "STORE" });
}

async function handleZipAction(projectId, projectName, mode) {
  const modal = document.getElementById("shareModal");
  const title = document.getElementById("shareModalTitle");
  const desc = document.getElementById("shareModalDesc");
  const actions = document.getElementById("shareModalActions");

  title.textContent = "Generando archivo ZIP...";
  desc.textContent = "Empaquetando todas las carpetas y evidencias, por favor espera...";
  actions.innerHTML = "";
  modal.classList.add("open");

  try {
    const zipBlob = await buildProjectZipBlob(projectId, projectName);
    const zipFileName = `${sanitizeFileName(projectName)}.zip`;

    if (mode === "download") {
      triggerDownload(zipBlob, zipFileName);
      modal.classList.remove("open");
      return;
    }

    // Mode === "share"
    const fileObj = new File([zipBlob], zipFileName, { type: "application/zip" });
    const canNativeShare = navigator.canShare && navigator.canShare({ files: [fileObj] });

    title.textContent = "Archivo ZIP listo";
    desc.textContent = `Archivo "${zipFileName}" (${(zipBlob.size / (1024*1024)).toFixed(2)} MB) preparado.`;

    if (canNativeShare) {
      const shareBtn = document.createElement("button");
      shareBtn.className = "btn-share";
      shareBtn.style.padding = "13px";
      shareBtn.style.fontSize = "15px";
      shareBtn.textContent = "📤 Enviar por WhatsApp / Apps";
      shareBtn.onclick = async () => {
        try {
          await navigator.share({
            files: [fileObj],
            title: zipFileName
          });
          modal.classList.remove("open");
        } catch (err) {
          if (err.name !== "AbortError") {
            alert("Tu navegador restringió el envío directo de ZIP. Se descargará el archivo para que lo adjuntes en WhatsApp.");
            triggerDownload(zipBlob, zipFileName);
            modal.classList.remove("open");
          }
        }
      };
      actions.appendChild(shareBtn);
    } else {
      desc.textContent += " Tu navegador no permite compartir ZIP directo; descárgalo y adjúntalo en WhatsApp.";
    }

    const dlBtn = document.createElement("button");
    dlBtn.className = "btn-zip";
    dlBtn.style.padding = "11px";
    dlBtn.textContent = "⬇️ Guardar en Descargas";
    dlBtn.onclick = () => {
      triggerDownload(zipBlob, zipFileName);
      modal.classList.remove("open");
    };
    actions.appendChild(dlBtn);

    const closeBtn = document.createElement("button");
    closeBtn.className = "icon-btn";
    closeBtn.style.padding = "10px";
    closeBtn.textContent = "Cerrar";
    closeBtn.onclick = () => modal.classList.remove("open");
    actions.appendChild(closeBtn);

  } catch (err) {
    title.textContent = "Error al generar ZIP";
    desc.textContent = err.message || "Intenta nuevamente.";
    actions.innerHTML = `<button class="btn-primary" onclick="document.getElementById('shareModal').classList.remove('open')">Cerrar</button>`;
  }
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function sanitizeFileName(name) {
  return name.replace(/[\\/:*?"<>|]/g, "_").trim() || "Carpeta";
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
