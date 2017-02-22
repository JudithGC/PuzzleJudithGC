/*Array que contiene números y luego se desordenan dichos números*/
var arrayNumeros= [1,2,3,4,5,6,7,8];
arrayNumeros.sort(function() {return Math.random() - 0.6}); //Este último número ayuda a que las piezas se desordenen más o menos

/*Función que crea la tabla y se le asignan las imágenes*/
function crearTabla(filas, columnas,array){
    var contador=0;
    document.write("<table>")
        for(var i=0;i<filas;i++){
            document.write("<tr>")
            for(var j=0; j<columnas;j++){
                if(contador!=7){
                    document.write("<th pz='"+arrayNumeros[contador]+"' id='tile-"+arrayNumeros[contador]+"' fila="+i+" columna="+j+"> </th>")
                    contador++;
                }else{
                    document.write("<th  pz='"+arrayNumeros[contador]+"' id='blanca' fila="+i+" columna="+j+"></th>")
                }
            }
            document.write("</tr>")
        }
    document.write("</table>")
}
/*Crear array que contenga todas las imagenes */
function ordenarArray(){
    var arrayImagenes= new Array();
    
    arrayImagenes[0]= "imagenes/1.png";
    arrayImagenes[1]= "imagenes/2.png";
    arrayImagenes[2]= "imagenes/3.png";
    arrayImagenes[3]= "imagenes/4.png";
    arrayImagenes[4]= "imagenes/5.png";
    arrayImagenes[5]= "imagenes/6.png";
    arrayImagenes[6]= "imagenes/7.png";
}
/*Función que comprueba las piezas*/

/*Se inicializan dos variables un contador que irá incrementandose y un boolean que inicializamos a false,porque cuando sea entre en el else se pondrá a true porque a entrado en el y usamos break para cortar la ejecución del programa.

Tenemos dos for que recorren las columnas y las filas.Usamos una variable para guardar el id de la pieza para poder compararlas con el atributo que hemos creado(pz)*/

function comprobarPieza(){
    var contador = 1;
    var fallo= false;
 for(var i=0;i<2;i++){ 
     if(fallo){
         break
     }
     for(var j=0;j<4;j++){
         var comp = $('body table tr:nth-child('+(i +1)+') th:nth-child('+(j + 1) +')').attr('pz')
         if (comp -0 == contador){
            $('.respuesta').text('¡ENHORABUENA!')
         }else{
             $('.respuesta').text('VUELVE A INTENTARLO')
             fallo= true;
             break;
         }
         contador++;
     }
 }
       
}
/*Detección de teclado*/

$(document).ready(function(){
   $("#escribe").keydown(function(event){
       //Guardamos las piezas
       var fila= $('#blanca').attr('fila')
       var piezaBlanca = $('#blanca').attr('pz')
       var columna= $('#blanca').attr('columna')
       var $blanca = $('#blanca')
        //Cuando se detecta la tecla hace la acción de moverla
         switch(event.which){
            case 37:
                 var $ficha = $('[fila='+fila+'][columna='+(columna-0+1)+']')
                 $blanca.attr('id',$ficha.attr('id')).attr('pz',$ficha.attr('pz'))
                 $ficha.attr('id','blanca').attr('pz',piezaBlanca)
                 
                break;
            case 38:
                 var $ficha = $('[fila='+(fila-0+1)+'][columna='+columna+']')
                 $blanca.attr('id',$ficha.attr('id')).attr('pz',$ficha.attr('pz'))
                 $ficha.attr('id','blanca').attr('pz',piezaBlanca)
             
                break;
            case 39:
                 var $ficha = $('[fila='+(fila)+'][columna='+(columna-1)+']')
                 $blanca.attr('id',$ficha.attr('id')).attr('pz',$ficha.attr('pz'))
                 $ficha.attr('id','blanca').attr('pz',piezaBlanca)
              
                break;
            case 40:
                 var $ficha = $('[fila='+(fila-1)+'][columna='+columna+']')
                 $blanca.attr('id',$ficha.attr('id')).attr('pz',$ficha.attr('pz'))
                 $ficha.attr('id','blanca').attr('pz',piezaBlanca)
                $("#parrafo").text("abajo");
                break;
                
        }
     //  $("#parrafo").text("codigoTecla " + String.fromCharCode(event.which) + " es " + event.which);
       
    });
               
        
 });

