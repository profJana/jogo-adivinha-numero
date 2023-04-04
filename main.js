// Número de tentativas permitidas
let numTentativas = 5;

function play(){
  // Gera um número aleatório entre 1 e 20
  let numeroAleatorio = Math.floor(Math.random() * 20) + 1;

  //for(inicio, fim, soma/sub)
  
  for (let i = 1; i <= numTentativas; i++) {

    // Solicita ao usuário para adivinhar o número
    let palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 20):"));
  
    // Verifica se o palpite está correto
    if (palpite === numeroAleatorio) {
      console.log("Parabéns, você acertou o número em " + i + " tentativas!");
      break;
    }

    // Dá uma dica ao usuário indicando se o número é maior ou menor do que o palpite
    let dica = (palpite < numeroAleatorio) ? "maior" : "menor";
    console.log("Tentativa #" + i + ": O número é " + dica + " do que " + palpite);
  
    // Verifica se o jogador usou todas as tentativas sem acertar
    if (i === numTentativas) {
      console.log("Suas tentativas acabaram. O número era " + numeroAleatorio + ".");
    }
  }
  // Laço de repetição para cada tentativa
  
}

