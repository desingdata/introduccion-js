// ── Demo if ──────────────────────────────────────────────
function demoIf() {
    let t = Number(document.getElementById("tempInput").value);
    // if: ejecuta el bloque solo si la condición es true
    let msg = "";
    if (t > 30) msg = `🌡️ ${t}°C → Hace calor`;
    if (t <= 30 && t > 15) msg = `🌤️ ${t}°C → Temperatura agradable`;
    if (t <= 15) msg = `🥶 ${t}°C → Hace frío`;
    document.getElementById("ifResult").textContent = msg;
}

// ── Demo else ────────────────────────────────────────────
function demoElse() {
    let nota = Number(document.getElementById("notaInput").value);
    // else: bloque alternativo cuando if es false
    if (nota >= 60) {
        document.getElementById("elseResult").textContent = `Nota: ${nota} → ✅ Aprobado`;
    } else {
        document.getElementById("elseResult").textContent = `Nota: ${nota} → ❌ Reprobado (mínimo 60)`;
    }
}

// ── Demo else if ─────────────────────────────────────────
function demoElseIf() {
    let n = Number(document.getElementById("notaLetraInput").value);
    let letra, desc;
    // else if: cadena de condiciones evaluadas en orden
    if (n >= 90) { letra = "A"; desc = "Excelente 🏆"; }
    else if (n >= 80) { letra = "B"; desc = "Muy bueno 🥈"; }
    else if (n >= 70) { letra = "C"; desc = "Bueno ✔️"; }
    else if (n >= 60) { letra = "D"; desc = "Suficiente ⚠️"; }
    else { letra = "F"; desc = "Reprobado ❌"; }
    document.getElementById("elseIfResult").textContent = `Nota: ${n} → ${letra} (${desc})`;
}

// ── Demo switch ──────────────────────────────────────────
function demoSwitch() {
    let dia = Number(document.getElementById("diaSelect").value);
    let nombre;
    // switch: compara el valor con cada case usando ===
    switch (dia) {
        case 1: nombre = "Lunes 💼"; break;
        case 2: nombre = "Martes 📅"; break;
        case 3: nombre = "Miércoles 🔄"; break;
        case 4: nombre = "Jueves 📌"; break;
        case 5: nombre = "Viernes 🎯"; break;
        case 6: nombre = "Sábado 🎉"; break;
        case 7: nombre = "Domingo 🏖️"; break;
        default: nombre = "Día inválido";
    }
    document.getElementById("switchResult").textContent = `Día ${dia} → ${nombre}`;
}

// ── Demo ternario ────────────────────────────────────────
function demoTernario() {
    let edad = Number(document.getElementById("edadInput").value);
    // Ternario: condición ? siTrue : siFalse
    let acceso = edad >= 18 ? "✅ Mayor de edad — Acceso permitido"
        : "🚫 Menor de edad — Acceso denegado";
    document.getElementById("ternarioResult").textContent = `Edad: ${edad} → ${acceso}`;
}

function demoVestimenta() {
    let temp = Number(document.getElementById("vestInput").value);
    // Ternario anidado para múltiples rangos
    let ropa = temp >= 30 ? "🩴 Shorts y camiseta"
        : temp >= 20 ? "👕 Ropa ligera"
            : temp >= 10 ? "🧥 Chaqueta"
                : "🧣 Abrigo y bufanda";
    document.getElementById("vestResult").textContent = `${temp}°C → ${ropa}`;
}