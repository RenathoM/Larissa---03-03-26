(async () => {
  const raw = await ask('Digite um número: ');
  const n = Number(raw);
  if (!Number.isFinite(n)) return console.log('Entrada inválida');
  console.log(n % 2 === 0 ? 'Par' : 'Ímpar');
})();
