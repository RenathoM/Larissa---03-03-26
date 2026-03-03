(async () => {
  let count = 0;
  for (let i = 1; i <= 5; i++) {
    const raw = await ask(`Digite o número ${i}: `);
    const n = Number(raw);
    if (!Number.isFinite(n)) return console.log('Entrada inválida');
    if (n > 0) count++;
  }
  console.log('Quantidade de números positivos:', count);
})();
