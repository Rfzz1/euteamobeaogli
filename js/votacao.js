document.getElementById('form-votacao').addEventListener('submit', function(e) {
  e.preventDefault();

  const escolhida = document.querySelector('input[name="foto"]:checked');
  const resultado = document.getElementById('foto-vencedora');

  if (escolhida) {
    const fotoSelecionada = escolhida.value; // tipo 'foto1'
    const caminhoImagem = document.querySelector(`input[value="${fotoSelecionada}"] + img`).src;

    const nomeAmor = 'Bea'; // pode deixar fixo ou ajustar depois
    const legenda = `Oi meu amor! 💖 Essa foi a foto que você escolheu como nossa preferida! Olha só como a gente é lindo(a)s! 🥹❤️`;

    resultado.innerHTML = `
      <h2>Sua foto favorita ❤️</h2>
      <img src="${caminhoImagem}" alt="Foto escolhida" style="width: 250px; height: auto; border-radius: 1rem; box-shadow: 0 0 1rem rgba(0,0,0,0.5); margin-bottom: 1rem;">
      <br>
    `;

    resultado.style.display = 'block';
  } else {
    alert('Escolhe uma foto primeiro, amorzinho!');
  }
});