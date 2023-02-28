var values = document.querySelectorAll(".values")

values.forEach(vls => {

    var value = vls.querySelector(".value").textContent
    vls.querySelector(".value").textContent = parseInt(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    var quantity = vls.querySelector(".quantity").textContent

    if (isNaN(value)) {
        var invaidNumber = value.replace('R$', '')

        vls.querySelector(".value").textContent = parseInt(invaidNumber).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        var sum = invaidNumber * quantity;
        return vls.querySelector(".totalValue").textContent = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    if (isNaN(quantity)) {
        var user = vls.querySelector(".user").textContent
        var product = vls.querySelector(".product").textContent

        console.log("Insira um valor certo. Erro no pedido do usúario: " + user + " pedindo um(a) " + product)
        vls.querySelector(".quantity").textContent = "Valor inválido"
        return vls.querySelector(".totalValue").textContent = parseInt(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    var sum = value * quantity
    vls.querySelector(".totalValue").textContent = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
});