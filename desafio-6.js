/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
let championship = "Campeonato Paulista";
console.log(championship);
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
let teams = ["São Paulo", "Palmeiras", "Bota Fogo", "Corinthians", "Santos"];

console.log("Times que estão participando do " + championship + ":", teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
  if (position < 1 || position > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }
  return (
    "O time que está em " +
    position +
    "º lugar é o " +
    teams[position - 1] +
    "."
  );
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
let numbers = 20;
while (numbers <= 30) {
  console.log(numbers++);
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

//old version
function convertToHex(cor) {
  let hexa;
  switch (cor) {
    case "vermelho":
      hexa = "#ff0000";
      break;
    case "azul":
      hexa = "#0000ff";
      break;
    case "verde":
      hexa = "#008000";
      break;
    case "roxo":
      hexa = "#800080";
      break;
    case "amarelo":
      hexa = "#ffff00";
      break;
    default:
      return "Não temos o equivalente hexadecimal para " + cor + ".";
  }
  return "O hexadecimal para a " + cor + " é " + hexa;
}
console.log(convertToHex());
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex("vermelho"));
console.log(convertToHex("amarelo"));
console.log(convertToHex("azul"));
console.log(convertToHex("roxo"));
console.log(convertToHex("verde"));
console.log(convertToHex("rosa"));
console.log(convertToHex("marrom"));
console.log(convertToHex("laranja"));

//new version
let hex = {
  vermelho: "#ff0000",
  azul: "#0000ff",
  verde: "#008000",
  roxo: "#800080",
  amarelo: "#ffff00",
};

function convertColorsToHex(color) {
  if (color) return "O hexadecimal para a " + color + " é " + hex[color];
  return "Não temos o equivalente hexadecimal para " + color + ".";
}

console.log(convertToHex("vermelho"));
console.log(convertToHex("azul"));
console.log(convertToHex("verde"));
console.log(convertToHex("roxo"));
console.log(convertToHex("amarelo"));
console.log(convertToHex("rosa"));
