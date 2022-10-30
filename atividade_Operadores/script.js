function teste(num1, num2) {
   var soma = 0;
    num1 === num2 ? console.log(num1,  'é igual a' , num2) : console.log(num1, ' é diferente de ' ,num2);
    soma = num1 + num2;
    console.log('A soma dos números',num1,'+',num2,'é igual a:' ,soma);
    if ((soma > 10) && (soma < 20)) {
                console.log('A soma de',num1, '+' ,num2, 'é maior que 10 e menor que 20.');
    }   else if (soma < 10) {
                console.log(soma, 'é menor que 10 e menor que 20');
        }  else if (soma > 20) {
                console.log(soma, 'é maior que 20');
            } 
    
}

let n1 = Number (prompt('Digite o primeiro número: '));
let n2 = Number (prompt('Digite o segundo número: '));

teste(n1, n2);