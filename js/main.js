const userDistance = prompt("Inserisci i km da percorrere");
console.log(userDistance);

const age = prompt("Inserisci la tua età");
console.log(age);

let price = (userDistance * 0.21)

let sconto20;
if  (age < 18)
{
    price = price - (price * 0.2)
} else if(age >= 65)
{
    price = price - (price * 0.4)
}
console.log(price)

document.querySelector("h1").innerHTML = price