$(document).ready(function(){
    traerDatosApi();
    });

//FUNCIONES ACORDEON
function abrirModal() {
    document.getElementById("mi-modal").style.display = "block";
  }
  
  function cerrarModal() {
    document.getElementById("mi-modal").style.display = "none";
  }
  
//FUNCION POPUP

  function abrirPopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

//FUNCIONES PARA VALIDAR CAMPOS DE FORMULARIO

  function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    
// Validar que se haya ingresado un email válido
    var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegEx.test(email)) {
      alert("Por favor ingrese un email válido");
      return false;
    }
    
//Validar que el campo no este vacio
    if (telefono == "") {
        alert("Debe ingresar un telefono");
        return false;
      }
//Validar que el campo sea numerico
      if (telefono < 0) {
        alert("Debe ingresar un telefono");
        return false;
      }

//Validar que el campo no este vacio
    if (edad == "") {
        alert("Debe ingresar una edad");
        return false;
      }
//Validar que sea mayor de edad
    if (edad < 18){
        alert("Debe ser mayor de edad");
        return false;
      }
// Validar que se haya ingresado un nombre
    if (nombre == "") {
      alert("Por favor ingrese su nombre");
      return false;
    }
  
// Validar que se haya ingresado un mensaje
    if (mensaje == "") {
      alert("Por favor ingrese su mensaje");
      return false;
    }
  
// Si se pasan todas las validaciones, se puede enviar el formulario
    return true;
  }

//Funcion api
        function traerDatosApi(){
            $.ajax({
                type: "get",
                url: "https://www.themealdb.com/api/json/v1/1/random.php",
                
                
                error: function(data, textStatus, xhr) {
                    console.log(textStatus)
                },
                success: function (data, textStatus, xhr) {
                   console.log(data)
                   $("#infoApi").append("<p><strong>Uniformes tocino te recomienda el siguiente Plato para la comida de hoy:</strong> </p>");
                   $("#infoApi").append("<p>Categoria: </p>");
                   $("#infoApi").append("<p>"+ data.meals[0].strCategory+"</p>");
                   $("#infoApi").append("<p>Nombre del plato: </p>");
                   $("#infoApi").append("<p>"+ data.meals[0].strMeal+"</p>");
                   
                }
            });	

        }




       



        
       
      