var initialItems = document.querySelectorAll('#container1 .item');
    var successMessage = document.getElementById('successMessage');

    function allowDrop(event) {
      event.preventDefault();
    }

    function drag(event) {
      event.dataTransfer.setData('text/plain', null);
      event.target.classList.add('dragging');
    }

    function drop(event) {
      event.preventDefault();
      var draggedItem = document.querySelector('.item.dragging');
      var container2 = document.getElementById('container2');
      container2.appendChild(draggedItem);
      draggedItem.classList.remove('dragging');
      successMessage.textContent = 'Item dropped successfully!';
    }

    
    function clearAll() {
      var container1 = document.getElementById('container1');
      var container2 = document.getElementById('container2');

      container1.innerHTML = '';
      container2.innerHTML = '';
      successMessage.textContent = '';

      initialItems.forEach(function(item) {
        container1.appendChild(item.cloneNode(true));
      });
    }