const respostesCorrectes = ["162", "Pastanaga", "5", "8", "I9"];

function show(n) {
  document.querySelectorAll('.pregunta').forEach((q,i) => q.classList.toggle('activa', i===n));
}

function next(n) { 
  show(n); 
}

function prev(n) { 
  show(n-2); 
}

function finish() {
  let correctes = 0;
  for (let i=1; i<=5; i++) {
    const val = document.querySelector('input[name="p'+i+'"]:checked');
    if (val && val.value === respostesCorrectes[i-1]) correctes++;
  }
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('resultats').style.display = 'block';
  document.getElementById('puntuacio').innerHTML = `<h3>Puntuació: ${correctes}/5</h3>`;
}

function restart() {
  document.querySelectorAll('input[type="radio"]').forEach(r=>r.checked=false);
  show(0);
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('resultats').style.display = 'none';
}

// Initialize the quiz
show(0);
