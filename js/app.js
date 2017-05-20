$(document).ready(function() {
    console.log("Jquery cargado");
});






var hola = $("p");

console.log(hola);


var clase = $(".container");


console.log(clase);


var s3 = $("ul li").eq(2).html();
console.log(s3);



var imdb = (function() {

  // entorno privado

  // Creamos un array para guardar las noticias
  var peliculas = [];














  function agregarPelicula() {


    // Constructor Noticia
    function Pelicula() {
      this.titulo = "";
      this.descripcion = "";
      this.img = "";
    }

    // Creamos un objeto Noticia asignado a una variable
    var pelicula = new Pelicula();

    // Agregamos titulo y cuerpo
    pelicula.titulo = document.getElementById("titulo").value;
    console.log(pelicula.titulo);
    pelicula.descripcion = document.getElementById("descripcion").value;
    console.log(pelicula.descripcion);
    pelicula.img = document.getElementById("img").value;
    console.log(pelicula.img);
    // Si el usuario cargo algo hago esto, caso contrario..
    if (pelicula.titulo && pelicula.descripcion !== null) {
      peliculas.push(pelicula);
      return true;
    } else {
      return false;
    }

  }


  function mostrarPeliculas() {

    // Agarramos el container de noticias (fijate que metodo usamos)
    if (peliculas.length > 0) {


      // capturo el elemento con ID "noticias" (fijate en el HTML)
      var containerPeliculas = document.getElementById("peliculas");


      // Creamos un par de variables para el titulo y parrafo
      var tituloConFormato;
      var parrafoConFormato;


      // Iteramos sobre el array de noticias
      for (var i = 0; i < peliculas.length; i++) {

        // Creamos los elementos y los asignamos
        tituloConFormato = document.createElement("h2");
        parrafoConFormato = document.createElement("p");

        // Agrego el contenido del titulo y noticias
        tituloConFormato.innerHTML = peliculas[i].titulo;
        parrafoConFormato.innerHTML = peliculas[i].descripcion;
        parrafoConFormato.innerHTML = peliculas[i].img;

        // Los agrego al DOM
        containerPeliculas.appendChild(tituloConFormato);
        containerPeliculas.appendChild(parrafoConFormato);
      }

      // Vaciamos el array al finalizar (proba que pasa si sacas esto)
      peliculas = [];

      // Como la carga de noticias salio bien, devolvemos "true"
      return true;

    } else {
      // Si no hay nada en el array noticias devolvemos "false"
      return false;
    }

  }


  // entorno publico
  return {
    agregar: function() {
      // hacer algo
      if (agregarPelicula()) {
        return "Carga de noticias exitosa.";
      } else {
        return "No se ha cargado nada.";
      }

    },
    mostrar: function() {
      if (mostrarPeliculas()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    }
  };

})();

console.log("Carga de JS realizada con exito!");

var botonAgregar = document.getElementById("boton-agregar");
     botonAgregar.onclick = agregarPelicula ();


var botonMostrar = document.getElementById("boton-mostrar");
     botonMostrar.onclick = mostrarPeliculas ();