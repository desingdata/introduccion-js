/* ═══════════════════════════════════════════════════════
     MAPA GLOBAL para la demo interactiva
     Map: colección de pares clave-valor, iterable, de tamaño dinámico
  ═══════════════════════════════════════════════════════ */
  const mapaDemo = new Map();

  // Datos de ejemplo precargados para la demo de iteración
  const mapaIter = new Map([
    ['lenguaje', 'JavaScript'],
    ['año',      '1995'],
    ['motor',    'V8'],
    ['paradigma','multiparadigma']
  ]);

  /* ── Renderiza las "tarjetas" del visualizador ── */
  function renderVisual() {
    const visual = document.getElementById('mapVisual');
    if (mapaDemo.size === 0) {
      visual.innerHTML = '<span class="empty-state">// El mapa está vacío. Agrega entradas abajo ↓</span>';
      return;
    }
    visual.innerHTML = '';
    // .entries() → iterador de [clave, valor]
    for (const [k, v] of mapaDemo.entries()) {
      const card = document.createElement('div');
      card.className = 'entry-card';
      card.innerHTML = `<span class="entry-key">${escH(k)}</span>
                        <span class="arrow">→</span>
                        <span class="entry-val">${escH(v)}</span>`;
      visual.appendChild(card);
    }
  }

  /* ── Escapa HTML para evitar inyección ── */
  function escH(s) {
    return String(s).replace(/[&<>"]/g, c =>
      ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  }

  /* ── Agrega al log de salida ── */
  function log(html) {
    const out = document.getElementById('output');
    const prev = out.innerHTML.includes('aparecerán') ? '' : out.innerHTML + '\n';
    out.innerHTML = prev + html;
    out.scrollTop = out.scrollHeight;
  }

  /* ── OPERACIÓN: set(clave, valor) ──
     Agrega o actualiza una entrada en el Map */
  function opSet() {
    const k = document.getElementById('inKey').value.trim();
    const v = document.getElementById('inVal').value.trim();
    if (!k) { log('<span class="out-info">// Error: la clave no puede estar vacía</span>'); return; }
    const updated = mapaDemo.has(k);
    mapaDemo.set(k, v);
    log(`<span class="out-op">map.set(</span><span class="out-key">'${escH(k)}'</span><span class="out-op">, </span><span class="out-val">'${escH(v)}'</span><span class="out-op">)</span>  <span class="out-info">// ${updated ? 'actualizado':'agregado'} · size=${mapaDemo.size}</span>`);
    renderVisual();
  }

  /* ── OPERACIÓN: get(clave) ──
     Retorna el valor de la clave o undefined si no existe */
  function opGet() {
    const k = document.getElementById('inKey').value.trim();
    if (!k) { log('<span class="out-info">// Error: escribe una clave</span>'); return; }
    const val = mapaDemo.get(k);
    if (val === undefined) {
      log(`<span class="out-op">map.get(</span><span class="out-key">'${escH(k)}'</span><span class="out-op">)</span>  → <span class="out-info">undefined (clave no encontrada)</span>`);
    } else {
      log(`<span class="out-op">map.get(</span><span class="out-key">'${escH(k)}'</span><span class="out-op">)</span>  → <span class="out-val">'${escH(val)}'</span>`);
    }
  }

  /* ── OPERACIÓN: delete(clave) ──
     Elimina la entrada; retorna true si existía */
  function opDelete() {
    const k = document.getElementById('inKey').value.trim();
    if (!k) { log('<span class="out-info">// Error: escribe una clave</span>'); return; }
    const ok = mapaDemo.delete(k);
    log(`<span class="out-op">map.delete(</span><span class="out-key">'${escH(k)}'</span><span class="out-op">)</span>  → <span class="${ok?'out-val':'out-info'}">${ok}</span>  <span class="out-info">// size=${mapaDemo.size}</span>`);
    renderVisual();
  }

  /* ── OPERACIÓN: has(clave) ──
     Comprueba si la clave existe (boolean) */
  function opHas() {
    const k = document.getElementById('inKey').value.trim();
    if (!k) { log('<span class="out-info">// Error: escribe una clave</span>'); return; }
    const ok = mapaDemo.has(k);
    log(`<span class="out-op">map.has(</span><span class="out-key">'${escH(k)}'</span><span class="out-op">)</span>  → <span class="${ok?'out-val':'out-info'}">${ok}</span>`);
  }

  /* ── OPERACIÓN: clear() ──
     Elimina TODAS las entradas del Map */
  function opClear() {
    mapaDemo.clear();
    log(`<span class="out-op">map.clear()</span>  <span class="out-info">// Map vaciado · size=${mapaDemo.size}</span>`);
    renderVisual();
  }

  /* ── DEMO ITERACIÓN ──
     Muestra diferentes formas de recorrer un Map */
  function runIteration() {
    const method = document.getElementById('iterMethod').value;
    const out    = document.getElementById('iterOutput');
    let result   = '';

    if (method === 'forof') {
      // for...of con destructuring de [clave, valor]
      for (const [k, v] of mapaIter) {
        result += `<span class="out-key">'${escH(k)}'</span> <span class="out-op">→</span> <span class="out-val">'${escH(v)}'</span>\n`;
      }
    } else if (method === 'keys') {
      // .keys() → solo las claves
      for (const k of mapaIter.keys()) {
        result += `<span class="out-key">'${escH(k)}'</span>\n`;
      }
    } else if (method === 'values') {
      // .values() → solo los valores
      for (const v of mapaIter.values()) {
        result += `<span class="out-val">'${escH(v)}'</span>\n`;
      }
    } else if (method === 'entries') {
      // .entries() → iterador de [clave, valor]
      for (const entry of mapaIter.entries()) {
        result += `<span class="out-op">[</span><span class="out-key">'${escH(entry[0])}'</span><span class="out-op">,</span> <span class="out-val">'${escH(entry[1])}'</span><span class="out-op">]</span>\n`;
      }
    } else if (method === 'foreach') {
      // .forEach(callback) → (valor, clave, mapa)
      mapaIter.forEach((v, k) => {
        result += `<span class="out-info">forEach →</span> <span class="out-key">${escH(k)}</span> <span class="out-op">=</span> <span class="out-val">'${escH(v)}'</span>\n`;
      });
    }

    out.innerHTML = result + `\n<span class="out-size">// size: ${mapaIter.size} entradas</span>`;
  }