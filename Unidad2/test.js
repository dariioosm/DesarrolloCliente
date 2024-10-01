function testUnidad2(){
    console.log(typeof"abc");
    var cadena="abc";
    var cadena2= String("abc");
    var cadena3= new String("abc");
    document.write(typeof cadena);
    document.write("<br/>");
    document.write(typeof cadena2);
    document.write("<br/>");
    document.write(typeof cadena3);
    document.write("<br/>");
    document.write(typeof cadena3.valueOf());
    document.write("<br/>");
    let longitud=10;
    longitud="10";
    document.write(typeof(longitud));
    if(cadena=="abc"){
        var x=10;
        let y=11;
    }
    document.write("<br/>");
    document.write(x);
    document.write("<br/>");
    //document.write(y);
    /*
    let extLet = 1;
    var extVar = 1;
    if (true) {
    let intLet = 10;
    var intVar = 10;
    console.log("Dentro del bloque");
    console.log("extLet:", extLet);
    console.log("extVar:", extVar);
    console.log("intLet:", intLet);
    console.log("intVar:", intVar);
    }
    console.log("Fuera del bloque");
    console.log("extLet:", extLet);
    console.log("extVar:", extVar);
    console.log("intVar:", intVar);
    console.log("intLet:", intLet);
*/
    let animal="Ágila"
    let numPatas=2;
    document.write(animal+numPatas);
    document.write("<br>");
    document.write(animal+numPatas+numPatas);
    let numColas="1";
    cadena="3.1415926";
    let nombre="42";
    let nom = "jon";
    let aprobado=true;
    document.write("<br/>");
    document.write(Boolean(cadena));
    document.write("<br/>");
    document.write(Boolean("0"));
    document.write("<br/>");
    document.write(Boolean(""));
    document.write("<br/>");
    document.write(Boolean(null));
    document.write("<br/>");
    document.write(Boolean(undefined));
    document.write("<br/>");
    document.write(String(nombre));
    document.write("<br/>");
    document.write(aprobado);
    document.write("<br/>");
    document.write(Number(nom));
    document.write("<br/>");
    document.write(Number(cadena)*2);
    document.write("<br/>");
    document.write(Number(aprobado));
    document.write("<br/>");
    document.write(parseInt(cadena));
    document.write("<br/>");
    document.write(parseFloat(cadena));
}
    
