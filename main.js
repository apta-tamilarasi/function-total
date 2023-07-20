function sum(tam,eng,mat,sci,soc,name)
{
	document.write("NAME="+name+"<br>");
	let total=tam+eng+mat+sci+soc;
	let average=(total/5);
	document.write("total="+total+"<br>")
	return "average="+average+"<br>";
	
}

var a=sum(96,45,78,98,86,"Tamil")
{
	document.write(a+"<br>"+"<br>");
}


var b=sum(78,69,90,56,89,"Arasi")
{
	document.write(b+"<br>"+"<br>");
}