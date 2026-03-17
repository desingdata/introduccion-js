// ══════════════════════════════════════════════════════════════════
// ESTRUCTURA DEL PROYECTO
// Cada objeto contiene: badge, título, definición, código visual
// y una función ejecutar() que corre el código real de JavaScript.
// ══════════════════════════════════════════════════════════════════
const temas = [

    // ── 01 · DECLARACIÓN DE CADENAS ────────────────────────────────
    // Una cadena (string) es una secuencia de caracteres.
    // Se puede declarar con '', "" o backticks ``.
    {
        badge: "01", titulo: "Declaración de Cadenas",
        definicion: "Una cadena (string) es una secuencia de caracteres. Se declara con comillas simples (''), dobles (\"\") o backticks (``) para template literals. Todas representan el tipo primitivo string.",
        codigo: `<span class="cmt">// Tres formas de declarar una cadena</span>
<span class="kw">let</span> <span class="vr">simple</span>   = <span class="str">'Hola Mundo'</span>;
<span class="kw">let</span> <span class="vr">doble</span>    = <span class="str">"JavaScript"</span>;
<span class="kw">let</span> <span class="vr">template</span> = \`Aprendo \${doble}\`;

<span class="cmt">// typeof verifica el tipo de dato</span>
<span class="fn">console</span>.<span class="op">log</span>(<span class="kw">typeof</span> simple); <span class="cmt">// "string"</span>`,
        run: () => {
            let s = 'Hola Mundo', d = "JavaScript", t = `Aprendo ${d}`;
            return [{ l: "simple", v: s }, { l: "doble", v: d }, { l: "template", v: t }, { l: "typeof simple", v: typeof s }];
        }
    },

    // ── 02 · PROPIEDAD .length ────────────────────────────────────
    // .length retorna la cantidad total de caracteres (incluye espacios).
    {
        badge: "02", titulo: "Propiedad .length",
        definicion: ".length es una propiedad (no un método) que devuelve el número total de caracteres en la cadena, incluyendo espacios y caracteres especiales.",
        codigo: `<span class="kw">let</span> <span class="vr">ciudad</span> = <span class="str">"Bogotá Colombia"</span>;

<span class="cmt">// .length → total de caracteres</span>
<span class="vr">ciudad</span>.<span class="op">length</span>;   <span class="cmt">// 15</span>

<span class="kw">let</span> <span class="vr">vacia</span> = <span class="str">""</span>;
<span class="vr">vacia</span>.<span class="op">length</span>;    <span class="cmt">// 0</span>`,
        run: () => [{ l: '"Bogotá Colombia".length', v: "Bogotá Colombia".length }, { l: '"".length', v: "".length }]
    },

    // ── 03 · ACCESO A CARACTERES ──────────────────────────────────
    // Índice empieza en 0. Se usa [i] o .at() (acepta negativos).
    {
        badge: "03", titulo: "Acceso a Caracteres",
        definicion: "Los índices empiezan en 0. Se accede con [índice] o con .at(), que acepta valores negativos para contar desde el final de la cadena.",
        codigo: `<span class="kw">let</span> <span class="vr">fruta</span> = <span class="str">"mango"</span>;

<span class="cmt">// Acceso por posición (índice 0 = primer char)</span>
<span class="vr">fruta</span>[<span class="num">0</span>];       <span class="cmt">// "m"</span>
<span class="vr">fruta</span>[<span class="num">4</span>];       <span class="cmt">// "o"</span>

<span class="cmt">// .at(-1) → último carácter</span>
<span class="vr">fruta</span>.<span class="op">at</span>(-<span class="num">1</span>);  <span class="cmt">// "o"</span>`,
        run: () => { let f = "mango"; return [{ l: "fruta[0]", v: f[0] }, { l: "fruta[4]", v: f[4] }, { l: "fruta.at(-1)", v: f.at(-1) }]; }
    },

    // ── 04 · MÉTODOS DE TRANSFORMACIÓN ───────────────────────────
    // Devuelven una nueva cadena; las cadenas son inmutables en JS.
    {
        badge: "04", titulo: "Métodos de Transformación",
        definicion: "Métodos que retornan una cadena nueva transformada. Las cadenas son inmutables: ningún método modifica la cadena original.",
        codigo: `<span class="kw">let</span> <span class="vr">t</span> = <span class="str">"  Hola JavaScript!  "</span>;

<span class="cmt">// toUpperCase → todo a MAYÚSCULAS</span>
<span class="vr">t</span>.<span class="op">toUpperCase</span>();

<span class="cmt">// toLowerCase → todo a minúsculas</span>
<span class="vr">t</span>.<span class="op">toLowerCase</span>();

<span class="cmt">// trim → elimina espacios del inicio y fin</span>
<span class="vr">t</span>.<span class="op">trim</span>();

<span class="cmt">// repeat → repite la cadena N veces</span>
<span class="str">"Eco! "</span>.<span class="op">repeat</span>(<span class="num">3</span>);`,
        run: () => { let t = "  Hola JavaScript!  "; return [{ l: "toUpperCase()", v: t.toUpperCase() }, { l: "toLowerCase()", v: t.toLowerCase() }, { l: "trim()", v: t.trim() }, { l: '"Eco! ".repeat(3)', v: "Eco! ".repeat(3) }]; }
    },

    // ── 05 · BÚSQUEDA EN CADENAS ──────────────────────────────────
    // indexOf, includes, startsWith, endsWith permiten buscar texto.
    {
        badge: "05", titulo: "Búsqueda en Cadenas",
        definicion: "Métodos para localizar o verificar subcadenas. indexOf() devuelve el índice (-1 si no existe); includes(), startsWith() y endsWith() devuelven true o false.",
        codigo: `<span class="kw">let</span> <span class="vr">f</span> = <span class="str">"El cielo es azul y hermoso"</span>;

<span class="cmt">// indexOf → índice de primera aparición</span>
<span class="vr">f</span>.<span class="op">indexOf</span>(<span class="str">"azul"</span>);      <span class="cmt">// 12</span>

<span class="cmt">// includes → ¿contiene la subcadena?</span>
<span class="vr">f</span>.<span class="op">includes</span>(<span class="str">"cielo"</span>);    <span class="cmt">// true</span>

<span class="cmt">// startsWith → ¿empieza con...?</span>
<span class="vr">f</span>.<span class="op">startsWith</span>(<span class="str">"El"</span>);     <span class="cmt">// true</span>

<span class="cmt">// endsWith → ¿termina con...?</span>
<span class="vr">f</span>.<span class="op">endsWith</span>(<span class="str">"hermoso"</span>);  <span class="cmt">// true</span>`,
        run: () => { let f = "El cielo es azul y hermoso"; return [{ l: 'indexOf("azul")', v: f.indexOf("azul") }, { l: 'includes("cielo")', v: f.includes("cielo") }, { l: 'startsWith("El")', v: f.startsWith("El") }, { l: 'endsWith("hermoso")', v: f.endsWith("hermoso") }]; }
    },

    // ── 06 · EXTRACCIÓN DE SUBCADENAS ────────────────────────────
    // slice() y substring() extraen una parte de la cadena.
    {
        badge: "06", titulo: "Extracción de Subcadenas",
        definicion: "slice(inicio, fin) extrae sin incluir fin; acepta negativos. substring(inicio, fin) hace lo mismo pero convierte negativos a 0.",
        codigo: `<span class="kw">let</span> <span class="vr">lang</span> = <span class="str">"JavaScript ES2024"</span>;

<span class="cmt">// slice(inicio, fin) → excluye el índice fin</span>
<span class="vr">lang</span>.<span class="op">slice</span>(<span class="num">0</span>, <span class="num">10</span>);      <span class="cmt">// "JavaScript"</span>

<span class="cmt">// Negativo → cuenta desde el final</span>
<span class="vr">lang</span>.<span class="op">slice</span>(-<span class="num">6</span>);         <span class="cmt">// "ES2024"</span>

<span class="cmt">// substring → igual pero sin negativos</span>
<span class="vr">lang</span>.<span class="op">substring</span>(<span class="num">11</span>,<span class="num">17</span>);  <span class="cmt">// "ES2024"</span>`,
        run: () => { let l = "JavaScript ES2024"; return [{ l: "slice(0,10)", v: l.slice(0, 10) }, { l: "slice(-6)", v: l.slice(-6) }, { l: "substring(11,17)", v: l.substring(11, 17) }]; }
    },

    // ── 07 · REEMPLAZAR Y DIVIDIR ─────────────────────────────────
    // replace/replaceAll sustituyen texto; split divide en array.
    {
        badge: "07", titulo: "Reemplazar y Dividir",
        definicion: "replace() sustituye la primera coincidencia; replaceAll() todas. split() convierte la cadena en un array usando un separador como delimitador.",
        codigo: `<span class="kw">let</span> <span class="vr">csv</span> = <span class="str">"uno,dos,tres"</span>;

<span class="cmt">// split → divide por separador → array</span>
<span class="vr">csv</span>.<span class="op">split</span>(<span class="str">","</span>);

<span class="kw">let</span> <span class="vr">msg</span> = <span class="str">"Mundo Mundo"</span>;

<span class="cmt">// replace → solo primera coincidencia</span>
<span class="vr">msg</span>.<span class="op">replace</span>(<span class="str">"Mundo"</span>,<span class="str">"JS"</span>);

<span class="cmt">// replaceAll → todas las coincidencias</span>
<span class="vr">msg</span>.<span class="op">replaceAll</span>(<span class="str">"Mundo"</span>,<span class="str">"JS"</span>);`,
        run: () => { let c = "uno,dos,tres", m = "Mundo Mundo"; return [{ l: 'split(",")', v: JSON.stringify(c.split(",")) }, { l: 'replace("Mundo","JS")', v: m.replace("Mundo", "JS") }, { l: 'replaceAll("Mundo","JS")', v: m.replaceAll("Mundo", "JS") }]; }
    },

    // ── 08 · TEMPLATE LITERALS ───────────────────────────────────
    // Backticks permiten interpolar expresiones y cadenas multilínea.
    {
        badge: "08", titulo: "Template Literals",
        definicion: "Sintaxis moderna con backticks (`) que permite interpolar variables y expresiones con ${...}, y escribir cadenas multilínea sin necesidad de \\n manual.",
        codigo: `<span class="kw">const</span> <span class="vr">nombre</span> = <span class="str">"Ana"</span>;
<span class="kw">const</span> <span class="vr">edad</span>   = <span class="num">25</span>;

<span class="cmt">// Interpolación de variable y expresión</span>
\`Hola \${nombre}, tienes \${edad} años.\`;

<span class="cmt">// Expresión matemática dentro del template</span>
\`2 + 2 = \${2 + 2}\`;

<span class="cmt">// Multilínea sin caracteres de escape</span>
\`Línea 1
Línea 2\`;`,
        run: () => { const n = "Ana", e = 25; return [{ l: "saludo", v: `Hola ${n}, tienes ${e} años.` }, { l: "expresión", v: `2 + 2 = ${2 + 2}` }, { l: "multilínea", v: "Línea 1 / Línea 2" }]; }
    },

    // ── 09 · CONCATENACIÓN ───────────────────────────────────────
    // Unir cadenas con + o .concat(). Las originales no se modifican.
    {
        badge: "09", titulo: "Concatenación",
        definicion: "Proceso de unir dos o más cadenas. El operador + es el más común; .concat() es el método formal. Ambos retornan una nueva cadena sin modificar las originales.",
        codigo: `<span class="kw">let</span> <span class="vr">a</span> = <span class="str">"Hola"</span>;
<span class="kw">let</span> <span class="vr">b</span> = <span class="str">"Mundo"</span>;

<span class="cmt">// Concatenación con operador +</span>
<span class="kw">let</span> <span class="vr">r1</span> = a + <span class="str">" "</span> + b;

<span class="cmt">// Concatenación con método .concat()</span>
<span class="kw">let</span> <span class="vr">r2</span> = a.<span class="op">concat</span>(<span class="str">" "</span>, b);

<span class="cmt">// += agrega al final de la variable</span>
a += <span class="str">" JS"</span>;`,
        run: () => { let a = "Hola", b = "Mundo", r1 = a + " " + b, r2 = a.concat(" ", b); a += " JS"; return [{ l: 'a + " " + b', v: r1 }, { l: '.concat(" ", b)', v: r2 }, { l: 'a += " JS"', v: a }]; }
    },

    // ── 10 · CONVERSIÓN STRING ↔ NUMBER ──────────────────────────
    // String()/toString() → cadena. Number()/parseInt()/parseFloat() → número.
    {
        badge: "10", titulo: "Conversión String ↔ Number",
        definicion: "String() y .toString() convierten un número en cadena. Number() convierte cadenas numéricas exactas; parseInt() e parseFloat() extraen el número ignorando el resto.",
        codigo: `<span class="kw">let</span> <span class="vr">num</span> = <span class="num">42</span>;

<span class="cmt">// Número → Cadena</span>
<span class="fn">String</span>(num);        <span class="cmt">// "42"</span>
num.<span class="op">toString</span>();    <span class="cmt">// "42"</span>

<span class="cmt">// Cadena → Número</span>
<span class="fn">Number</span>(<span class="str">"100"</span>);      <span class="cmt">// 100</span>
<span class="fn">parseInt</span>(<span class="str">"10px"</span>);  <span class="cmt">// 10 (ignora "px")</span>
<span class="fn">parseFloat</span>(<span class="str">"3.14"</span>);<span class="cmt">// 3.14</span>`,
        run: () => [{ l: "String(42)", v: String(42) + ' (type: "' + typeof String(42) + '")' }, { l: "(42).toString()", v: (42).toString() }, { l: 'Number("100")', v: Number("100") + ' (type: "' + typeof Number("100") + '")' }, { l: 'parseInt("10px")', v: parseInt("10px") }, { l: 'parseFloat("3.14")', v: parseFloat("3.14") }]
    }
];

