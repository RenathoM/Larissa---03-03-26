(async () => {
  const raw = await ask('Digite um inteiro positivo: ');
  const n = parseInt(raw, 10);
  if (isNaN(n) || n < 1) return console.log('Entrada inválida');
  for (let i = 1; i <= n; i++) console.log(i);
})();
