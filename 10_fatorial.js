function factorial(n) {
  let res = 1n;
  for (let i = 2n; i <= BigInt(n); i++) res *= i;
  return res;
}

(async () => {
  const raw = await ask('Digite um número inteiro positivo: ');
  const n = parseInt(raw, 10);
  if (isNaN(n) || n < 0) return console.log('Entrada inválida');
  const result = factorial(n);
  console.log(`${n}! = ${result.toString()}`);
})();
