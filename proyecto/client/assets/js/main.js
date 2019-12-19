// Variables

//Tomar la URL de la paguina
/* let URLactual = window.location.href
alert(URLactual);
 */



// Eventos
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Agregar Texto ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })


  
// Main

// Local Storage expiration

var hours = 24; // Reset when storage is more than 24hours
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}

// Validat if token exists on local storage. if not, redirects to login
let token = window.localStorage.getItem('token');
if(!token ){
  if (window.location.href != window.location.origin + "/") {
    window.location.href = window.location.origin;
  }
} else {
  document.getElementsByTagName("BODY")[0].style = "";
}


// Metodos publicos

// Metodos privados



