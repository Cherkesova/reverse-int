module.exports = function reverse (n) {
    let i = String(n).length - 1;
let result = '';
while ( i >= 0) {
	result = result + String(n)[i];
	i -= 1;
}
return +result;
}
