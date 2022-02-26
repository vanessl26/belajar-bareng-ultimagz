let result = 0;

const penjumlahan = () => {
    var bilangan1 = parseInt(document.getElementById("number1").value);
    var bilangan2 = parseInt(document.getElementById("number2").value);
    result = bilangan1 + bilangan2;
    document.getElementById("result").innerHTML = result;
}

const pengurangan = () => {
    var bilangan1 = parseInt(document.getElementById("number1").value);
    var bilangan2 = parseInt(document.getElementById("number2").value);
    result = bilangan1 - bilangan2;
    document.getElementById("result").innerHTML = result;
}

const perkalian = () => {
    var bilangan1 = parseInt(document.getElementById("number1").value);
    var bilangan2 = parseInt(document.getElementById("number2").value);
    result = bilangan1 * bilangan2;
    document.getElementById("result").innerHTML = result;
}

const pembagian = () => {
    var bilangan1 = parseInt(document.getElementById("number1").value);
    var bilangan2 = parseInt(document.getElementById("number2").value);
    result = bilangan1 / bilangan2;
    document.getElementById("result").innerHTML = result;
}