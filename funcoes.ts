let message: string = "Help me Obi-Wan Kenobi. You're my only hope!";
console.log(message)

let episode: number = 4

console.log("This is episode " + episode)
episode += 1
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14
// Template String
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

// Arrow functions !
let call = (name: string) => console.log(`Do you copy, ${name} ?`)
call('R2')

// Em typescript, p/ o parametro ser opcional devemos colocar a interrogação apos o nome da variavel
function inc(speed: number, inc?: number) : number{
    let i = inc || 1;
    return speed + i;
}

function inc2(speed: number, inc: number = 1) : number{
    return speed + inc;
}

console.log(`inc(3) = ${inc2(3)} `);
console.log(`inc(5, 3) = ${inc2(5, 3)} `);

function countJedis(jedis: number[]) : number {
    return jedis.reduce((a, b) => a +b, 0)
}

// console.log(countJedis([2,3,4]));

function countJedisRestParameter(... jedis: number[]) : number {
    return jedis.reduce((a, b) => a +b, 0)
}

// console.log(countJedisRestParameter(2,3,4));
