document.getElementById('addItem').onclick = function() {
  var form = new FormData(document.getElementById('tillForm'));
  fetch('/till/scan-item', {
    method: 'POST',
    body: form
  }).then(function(res) {
    return res.json().then(function(json) {
      var htmlString = '';
      for (var i = 0; i < json[0].length; i++) {
        htmlString +=
        '<li class="list-group-item">' +
          json[0][i][0] + ': £' + json[0][i][1] +
        '</li> ';
      }
      document.getElementById('basketList').innerHTML = htmlString;
    });
  });
};
