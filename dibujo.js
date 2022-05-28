

var texto = document.getElementById("tlineas");
var texto2 = document.getElementById("tlineas2");
var boton2 = document.getElementById("boton");
var op = document.getElementById("opera");

boton2.addEventListener("click",dibujoporclick)


function dibujoporclick()
{
var x = parseInt(texto.value);
var x1 = parseInt(texto2.value);
var opcion = parseInt(op.value);

switch (opcion){
	case 1:
	var c = x + x1;
	document.write("su suma es: " + c);
	break;

	case 2:
	var c = x-x1;
    document.write("la resta es " +c);
    break;

    case 3:
    var c = x * x1;
	document.write("su multiplicacion es " + c);
	break;

	case 4:
	var c = x/x1;
	document.write("la respuesta de su divicion es " + c);
	break;

	case 5:
	var c = x*x;
	var b = x1*x1;
	document.write("<br>" + "su respusta de elevacion al cuadrado es " + c);
	document.write("<br>"  + " su segunda respuesta al cuadrado es " + b);
	break;

	case 6:
	var c = Math.sqrt(x);
	var b = Math.sqrt(x1);
	document.write("<br>" +"la respuesta de la raiz cuadrada es " + c);
	document.write("<br>" +"la segunda rspuesta de la raiz cuadrada es " + b);
	break;

	case 7:
	if(x % 2 == 0){
			document.write("<br>", x + " ES UN NUMERO PAR");
		}else{
			document.write("<BR>", x +  "no es un numero par");	
		}if(x1 % 2 == 0){
			document.write("<br>", x1 + "es un numero par");
		}else{
			document.write("<br>", x1 +  "no es un numero par");
			

		}
		break;


	case 8:
	var c = Math.cbrt(x);
	var b = Math.cbrt(x1);
	document.write("<br>" + c +  " es tu raiz cuadrada de " + x);
	document.write("<br>" + b +  " es tu raiz cuadrada de " + x1);	
	break;

	case 9:
	var c = x*x1/100;
	document.write(" el " +  x1  + " porciento "  +  " de "  +  x  +  " es "   +  c);
	break;

	case 10:
	var j=0,j2=0;

		if (x == 0 || x == 1 || x == 4){
			document.write(x+" No es primo!");
			document.write("<br>");
		}
	     for (var i = 1; i <= x; i++) { 
	    	if(x%i==0){
	    		j++; 
	    	}
	    } if(j==2){
	    	document.write(x+"  Es primo ");
	    	document.write("<br>");
	    }
	    else{
	    	document.write(x+" No es primo");
	    	document.write("<br>");
	    }
 // LO MISMO PERO AHORA PARA Y 
 if (x1 == 0 || x1 == 1 || x1 == 4){
			document.write(x1+" No es primo");
			document.write("<br>");
		}
	     for (var e = 1; e <= x1; e++) {
	    	if(x1%e==0){
	    		j2++; 
	    	}
	    } if(j2==2){
	    	document.write(x1+"  Es primo  ");
	    	document.write("<br>");
	    
	    }else{
	    		document.write(x1+" No es prim0");
	    		document.write("<br>");//aca empieza
	    }
	    break;

	 case 11:
	 var c = x/x1;
	document.write ("sus minutos a horas son " + c);
	break;

	case 12:
	while (x>1){
		if (x%2==1){
			x = (x*3) + 1;
			document.write(","+x);
			document.write("<br>")
		}else {
			x = x/2;
			document.write(","+x);
			document.write("<br>")
		}
		while (x1>1){
		if (x1%2==1){
			x1 = (x1*3) + 1;
			document.write(","+x1);
			document.write("<br>")
		}else {
			x1 = x1/2;
			document.write(","+x1);
			document.write("<br>")
		}
	}

}
break;
          case 13:
          var x;
	    var h = 0;
	    var y = 1;
	    var z;
	    document.write("su serie fibonacci es: ");
	    for (var ñ=1; ñ<=x; ñ++) {
	    z = h;
	    h=y+h
	    y=z;
	    document.write(" "+z);
	    }
	    var x1;
	    var h = 0;
	    var y = 1;
	    var c;
	    document.write("su serie fibonacci es: ");
	    for (var i=1; i<=x1; i++) {
	    c = h;
	    h=y+h;
	    y=c;
	    document.write(" "+ c);
	    

}
	    break;
	    
}
}