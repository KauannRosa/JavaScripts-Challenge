/*
Crie um array com 5 items (tipos variados).
*/
let array = [true, "string", 5, {objt: "sometrhing"}, [1, 2, 3, 4, 5]]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(arr) {
  return array.push(arr);
  /*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
}
console.log(addItem([false, "idk", 1, null, function(x, y){return x + y}]));


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + array[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array.length + ' itens')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array[5].length + ' itens')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let num = 10
let pares = []
while(num <= 20){
  num % 2 === 0 ? pares.push(num) : '';
  num++
}
console.log(pares)
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let number = 10;
let impares = []
while (number <= 20) {
  number % 2 === 1 ? impares.push(number) : "";
  number++
}
console.log(impares)
let oush

// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for( var nP = 100; nP <= 120; nP++){
  nP % 2 === 0 ? console.log(nP): '';
}

for (var nP = 100; nP <= 125; nP++) {
  nP % 2 === 1 ? console.log(nP) : "";
}



// ?