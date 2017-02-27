(function() {
  var addItemBtn    = document.getElementById('addItem');
  var basketList    = document.getElementById('basketList');
  var tillForm      = document.getElementById('tillForm');
  var checkoutBtn   = document.getElementById('checkoutButton');
  var runningTotal  = document.getElementById('runningTotal');

  addItemBtn.onclick = function() {
    var form = new FormData(tillForm);
    fetch('/till/scan-item', {
      method: 'POST',
      body: form
    }).then(function(res) {
      return res.json().then(function(json) {
        _printList(json);
        _insertRunningTotal(json);
        _insertCheckoutButton();
      });
    });
  };

  function _printList(json) {
    var htmlString = '';
    for (var i = 0; i < json[0].length; i++) {
      htmlString += _listItem(json[0][i][0], json[0][i][1], i);
    }
    basketList.innerHTML = htmlString;
  }

  function _listItem(item, price, id) {
    return '<li class="list-group-item" id="listId_' + id + '">' +
              item + ': £' + price +
           '</li> ';
  }

  function _insertCheckoutButton() {
    if (!(basketList.innerHTML === '' || null)) {
      checkoutBtn.innerHTML =
      '<a href="/checkout" id="checkout" class="btn btn-default">Checkout</a>';
    }
  }

  function _insertRunningTotal(json) {
    runningTotal.innerHTML =
      '<h1>Total: £' + json[1] + '</h1>';
  }

  //Prevent enter key from submitting the form like normal
  $('#tillForm').submit(function(e){
    e.preventDefault();
    goButton();
    return false;
  });
})();
