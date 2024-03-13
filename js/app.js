// Scrivere programma che stampi numeri da 1 a 100
//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi “Buzz” al posto del numero.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
//in tutti gli altri casi venga stampato il numero stesso

let num1
let num2

for (let i = 0; i < 100; i++) {
    
   let num1 = (i + 1) % 3
   let num2 = (i + 1) % 5

    if(num1 == 0  &&  num2 == 0){
        console.log('Fizzbuzz',i + 1)
    }

        else if (num1 == 0){
        console.log('Fizz',i + 1)
    }

        else if (num2 == 0){
        console.log('Buzz',i + 1)
    }

    else{
        console.log(i + 1)
    }
    
}