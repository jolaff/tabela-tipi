const resultado = document.querySelector(".grid-result");

function renderSeção(doc) {
  let div = document.createElement("div");
  //let seção = document.createElement('h4');
  //let descrição = document.createElement('span');
  div.innerText += `Seção ${doc.id}\n${doc.data().descrição}`;
  div.setAttribute("data-id", doc.id);
  div.setAttribute("class", "grid-seção");
  //div.appendChild(seção);
  //div.appendChild(descrição);
  resultado.appendChild(div);
}

db.collection("seção")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderSeção(doc);
    });
  });
