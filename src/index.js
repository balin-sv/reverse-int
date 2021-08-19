module.exports = function reverse(n) {
    let aux = n.toString().replace(/\D/g, "");
    let newString = "";
    for (let i = aux.length - 1; i >= 0; i--) {
        newString = newString + aux[i];
    }
    return parseInt(newString);
};
