// Variables

//Tomar la URL de la paguina
/* let URLactual = window.location.href
alert(URLactual);
 */
function getGET(){
  var loc = window.location.href;
  var getString = loc.split('?')[1];
  var GET = getString.split('&');
  var get = {};//this object will be filled with the key-value pairs and returned.

  for(var i = 0, l = GET.length; i < l; i++){
     var tmp = GET[i].split('=');
     get[tmp[0]] = unescape(decodeURI(tmp[1]));
  }
  return get;
}
var get = getGET();


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

// Metodos publicos

// Metodos privados



