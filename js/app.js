var enlaces = document.getElementsByTagName('a');
console.log(enlaces);
var result= enlaces.length;
console.log(result);
var cont=0;
for(var i=0; i<result; i++){
  if(enlaces[i].href==""){
    cont += 0;
  }else{
    cont += 1;
  }
}
document.getElementById('num_enlaces').innerHTML = cont;
