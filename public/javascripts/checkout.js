(function() {
  var basketList     = document.getElementById('basketList');
  var checkoutTotal  = document.getElementById('checkoutTotal');

  (function() {
    fetch('/till/checkout', {
      method: 'GET'
    }).then(function(res) {
      return res.json().then(function(json) {
        _displayTotal(json);
        _printList(json);
      });
    });
  })();

  function _printList(json) {
    var htmlString = '';
    for (var i = 0; i < json[0].length; i++) {
      htmlString += _listItem(json[0][i][0], json[0][i][1], i);
    }
    basketList.innerHTML = htmlString;
  }

  function _displayTotal(json) {
    checkoutTotal.innerHTML =
      '<h1>Total: £' + json[1] + '</h1>';
  }

  function _listItem(item, price, id) {
    return '<li class="list-group-item" id="listId_' + id + '">' +
              item + ': £' + price +
           '</li> ';
  }
})();
