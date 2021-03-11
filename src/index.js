module.exports = function reverse (n) {
let number = Math.abs(n);
let i = String(number).length - 1;
let result = '';
while ( i >= 0) {
    result = result + String(number)[i];
    i -= 1;
}
return +result;
}
