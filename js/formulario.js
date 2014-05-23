var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"), 
	$button = $("#mostrar-form"),
	$lista = $("#contenido"),
	$primerPost = $('.item').first(); /*tomamos el primer elemento del tipo item*/


if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000); /*funcion que corre cada cierto tiempo.. setInterval(funcion, tiempo en milisegundos)*/

/*otra funcion es setTimeOut que se ejecuta una sola vez.. a los xx milisegundos..*/
	
function mostrarOcultarFormulario(){
	$form.slideToggle() /*Oculta o muestra el formulario sgun el estado. */
	$lista.slideToggle()
	return false;
}	

function agregarPost(){
	var newTitulo = $titulo.val(),
		newUrl = $url.val(),
		$clone = $primerPost.clone();


	$clone.find('.titulo_item a')
		.text(newTitulo)
		.attr('href', newUrl);

	$clone.hide()

	$lista.prepend($clone);

	$clone.fadeIn();

	mostrarOcultarFormulario();
		
	$titulo.val('');
	$url.val('');	
	
	$clone.slideDown();
	return false;

}

//Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost);

