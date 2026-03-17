// ── Navegación ───────────────────────────
function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('#mainNav button').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const idx = ['conceptos', 'basicos', 'estaticos', 'propiedades'].indexOf(id);
    document.querySelectorAll('#mainNav button')[idx].classList.add('active');
}

// ── Ejecutar código ──────────────────────
function runCode(btn, code) {
    const output = btn.nextElementSibling;
    try {
        // Crear función que evalúa el código y retorna resultado
        const fn = new Function(code.trim());
        const result = fn();
        output.textContent = result !== undefined ? String(result) : '(sin retorno)';
        output.style.color = 'var(--accent3)';
    } catch (e) {
        output.textContent = '⚠ Error: ' + e.message;
        output.style.color = '#f87171';
    }
    output.classList.add('visible');
}

// ── Datos de Propiedades ─────────────────
const props = [
    { name: 'Number.EPSILON', desc: 'Diferencia mínima entre dos floats distintos. Usado para comparar floats con tolerancia.', val: Number.EPSILON },
    { name: 'Number.MAX_VALUE', desc: 'El mayor número positivo representable en JS.', val: Number.MAX_VALUE },
    { name: 'Number.MIN_VALUE', desc: 'El menor número positivo (más cercano a cero) representable.', val: Number.MIN_VALUE },
    { name: 'Number.MAX_SAFE_INTEGER', desc: 'Entero más grande con representación exacta: 2⁵³ − 1.', val: Number.MAX_SAFE_INTEGER },
    { name: 'Number.MIN_SAFE_INTEGER', desc: 'Entero más pequeño con representación exacta: −(2⁵³ − 1).', val: Number.MIN_SAFE_INTEGER },
    { name: 'Number.POSITIVE_INFINITY', desc: 'Representa infinito positivo. Resultado de desbordamiento o división por cero positivo.', val: Number.POSITIVE_INFINITY },
    { name: 'Number.NEGATIVE_INFINITY', desc: 'Representa infinito negativo. Resultado de desbordamiento negativo.', val: Number.NEGATIVE_INFINITY },
    { name: 'Number.NaN', desc: 'Propiedad estática equivalente a NaN. Resultado de operaciones numéricas inválidas.', val: Number.NaN },
];

const grid = document.getElementById('propGrid');
props.forEach(p => {
    grid.innerHTML += `
    <div class="prop-item">
      <div class="name">${p.name}</div>
      <div class="desc">${p.desc}</div>
      <div class="value">${p.val}</div>
    </div>`;
});