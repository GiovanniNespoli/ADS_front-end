var btn = document.querySelector(".btn-add")
var userName = document.querySelector("#name");
var productName = document.querySelector("#product");
var productQuantity = document.querySelector("#productQuantity");
var productValue = document.querySelector("#productValue");

function listProduct(name, product, quantity, value) {
    console.log(
        "NOME: " + name + "\n" +
        "PRODUTO: " + product + "\n" +
        "QUANTIDADE: " + quantity + "\n" +
        "VALOR: " + value);
}

function createProduct() {
    var createTr = document.createElement("tr");
    var createNameTd = document.createElement("td");
    var createProductTd = document.createElement("td");
    var createQuantityTd = document.createElement("td");
    var createValueTd = document.createElement("td");
    var createTotalValueTd = document.createElement("td");

    createNameTd.textContent = userName.value;
    createProductTd.textContent = productName.value;
    createQuantityTd.textContent = productQuantity.value;
    createValueTd.textContent = parseInt(productValue.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    createTotalValueTd.textContent = parseInt(productQuantity.value * productValue.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    createTr.appendChild(createNameTd);
    createTr.appendChild(createProductTd);
    createTr.appendChild(createQuantityTd);
    createTr.appendChild(createValueTd);
    createTr.appendChild(createTotalValueTd);


    var table = document.querySelector("#table");
    table.appendChild(createTr);
}

btn.addEventListener("click", function(event) {
    event.preventDefault();
    listProduct(userName.value, productName.value, productQuantity.value, productValue.value);

    createProduct();
});