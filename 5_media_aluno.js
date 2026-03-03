function parseGrade(raw) {
  const v = Number(raw.replace(',','.'));
  return Number.isFinite(v) ? v : null;
}

(async () => {
  const a = parseGrade(await ask('Nota 1: ')); if (a===null) return console.log('Entrada inválida');
  const b = parseGrade(await ask('Nota 2: ')); if (b===null) return console.log('Entrada inválida');
  const c = parseGrade(await ask('Nota 3: ')); if (c===null) return console.log('Entrada inválida');
  const media = (a + b + c) / 3;
  console.log('Média:', media.toFixed(2));
  if (media >= 7) console.log('Aprovado');
  else if (media >= 5) console.log('Recuperação');
  else console.log('Reprovado');
})();
