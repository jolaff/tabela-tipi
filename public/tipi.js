const resultado = document.querySelector('.grid-result');
let seçãoDescrição = '';
let seçãoNotas = [];
let posição = pos => ({
  seção: db
    .collection('seção')
    .get()
    .then(snapshot => {
      resultado.innerHTML = '';
      snapshot.docs.forEach(doc => {
        renderSeção(doc);
      });
    }),
  capitulo: db
    .collection('seção')
    .doc(cap)
    .collection('capitulo')
    .get()
    .then(snapshot => {
      resultado.innerHTML = '';
      let seçãoDiv = document.createElement('div');
      seçãoDiv.innerText += seçãoDescrição;
      seçãoDiv.innerText += seçãoNotas;
      resultado.appendChild(seçãoDiv);
      snapshot.docs.forEach(doc => {
        renderCapitulo(doc);
      });
    })
});

posição('seção');

function renderSeção(doc) {
  let div = document.createElement('div');
  div.innerText += `Seção ${doc.id}\n${doc.data().descrição}`;
  div.setAttribute('data-id', doc.id);
  div.setAttribute('class', 'grid-seção');
  resultado.appendChild(div);
  div.addEventListener('click', () => {
    cap = doc.id;
    seçãoDescrição = doc.data().descrição;
    seçãoNotas = doc.data().notas;
    posição('capitulo');
  });
}

function renderCapitulo(doc) {
  let div = document.createElement('div');
  div.innerText += doc.data().titulo;
  resultado.appendChild(div);
}

/* switch (pos) {
  case 'seção':
    db.collection('seção')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          renderSeção(doc);
        });
      });
    break;
  case 'capitulo':
    db.collection('seção')
      .doc(cap)
      .collection('capitulo')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          renderCapitulo(doc);
        });
      });
    break;
} */
