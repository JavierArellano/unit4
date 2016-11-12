
function hayCookie(){
    return document.cookie;
}
function crearCookie(id, valor, expir){
    document.cookie = `${id}=${valor}; expires=${expir}}`;
}
function leerCookie(){
    let arra = document.cookie.split('=');
    return arra[1];
}
function cambiaTexto(elem, texto){
    elem.innerHTML = 'hola ' + texto;
}
function obtenerUsuario(){
    return prompt('Introduce tu usuario:')
}
function fechaExpi(min){
    return new Date(Date.now() + (min * 60000)).toGMTString();
}

window.onload = function(){
    textoUsuario = document.getElementById('usu');
    if (hayCookie()){
        cambiaTexto(textoUsuario, leerCookie());
    }else{
        crearCookie('usuario', obtenerUsuario(), fechaExpi(5));
        }
    cambiaTexto(textoUsuario, leerCookie());
}