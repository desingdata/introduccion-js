 // ─── Toggle card open/close ───────────────────────────────────────────────
  function toggleCard(header) {
    const card = header.closest('.topic-card');
    card.classList.toggle('open');
  }

  // ─── Filter by level ──────────────────────────────────────────────────────
  function filterCards(level, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.topic-card').forEach(card => {
      const show = level === 'all' || card.dataset.level === level;
      card.style.display = show ? 'block' : 'none';
    });
  }

  // ─── Copy code ────────────────────────────────────────────────────────────
  function copyCode(btn) {
    const pre = btn.closest('.code-wrap').querySelector('pre');
    navigator.clipboard.writeText(pre.innerText).then(() => {
      btn.textContent = '✓ Copiado';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
    });
  }

  // ─── Run code examples ────────────────────────────────────────────────────
  const examples = {
    1: () => {
      const persona = { nombre: "Ana García", edad: 28, activo: true };
      const vehiculo = new Object();
      vehiculo.marca = "Toyota"; vehiculo.año = 2023;
      const base = { tipo: "animal" };
      const perro = Object.create(base); perro.nombre = "Firulais";
      return [
        `Persona: ${persona.nombre} - ${persona.edad} años`,
        `Vehículo: ${vehiculo.marca} ${vehiculo.año}`,
        `Perro hereda tipo: ${perro.tipo}`
      ];
    },
    2: () => {
      const producto = { nombre: "Laptop", precio: 1299.99, "en-stock": true };
      const campo = "precio";
      const usuario = null;
      return [
        `producto.nombre → "${producto.nombre}"`,
        `producto.precio → ${producto.precio}`,
        `producto["en-stock"] → ${producto["en-stock"]}`,
        `producto[campo] → ${producto[campo]}`,
        `producto.color → ${producto.color}`,
        `usuario?.nombre ?? "Sin usuario" → ${usuario?.nombre ?? "Sin usuario"}`
      ];
    },
    3: () => {
      const calculadora = {
        historial: [],
        sumar(a, b) { const r = a + b; this.historial.push(`${a} + ${b} = ${r}`); return r; },
        multiplicar: (a, b) => a * b,
        verHistorial() { return this.historial.join("\n"); }
      };
      calculadora.sumar(5, 3); calculadora.sumar(10, 20);
      return [
        `sumar(5, 3) → ${calculadora.sumar(5, 3) - 8 + 8}`, // re-run for output
        `multiplicar(4, 6) → ${calculadora.multiplicar(4, 6)}`,
        `Historial:\n${calculadora.verHistorial()}`
      ];
    },
    4: () => {
      const empleado = { id: 42, nombre: "Carlos", puesto: "Desarrollador", salario: 55000, departamento: "IT" };
      const { nombre, puesto } = empleado;
      const { nombre: nombreCompleto, bonus = 0 } = empleado;
      const { id, ...datosPublicos } = empleado;
      const empleadoActualizado = { ...empleado, salario: 60000, nivel: "Senior" };
      const extra = { idiomas: ["JS", "Python"], remoto: true };
      const perfil = { ...empleado, ...extra };
      return [
        `${nombre} → ${puesto}`,
        `Bonus de ${nombreCompleto}: $${bonus}`,
        `Sin ID: { nombre: "${datosPublicos.nombre}", puesto: "${datosPublicos.puesto}", ... }`,
        `Salario nuevo: ${empleadoActualizado.salario}`,
        `Perfil idiomas: ${perfil.idiomas.join(", ")}`
      ];
    },
    5: () => {
      const inventario = { manzanas: 50, naranjas: 30, uvas: 80, peras: 20 };
      const frutas = Object.keys(inventario);
      const total = Object.values(inventario).reduce((a, n) => a + n, 0);
      const lines = Object.entries(inventario).map(([f, c]) => `  ${f}: ${c} ${c > 40 ? "✓ OK" : "⚠ Bajo"}`);
      const doblado = Object.fromEntries(Object.entries(inventario).map(([k, v]) => [k, v * 2]));
      return [
        `Frutas: [${frutas.join(", ")}]`,
        `Total en stock: ${total}`,
        lines.join("\n"),
        `Stock duplicado: { ${Object.entries(doblado).map(([k,v])=>`${k}: ${v}`).join(", ")} }`
      ];
    },
    6: () => {
      class Cuenta {
        #saldo = 0;
        constructor(titular, saldoInicial) { this.titular = titular; this.#saldo = saldoInicial; this.movimientos = []; }
        depositar(m) { this.#saldo += m; this.movimientos.push(`+${m}`); }
        retirar(m) { if (m > this.#saldo) throw new Error("Fondos insuficientes"); this.#saldo -= m; this.movimientos.push(`-${m}`); }
        get saldo() { return this.#saldo; }
        toString() { return `[${this.titular}] Saldo: $${this.saldo}`; }
      }
      const cta = new Cuenta("María López", 1000);
      cta.depositar(500); cta.retirar(200);
      return [cta.toString(), `Movimientos: [${cta.movimientos.join(", ")}]`];
    },
    7: () => {
      class Animal {
        constructor(n, e) { this.nombre = n; this.especie = e; this.vivo = true; }
        hablar() { return "..."; }
      }
      class Perro extends Animal {
        constructor(n, r) { super(n, "Canis lupus familiaris"); this.raza = r; }
        hablar() { return `${this.nombre} dice: ¡Guau!`; }
        fetch(o) { return `${this.nombre} trae el ${o} 🎾`; }
      }
      class Gato extends Animal {
        constructor(n) { super(n, "Felis catus"); }
        hablar() { return `${this.nombre} dice: Miau...`; }
      }
      const animales = [new Perro("Rex", "Labrador"), new Gato("Misi"), new Perro("Luna", "Beagle")];
      return [
        ...animales.map(a => a.hablar()),
        animales[0].fetch("palo"),
        `¿Rex es Animal? ${animales[0] instanceof Animal}`
      ];
    },
    8: () => {
      const CONFIG = Object.freeze({ API_URL: "https://api.ejemplo.com", TIMEOUT: 5000, VERSION: "2.1.0" });
      CONFIG.API_URL = "hackeado";
      const defaults = { color: "azul", tamaño: "M", cantidad: 1 };
      const opciones = { color: "rojo", cantidad: 3 };
      const pedido = Object.assign({}, defaults, opciones);
      const estadoAnterior = { usuario: "Ana", puntos: 100, nivel: 3 };
      const nuevoEstado = { ...estadoAnterior, puntos: 150, nivel: 4 };
      return [
        `URL (sin cambio): ${CONFIG.API_URL}`,
        `¿Está congelado? ${Object.isFrozen(CONFIG)}`,
        `Pedido final: { color: "${pedido.color}", tamaño: "${pedido.tamaño}", cantidad: ${pedido.cantidad} }`,
        `Estado anterior: ${estadoAnterior.puntos} puntos`,
        `Nuevo estado: ${nuevoEstado.puntos} puntos`
      ];
    }
  };

  function runCode(btn, id) {
    const out = document.getElementById(`out-${id}`);
    try {
      const lines = examples[id]();
      out.style.color = 'var(--green)';
      out.textContent = lines.join('\n');
    } catch(e) {
      out.style.color = 'var(--red)';
      out.textContent = `Error: ${e.message}`;
    }
  }