// ══════════════════════════════════════════════════════════════════
// RENDERIZADO DINÁMICO
// Recorre los temas y construye cada tarjeta en el DOM.
// ══════════════════════════════════════════════════════════════════
const app = document.getElementById('app');

temas.forEach((tema, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <div class="card-header">
      <span class="badge">${tema.badge}</span>
      <h2>${tema.titulo}</h2>
    </div>
    <div class="card-body">
      <div class="code-section"><pre>${tema.codigo}</pre></div>
      <div class="result-section" id="res-${i}">
        <h3>▶ Resultado</h3>
        <div class="output" style="color:#585b70">Presiona "Ejecutar" para ver los resultados.</div>
        <div class="definition">${tema.definicion}</div>
      </div>
    </div>
    <div class="run-btn"><button onclick="run(${i})">▶ Ejecutar</button></div>`;
    app.appendChild(card);
});

// ══════════════════════════════════════════════════════════════════
// FUNCIÓN run(index)
// Invoca la función ejecutar() del tema y renderiza los resultados.
// ══════════════════════════════════════════════════════════════════
function run(i) {
    const out = document.querySelector(`#res-${i} .output`);
    out.style.color = '';
    out.innerHTML = temas[i].run().map(r =>
        `<div><span class="label">${r.l}:</span> <span class="val">${r.v}</span></div>`
    ).join('');
}