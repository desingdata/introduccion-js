/* =============================================
   DECLARACIÓN DE FUNCIÓN (01)
   Forma clásica con 'function' y nombre
============================================= */
function saludar(nombre) {
    return `¡Hola, ${nombre}! Bienvenido a JavaScript.`;
}
function runSaludar() {
    const nombre = document.getElementById('nombreInput').value || 'Mundo';
    document.getElementById('out1').textContent = `→ ${saludar(nombre)}`;
}

/* =============================================
   EXPRESIÓN DE FUNCIÓN (02)
   Función asignada a variable
============================================= */
const calcularArea = function (base, altura) {
    return (base * altura) / 2;
};
function runArea() {
    const b = parseFloat(document.getElementById('baseInput').value) || 0;
    const h = parseFloat(document.getElementById('altInput').value) || 0;
    document.getElementById('out2').textContent =
        `→ Área del triángulo (base=${b}, altura=${h}): ${calcularArea(b, h)}`;
}

/* =============================================
   ARROW FUNCTION (03)
   Sintaxis compacta, retorno implícito
============================================= */
const doble = n => n * 2;
const cuadrado = n => n ** 2;
function runArrow() {
    const n = parseFloat(document.getElementById('numInput').value) || 0;
    document.getElementById('out3').textContent =
        `→ doble(${n}) = ${doble(n)}   |   cuadrado(${n}) = ${cuadrado(n)}`;
}

/* =============================================
   PARÁMETROS REST (04)
   Agrupa argumentos en array
============================================= */
const sumarTodo = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);
function runRest() {
    const raw = document.getElementById('restInput').value;
    const nums = raw.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    document.getElementById('out4').textContent =
        `→ sumarTodo(${nums.join(', ')}) = ${sumarTodo(...nums)}`;
}

/* =============================================
   SCOPE (05)
   Cadena de acceso a variables
============================================= */
function runScope() {
    const scopeGlobal = "🌍 scope global";
    function exterior() {
        const scopeLocal = "📦 scope de función (exterior)";
        function interior() {
            const scopePrivado = "🔒 scope privado (interior)";
            return [scopeGlobal, scopeLocal, scopePrivado];
        }
        return interior();
    }
    const cadena = exterior();
    document.getElementById('out5').textContent = "→ " + cadena.join("  ›  ");
}

/* =============================================
   CLOSURE (06)
   Función que recuerda su entorno léxico
============================================= */
function crearContador() {
    let cuenta = 0;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        reset: () => { cuenta = 0; return cuenta; }
    };
}
const contador = crearContador();
function updateCounterOutput() {
    document.getElementById('out6').textContent = `Valor del contador: ${contador.valor()}`;
}
function runIncrement() { contador.incrementar(); updateCounterOutput(); }
function runDecrement() { contador.decrementar(); updateCounterOutput(); }
function resetCounter() { contador.reset(); updateCounterOutput(); }

/* =============================================
   RECURSIÓN (07)
   Función que se llama a sí misma
============================================= */
function factorial(n) {
    if (n <= 1) return 1;           // Caso base
    return n * factorial(n - 1);    // Caso recursivo
}
const fibonacci = n => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
function runFactorial() {
    const n = parseInt(document.getElementById('factInput').value) || 0;
    if (n < 0 || n > 20) { document.getElementById('out7').textContent = '→ Usa un número entre 0 y 20'; return; }
    document.getElementById('out7').textContent =
        `→ factorial(${n}) = ${factorial(n)}`;
}
function runFibonacci() {
    const n = parseInt(document.getElementById('factInput').value) || 0;
    if (n < 0 || n > 20) { document.getElementById('out7').textContent = '→ Usa un número entre 0 y 20'; return; }
    document.getElementById('out7').textContent =
        `→ fibonacci(${n}) = ${fibonacci(n)}`;
}

/* =============================================
   IIFE (08)
   Función que se ejecuta inmediatamente
============================================= */
function runIIFE() {
    const nombre = document.getElementById('appName').value || 'App';
    const version = document.getElementById('appVer').value || '1.0.0';
    const resultado = ((n, v) => {
        const ts = new Date().toLocaleTimeString();
        return `⚡ App inicializada: "${n}" v${v} a las ${ts}`;
    })(nombre, version);
    document.getElementById('out8').textContent = `→ ${resultado}`;
}

/* =============================================
   HIGHER ORDER FUNCTIONS (09)
   Funciones que reciben/retornan funciones
============================================= */
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 350 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Webcam", precio: 120 },
    { nombre: "Hub USB", precio: 30 },
];
function runHigherOrder() {
    const min = parseFloat(document.getElementById('precioMin').value) || 0;
    const caros = productos.filter(p => p.precio > min);
    const total = caros.reduce((sum, p) => sum + p.precio, 0);
    const nombres = caros.map(p => p.nombre).join(', ');
    document.getElementById('out9').textContent =
        nombres.length
            ? `→ Productos > $${min}: [${nombres}]  |  Total: $${total}`
            : `→ Ningún producto supera $${min}`;
}

/* =============================================
   Intersection Observer — animación de entrada
============================================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.section').forEach(s => observer.observe(s));