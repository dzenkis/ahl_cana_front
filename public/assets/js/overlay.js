 document.getElementById('openOverlay').addEventListener('click', function() {
      document.getElementById('overlay').classList.remove('hidden');
    });

    document.getElementById('closeOverlay').addEventListener('click', function() {
      document.getElementById('overlay').classList.add('hidden');
    });