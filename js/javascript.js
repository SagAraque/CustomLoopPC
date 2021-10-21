
function registro(){
	document.getElementById('inicio').style.display="none";
	document.getElementById('registro').style.display="block";
}
function inicio(){
	document.getElementById('inicio').style.display="block";
	document.getElementById('registro').style.display="none";
}
var productos=0;
function alerta(){
	productos=productos+1
	alert("Su producto ha sido añadido al carrito. \nProductos en el carrito: "+productos);
}