(function() {
  var basketList     = document.getElementById('basketList');
  var checkoutTotal  = document.getElementById('checkoutTotal');
  var payBtn         = document.getElementById('payBtn');
  var payForm        = document.getElementById('payForm');
  var payPage        = document.getElementById('payPage');

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

  payBtn.onclick = function pay() {
    var form = new FormData(payForm);
    fetch('/till/pay', {
      method: 'POST',
      body: form
    }).then(function(res) {
      return res.json().then(function(json) {
        _renderSuccessTemplate(json);
      });
    });
  };

  function _renderSuccessTemplate(json) {
    payPage.innerHTML =
    '<h1>' + json[3] + '</h1>' +
    '<hr />' +
    '<h1>Change: £' + json[0] + '</h1>' +
    '<br />' +
    '<a href="/"><h3>Shop again?</h3></a>';
  }

  //Prevent enter key from submitting the form like normal
  $('#payForm').submit(function(e){
    e.preventDefault();
    goButton();
    return false;
  });
})();
