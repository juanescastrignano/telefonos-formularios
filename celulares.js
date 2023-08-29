document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario");
    var listaTelefonos = [];

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var marca = document.getElementById("marca").value;
        var modelo = document.getElementById("modelo").value;
        var anio = parseInt(document.getElementById("anio").value);
        var procesador = document.getElementById("procesador").value;
        var ram = document.getElementById("ram").value;
        var almacenamiento = document.getElementById("almacenamiento").value;
        var camara = document.getElementById("camara").value;
        var bateria = document.getElementById("bateria").value;

        var telefono = {
            marca: marca,
            modelo: modelo,
            lanzamiento: anio,
            caracteristicas: {
                procesador: procesador,
                ram: ram,
                almacenamiento: almacenamiento,
                camara: camara,
                bateria: bateria,
            },
        };

        listaTelefonos.push(telefono);
        guardarTelefonosEnLocalStorage(listaTelefonos);
        mostrarTelefonosEnConsola(listaTelefonos);

        formulario.reset();
    });

    function guardarTelefonosEnLocalStorage(telefonos) {
        localStorage.setItem("telefonos", JSON.stringify(telefonos));
    }

    function mostrarTelefonosEnConsola(telefonos) {
        console.log("Lista de Teléfonos:");
        telefonos.forEach(function (telefono, index) {
            console.log(`Teléfono ${index + 1}:`, telefono);
        });
    }
});
