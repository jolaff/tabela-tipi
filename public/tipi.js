const resultado = document.querySelector('.grid-result');

function renderSeção(doc) {
  let div = document.createElement('div');
  //let seção = document.createElement('h4');
  //let descrição = document.createElement('span');
  div.innerText += `Seção ${doc.id}\n${doc.data().descrição}`;
  
  div.setAttribute('class', 'grid-seção');
  //div.appendChild(seção);
  //div.appendChild(descrição);
  resultado.appendChild(div);
}

db.collection('seção')
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderSeção(doc);
    });
  });

setTimeout(() => {
  const principal = [].slice.call(
    document.getElementsByClassName('grid-seção')
  );
  principal.forEach((el, index) => {
    el.addEventListener('click', ev => {
      console.log(ev.target);
    });
  });
}, 3000);
