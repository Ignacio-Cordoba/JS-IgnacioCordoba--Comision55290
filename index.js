
const array = [];
let newUsuario;

function crearusuario() {
  const usuario = {};
  usuario.nombre = document.getElementById("nombre").value;
  usuario.altura = document.getElementById("altura").value;
  usuario.peso = document.getElementById("peso").value;
  usuario.imc = calcularimc(usuario.peso, usuario.altura);
  Swal.fire({
    icon: 'success',
    title: 'Hecho!',
    text: 'Se cargaron sus datos',

  })
  return usuario;
}

function calcularimc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}


const arraycarrito = JSON.parse(localStorage.getItem('carrito')) || []


function AñadirPlanes(plan) {
  arraycarrito.push(plan)
  localStorage.setItem('carrito',JSON.stringify(arraycarrito))
}


let plan1 = {
  nombre: "Musculacion",
  precio: "7000$",
  duracion: "1 mes"
}
let plan2 = {
  nombre: "Calistenia",
  precio: "5000$",
  duracion: "1 mes"
}






function BotonMusculacion() {
  AñadirPlanes(plan1)

}

function BotonCalistenia() {
  AñadirPlanes(plan2)
}
const DatosBoton = [
  { label: 'Imprimir Usuario', id: 'boton' },
  { label: 'Imprimir imc', id: 'boton2' },
  { label: 'Añadir Musculacion al carrito', id: 'boton3' },
  { label: 'Añadir Calistenia al carrito', id: 'boton4' },
  { label: 'Lista de profesionales', id: 'lista_profesionales' },
  { label: 'Mostrar Carrito', id: 'boton_print_carrito' }
];

DatosBoton.forEach(itemboton => {
  const button = document.createElement('button')
  button.textContent = itemboton.label
  button.id = itemboton.id
  
  botonera.appendChild(button)
})

const print_usuario = document.getElementById('print_usuario')
const print_imc = document.getElementById('print_imc')
const boton = document.getElementById('boton')
boton.addEventListener('click', () => {
  
  print_usuario.innerHTML = ''

  array.forEach((usuario, html) => {
    const li = document.createElement("li")
    li.innerHTML = `Usuario ${html + 1}:<br>Nombre: ${usuario.nombre}<br>Altura: ${usuario.altura}<br>Peso: ${usuario.peso}<br>`
    print_usuario.appendChild(li)
  })
})


const boton2 = document.getElementById('boton2')
boton2.addEventListener('click', () => {

  print_imc.innerHTML=''

  array.forEach((usuario,html) => {
  const li= document.createElement("li")
  li.innerHTML =`Usuario ${html +1}: Imc: ${usuario.imc}`
  print_imc.appendChild(li)
 
})
})

const boton3 = document.getElementById('boton3')
boton3.addEventListener('click', () => {
  BotonMusculacion()
  Swal.fire({
    icon: 'success',
    title: 'Hecho!',
    text: 'Se cargo su plan de Musculacion',

  })
})

const boton4 = document.getElementById('boton4')
boton4.addEventListener('click', () => {
  BotonCalistenia()
  Swal.fire({
    icon: 'success',
    title: 'Hecho!',
    text: 'Se cargo su plan de calistenia',

  })
})


const botonCrearUsuario = document.getElementById("crearUsuario");
botonCrearUsuario.addEventListener("click", function () {
  if (validarCampos()) {
    const newUsuario = crearusuario();
    array.push(newUsuario);
  }





const link = "https://jsonplaceholder.typicode.com/users"
const lista = document.getElementById("lista")



const botonProfesionales = document.getElementById('lista_profesionales')
botonProfesionales.addEventListener('click', ListaProfesionales)

function ListaProfesionales() {
  fetch(link)
    .then(response => response.json())
    .then(data => {
      data.sort(usuario => {
        const li = document.createElement("li")
        li.innerHTML = usuario.name + "<br>Telefono: " + usuario.phone
        lista.append(li)
      })
    })
}


boton_mostrar_carrito= document.getElementById('boton_print_carrito')
boton_mostrar_carrito.addEventListener('click',() => {
  print_carrito.innerHTML=""
  arraycarrito.forEach(arraycarrito=> {
    

    const li = document.createElement("li")
        li.innerHTML = arraycarrito.nombre + "<br>" + arraycarrito.precio + "<br>" + arraycarrito.duracion
        print_carrito.append(li)
  })
})


function LimpiarInputs(altura, peso, nombre) {
  return new Promise((resuelto, rechazado) => {
    const inputNombre = document.getElementById(nombre)
    const inputAltura = document.getElementById(altura)
    const inputPeso = document.getElementById(peso)

    if (inputNombre && inputAltura && inputPeso) {
      inputNombre.value = ""
      inputAltura.value = ""
      inputPeso.value = ""
      resuelto()
    } else {
      rechazado(new Error(`No se encontraron los inputs con ID: ${nombre}, ${altura}, ${peso}`))
    }
  })
}


  LimpiarInputs("altura","peso","nombre")
})

function validarCampos() {
  const nombre = document.getElementById("nombre").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (nombre === "") {
    alert("Por favor, ingrese un nombre.");
    return false;
  }

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    alert("Por favor, ingrese una altura y peso válidos.");
    return false;
  }

  return true;
}


