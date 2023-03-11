/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);
  
  // a média
  let notafinal = (nota1 + nota2 + nota3 + nota4)/4;
  let mensagem = "";
  // evite mexer no código acima!
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
    alert("Favor inserir todas as notas para calcularmos a média.")
  }

  if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
    alert("Favor inserir notas de 0 a 10.")
  } else  if (notafinal ===0){
    mensagem = "Infelizmente você zerou a prova :(";
  } else if (notafinal > 0 && notafinal<= 3) {
    mensagem = "Caramba, deu ruim, você obteve média " + notafinal + "! " + " Estude mais e tente novamente!";
  } else if (notafinal > 3 && notafinal <=5.9) {
    mensagem = "Você obteve média " + notafinal + "! " + "Falta pouco para a média.";
  } else if (notafinal > 5.9 && notafinal <= 7){
    mensagem = "Você está na média com " + notafinal;
  } else if (notafinal > 7 && notafinal <= 9.9) {
    mensagem = "Notão! Sua média é " + notafinal + "!"
  } else if (notafinal ===10) {
    mensagem = "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média.";
  }
// Podemos usar o if da forma abaixo, sem {}, se o interior for de uma só linha.
  if (notafinal >10) alert("Insira valores de nota entre 0 e 10.")
  





  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}
