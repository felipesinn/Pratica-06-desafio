
let lerIdade = Number(prompt("digite sua idade"));
let idadeMotorista = 18;
let menorIdade = 17;

for (let i = 0; idadeMotorista <= lerIdade; i++) {
  console.log(`${idadeMotorista} Pode dirigir`);
  idadeMotorista++;
}
if (lerIdade <= menorIdade) {
  console.log(`${lerIdade} Não pode dirigir`);
}

// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.
