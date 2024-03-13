// Scrivere programma che stampi numeri da 1 a 100
//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi “Buzz” al posto del numero.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
//in tutti gli altri casi venga stampato il numero stesso

let num1
let num2

for (let i = 1; i <= 100; i++) {
    num1 = i % 3
    num2 = i % 5

    if(num1 == 0 &&  num2 == 0){
        console.log('Fizzbuzz',i)
    }

        else if (num1 == 0){
        console.log('Fizz',i)
    }

        else if (num2 == 0){
        console.log('Buzz',i)
    }

    else{
        console.log(i)
    }
    
}