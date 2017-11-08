var message = "Help me Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + episode);
episode += 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
// Template String
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// Arrow functions !
var call = function (name) { return console.log("Do you copy, " + name + " ?"); };
call('R2');
// Em typescript, p/ o parametro ser opcional devemos colocar a interrogação apos o nome da variavel
function inc(speed, inc) {
    var i = inc || 1;
    return speed + i;
}
function inc2(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(3) = " + inc2(3) + " ");
console.log("inc(5, 3) = " + inc2(5, 3) + " ");
function countJedis(jedis) {
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
// console.log(countJedis([2,3,4]));
function countJedisRestParameter() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
// console.log(countJedisRestParameter(2,3,4));
//# sourceMappingURL=funcoes.js.map