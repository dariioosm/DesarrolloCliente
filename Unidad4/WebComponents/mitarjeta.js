const fragmento = document.getElementById("plantilla-tarjeta");
titulos.forEach((t) => {
 const instancia = document.importNode(fragmento.content, true);
instancia.querySelector(".titulo").innerHTML = t.titulo;
instancia.querySelector(".subtitulo").innerHTML = t.subtitulo;
document.getElementById("tarjeta-titulos").appendChild(instancia);
});
