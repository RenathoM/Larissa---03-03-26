(async () => {
  let total = 0;
  while (true) {
    const raw = await ask('Digite um número (0 para finalizar): ');
    const n = Number(raw);
    if (!Number.isFinite(n)) return console.log('Entrada inválida');
    if (n === 0) break;
    total += n;
  }
  console.log('Soma total:', total);
})();
