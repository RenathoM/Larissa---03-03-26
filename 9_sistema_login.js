const CORRECT_USER = 'admin';
const CORRECT_PASS = '1234';

(async () => {
  let attempts = 0;
  while (attempts < 3) {
    const user = await ask('Usuário: ');
    const pass = await ask('Senha: ');
    if (user === CORRECT_USER && pass === CORRECT_PASS) return console.log('Acesso permitido');
    attempts++;
    console.log(`Credenciais incorretas. Restam ${3 - attempts} tentativa(s).`);
  }
  console.log('Acesso bloqueado.');
})();
