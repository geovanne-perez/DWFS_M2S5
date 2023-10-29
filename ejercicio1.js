console.log('Calculadora básica')

let Numero1,Numero2,Operacion,Resultado

Numero1 = parseInt(prompt('Ingresa el primer numero'))
Numero2 = parseInt(prompt('Ingresa el segundo numero'))
Operacion = prompt('Ingresa la operacion')

switch (Operacion) {
  case '+':
    Resultado = Numero1 + Numero2;
    break;
  case '-':
    Resultado = Numero1 - Numero2;
    break;
  case '*':
    Resultado = Numero1 * Numero2;
    break;
  case '/':
    Resultado = Numero1 / Numero2;
    break;
  default:
    Resultado = 'Operación inválida';
}
console.log(Resultado);