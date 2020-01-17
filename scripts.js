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

let Consult = function (URLI) {
    return fetch(URL, {
        method: "POST",
        body: URLI,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
}

function mask(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("maskExec()", 1)
}
function maskExec() {
    v_obj.value = v_fun(v_obj.value)
}

function mtel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}
function id(el) {
    return document.getElementById(el);
}

var dataAtual = function () {
  mesNome = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
  dataAtual = new Date();
  mesNum = dataAtual.getMonth();
  return dataAtual.getDate() + ' de ' + (mesNome[mesNum]) + ' de ' + dataAtual.getFullYear();
}
