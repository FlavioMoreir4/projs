var getParams = function(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
          return pair[1];
      }
  }
  return (false);
}

var dataAtual = function () {
  mesNome = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
  dataAtual = new Date();
  mesNum = dataAtual.getMonth();
  return dataAtual.getDate() + ' de ' + (mesNome[mesNum]) + ' de ' + dataAtual.getFullYear();
}
