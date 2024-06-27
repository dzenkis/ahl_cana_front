document.getElementById('zkladna-cast').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('zkladna-cast-table').classList.add('active');
    document.getElementById('zkladna-cast-table').classList.remove('hidden');
    document.getElementById('playoff-table').classList.add('hidden');
    document.getElementById('playoff-table').classList.remove('active');
});

document.getElementById('playoff').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('playoff-table').classList.add('active');
    document.getElementById('playoff-table').classList.remove('hidden');
    document.getElementById('zkladna-cast-table').classList.add('hidden');
    document.getElementById('zkladna-cast-table').classList.remove('active');
    
});