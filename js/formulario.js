var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"), 
	$button = $("#mostrar-form"),
	$lista = $("#contenido"),
	$primerPost = $('.item').first(); /*tomamos el primer elemento del tipo item*/

	
function mostrarFormulario(){
	$form.slideToggle() /*Oculta o muestra el formulario sgun el estado. */
	return false;
}	

/*
function agregarPost(){
	var url = $url.val(), 
		titulo = $titulo.val(),
		$clone = $primerPost.clone();
		
	$clone.find(".titulo_item a")
		.text(titulo)
		.attr('href', url);
	
	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn;
	
	return false;
}
*/

function agregarPost(){
	var newTitulo = $titulo.val(),
		newUrl = $url.val(),
		$clone = $primerPost.clone();

	
	$clone.find('.titulo_item a')
		.text(newTitulo)
		.attr('href', newUrl)
	
	$clone.hide()

	$lista.prepend($clone);
	
	$clone.fadeIn();
	
	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.slideDown();	

}


//Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost);
