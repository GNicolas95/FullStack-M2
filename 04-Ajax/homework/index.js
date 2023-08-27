/*let friendsHandler = function () {
    let lista = $("#lista")
    lista.empty()

    $.get("http://localhost:5000/amigos", (data) => {
        data.forEach(amigo => {
            let list = document.createElement("li");
            list.innerText = `${amigo.name} es tu amigo numero ${amigo.id}`;
            lista.append(list);
        })
    });
}

let buscarHandler = function() {
    let id = document.querySelector("#input").value;
    let amigo = document.querySelector("#amigo")

    if (id) {
        $.get(`http://localhost:5000/amigos/${id}`, (response) => {
            amigo.innerText = `Nombre: ${response.name}`;
        })
    } else {
        amigo.innerText = "Inserta un valor"
    }
}

let deleteHandler = function () {
    let deleteInput = document.querySelector("#inputDelete").value;
    let succ = document.querySelector("#success");
    let friend;

    if (deleteInput) {
        $.ajax({
            type:"DELETE",
            url:`http://localhost:5000/amigos/${deleteInput}`,
            success: () => {
                succ.innerText = "Tu amigo se elimino con éxito"
                friendsHandler();
            }
        })
    }
}

$("#boton").on("click", friendsHandler);
$("#search").on("click", buscarHandler);
$("#delete").on("click", deleteHandler);*/

let friendsHandler = function () {
    let lista = $("#lista")
    lista.empty()

    $.get("http://localhost:5000/amigos", (response) => {
        response.map((amigo) => {
            let elementoHTML = document.createElement("li")
            elementoHTML.innerText = `${amigo.name} es tu amigo numero ${amigo.id}`
            lista.append(elementoHTML);
        })
    })
}

let searchHandler = function () {
    let id = $("#input").val();

    if (id) {
        $.get(`http://localhost:5000/amigos/${id}`, (response) => {
            $("#amigo").html(`Nombre: ${response.name}`)
    })
    } else {
        $("#amigo").html("Inserte un id");
    }
}

let deleteHandler = function() {
    let id = document.querySelector("#inputDelete").value;
    
    if (id) {
        $.ajax({
            type: "DELETE",
            url: `http://localhost:5000/amigos/${id}`,
            success: () => {
                $("#success").html("Tu amigo fue eliminado con éxito");
                friendsHandler();
                id = "";
            }
        })
    } else {
        $("#success").html("Inserta un ID");
    }
}

$("#boton").on("click", friendsHandler);
$("#search").on("click", searchHandler);
$("#delete").on("click", deleteHandler);
