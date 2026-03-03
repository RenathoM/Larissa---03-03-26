(async () => {
  const raw = await ask('Digite um número para ver a tabuada: ');
  const n = Number(raw);
  if (!Number.isFinite(n)) return console.log('Entrada inválida');
  for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);
})();
