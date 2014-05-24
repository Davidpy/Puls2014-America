$(function(){
	$.get('logos_footer.html', function(codigo){
		$('footer').append(codigo);
		console.log(codigo);
	})
	
	$.get('usuario.json', function(info) {
		var avatar   = new Image();
		avatar.src   = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;

		$('#avatar').append(avatar); 
	});
});