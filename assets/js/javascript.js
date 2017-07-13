var listaFrutas = [];
function agregar() {
  var fruta = document.getElementById('fruta').value;
  listaFrutas.push(fruta);
  var resultado = '';
  for(i in listaFrutas){
    resultado += (Number(i)+1) + '. ' + listaFrutas[i].slice(0,1).toUpperCase() + listaFrutas[i].slice(1) + '<br>';
  }
  document.getElementById('resultado').innerHTML = resultado;
  document.getElementById('agregar').value = '';
}
