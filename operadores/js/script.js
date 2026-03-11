// ─────────────────────────────────────────────
// DEMOSTRACIONES INTERACTIVAS
// Conectan los inputs del HTML con los operadores
// ─────────────────────────────────────────────

function runArith() {
    const a = parseFloat(document.getElementById('ar-a').value) || 0;
    const b = parseFloat(document.getElementById('ar-b').value) || 0;
    const lines = [
        `${a} + ${b} = ${a + b}`,
        `${a} - ${b} = ${a - b}`,
        `${a} * ${b} = ${a * b}`,
        `${a} / ${b} = ${b !== 0 ? (a / b).toFixed(4) : 'Infinity'}`,
        `${a} % ${b} = ${a % b}`,
        `${a} ** ${b} = ${a ** b}`,
    ];
    document.getElementById('ar-out').textContent = lines.join(' | ');
}

function runAssign() {
    let x = parseFloat(document.getElementById('as-x').value) || 20;
    const steps = [`x = ${x}`];
    x += 5; steps.push(`+=5 → ${x}`);
    x -= 3; steps.push(`-=3 → ${x}`);
    x *= 2; steps.push(`*=2 → ${x}`);
    x /= 4; steps.push(`/=4 → ${x}`);
    document.getElementById('as-out').textContent = steps.join(' | ');
}

function runComp() {
    const p = parseFloat(document.getElementById('cmp-p').value);
    const r = parseFloat(document.getElementById('cmp-r').value);
    const results = [
        `${p}=="${p}" ${p == String(p)}`,
        `${p}===${r} ${p === r}`,
        `${p}>${r} ${p > r}`,
        `${p}<${r} ${p < r}`,
        `${p}>=${p} ${p >= p}`,
    ];
    document.getElementById('cmp-out').textContent = results.join(' | ');
}

function runLogic() {
    const a = !!parseInt(document.getElementById('lo-a').value);
    const b = !!parseInt(document.getElementById('lo-b').value);
    const c = !!parseInt(document.getElementById('lo-c').value);
    const out = [
        `AND(a,b): ${a && b}`,
        `OR(a,b): ${a || b}`,
        `!a: ${!a}`,
        `??null: "Invitado"`,
        `acceso: ${a && c ? 'Permitido' : 'Denegado'}`,
    ];
    document.getElementById('lo-out').textContent = out.join(' | ');
}

function runMath() {
    const n = parseFloat(document.getElementById('mt-n').value) || 49;
    const rnd = Math.floor(Math.random() * 100) + 1;
    const out = [
        `round(${n}+0.4)=${Math.round(n + 0.4)}`,
        `floor=${Math.floor(n)}`,
        `ceil=${Math.ceil(n)}`,
        `abs(-n)=${Math.abs(-n)}`,
        `sqrt=${Math.sqrt(n).toFixed(3)}`,
        `random(1-100)=${rnd}`,
    ];
    document.getElementById('mt-out').textContent = out.join(' | ');
}