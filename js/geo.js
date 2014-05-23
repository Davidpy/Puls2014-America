var geo = navigator.geolocation;
var opciones = {}
function geo_error(){
	console.log("no se donde estas");
}

function geo_exito(posicion){
	console.log(posicion);
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitud;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
	$('#geo').append(mapa);
}

/*para tomar la localizacion*/
geo.getCurrentPosition(geo_exito, geo_error, opciones);
