var btn = document.querySelector(".btn-add")
var userName = document.querySelector("#name").value;
var productName = document.querySelector("#product").value;
var productQuantity = document.querySelector("#productQuantity").value;
var productValue = document.querySelector("#productValue").value;

function listProduct(name, product, quantity, value) {
    console.log(
        "NOME: " + name + "\n" +
        "PRODUTO: " + product + "\n" +
        "QUANTIDADE: " + quantity + "\n" +
        "VALOR: " + value);
}

btn.addEventListener("click", function(event) {
    event.preventDefault();
    listProduct(userName, productName, productQuantity, productValue);
});