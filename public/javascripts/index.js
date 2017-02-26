(function() {
  var addItemBtn = document.getElementById('addItem');
  var basketList = document.getElementById('basketList');
  var tillForm   = document.getElementById('tillForm');

  addItemBtn.onclick = function() {
    var form = new FormData(tillForm);
    fetch('/till/scan-item', {
      method: 'POST',
      body: form
    }).then(function(res) {
      return res.json().then(function(json) {
        _printList(json);
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
})();
