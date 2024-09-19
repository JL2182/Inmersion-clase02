let listaNombresGastos = [];
let listaValoresGastos = [];
let listaCategoriasGastos = [];
let listaFechasGastos = [];

//Esta funcion se invoca al momento de que el usuario hace click  en el boton de agregar gasto

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let categoriaGasto = document.getElementById('categoriaGasto').value;
    let fechaGasto = document.getElementById('fechaGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);


    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaCategoriasGastos.push(categoriaGasto);
    listaFechasGastos.push(fechaGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    actualizarListaGastos();
    //alert('Click del usuario'); 

    if (valorGasto > 150) {
        alert("¡Cuidado! El gasto es mayor a 150 USD. ¿Estás seguro de registrarlo?");
    }

}

function actualizarListaGastos() {

    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {

        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}  - ${listaCategoriasGastos[posicion]} - ${listaFechasGastos[posicion]}
        
                    <button onclick="eliminarGasto(${posicion});">Eliminar Gasto</button>
                    <button onclick="actualizarGasto(${posicion});">Actualizar</button>    
                    </li>`;
        //Calculamos el total de gastos

        totalGastos += Number(valorGasto);

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('categoriaGasto').value = '';
    document.getElementById('fechaGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function actualizarGasto(posicion) {
    // Obtener los nuevos valores del usuario (por ejemplo, en un modal o directamente en la lista)
    const nuevoNombre = prompt("Ingrese el nuevo nombre del gasto:");
    const nuevoValor = parseFloat(prompt("Ingrese el nuevo valor del gasto:"));

    // Actualizar los arreglos
    listaNombresGastos[posicion] = nuevoNombre;
    listaValoresGastos[posicion] = nuevoValor;

    // Actualizar la lista en el DOM
    actualizarListaGastos();
}