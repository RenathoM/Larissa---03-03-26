function parseNum(raw) {
  const v = Number(raw);
  return Number.isFinite(v) ? v : null;
}

(async () => {
  const a = parseNum(await ask('Digite o primeiro número: '));
  if (a === null) return console.log('Entrada inválida');
  const b = parseNum(await ask('Digite o segundo número: '));
  if (b === null) return console.log('Entrada inválida');
  const op = (await ask('Escolha a operação (+, -, *, /): ')).trim();
  let res;
  switch (op) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/':
      if (b === 0) return console.log('Erro: divisão por zero');
      res = a / b; break;
    default: return console.log('Operação inválida');
  }
  console.log('Resultado:', res);
})();
