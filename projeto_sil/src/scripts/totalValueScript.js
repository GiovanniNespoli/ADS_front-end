var values = document.querySelectorAll(".values")

values.forEach(vls => {
    var value = vls.querySelector(".value").textContent
    vls.querySelector(".value").textContent = parseInt(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var quantity = vls.querySelector(".quantity").textContent

    var sum = value * quantity
    vls.querySelector(".totalValue").textContent = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    console.log("QUANTIDADE: " + quantity + "; VALUE: " + value + "; TOTALVALUE: " + sum);
});