function añadirEventos() {
	document.getElementById('normal').addEventListener('click', function () { elegirEstilo('normal') });
	document.getElementById('minimalista').addEventListener('click', function () { elegirEstilo('minimalista') });
	document.getElementById('mayor-a').addEventListener('click', function () { fuente(+2) });
	document.getElementById('menor-a').addEventListener('click', function () { fuente(-2) });
	document.getElementById('por-defecto').addEventListener('click', function () { fuente(0) });
	document.getElementById('alineado-izq').addEventListener('click', function () { alineado('left')});
	document.getElementById('alineado-der').addEventListener('click', function () { alineado('right')});

}

function elegirEstilo(hoja) {
	csslink.setAttribute("href", hoja + ".css");
}

function fuente(variacion) {
	if (variacion!=0) {
		let tamañoNuevo = (tamaño(contenido) + variacion) + "px";
		contenido.style.fontSize = tamañoNuevo;
	} else {
		contenido.style.fontSize = '16px';
	}
}

function alineado(pos) {
	contenido.style.textAlign = pos;
}
function tamañoDefecto(elem){
    elem.style.fontSize = '16px';
}

function tamaño(elem) {
	return parseInt(elem.style.fontSize.split('px')[0]);
}

window.onload = function() {
	style = document.getElementById('css-style');
	contenido = document.getElementById('contenido');
	csslink = document.getElementById('css-style');
    tamañoDefecto(contenido);
	añadirEventos();
}