(async () => {
  const raw = await ask('Digite sua idade: ');
  const age = parseInt(raw, 10);
  if (isNaN(age)) return console.log('Entrada inválida');
  console.log(age >= 18 ? 'Maior de idade' : 'Menor de idade');
})();