const resultado = document.querySelector('.grid-result');
let pos = 'seção';
let cap = '1';

function renderSeção(doc) {
  let div = document.createElement('div');
  div.innerText += `Seção ${doc.id}\n${doc.data().descrição}`;
  div.setAttribute('data-id', doc.id);
  div.setAttribute('class', 'grid-seção');
  resultado.appendChild(div);
}

function renderCapitulo(doc) {
  console.log(doc.id);
}

switch (pos) {
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
}
