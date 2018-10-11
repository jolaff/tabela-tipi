const resultado = document.querySelector('.grid-result');
let seçãoDescrição = '';
let seçãoNotas = [];

// Object Literals para leitura no banco firestore
let posição = () => ({
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
      renderSeçãoNotas();
      snapshot.docs.forEach(doc => {
        renderCapitulo(doc);
      });
    })
});

//Render inicial da página - chamada da função principal
posição('seção');

//Função que renderiza as seções
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

//Função que renderiza os capítulos
function renderCapitulo(doc) {
  let div = document.createElement('div');
  div.innerText += doc.data().titulo;
  resultado.appendChild(div);
}

//Função que renderiza título e notas da seção antes de renderizar os capítulos
function renderSeçãoNotas() {
  let seçãoDiv = document.createElement('div');
  seçãoDiv.innerText += `${seçãoDescrição}\n${seçãoNotas}`;
  resultado.appendChild(seçãoDiv);
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
