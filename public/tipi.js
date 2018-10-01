const resultado = document.querySelector(".grid-result");

function renderNCM(doc) {
  let div = document.createElement("div");
  let seção = document.createElement("h4");
  let descrição = document.createElement("span");
  seção.innerText = doc.id;
  descrição.innerText = doc.data().descrição;
  div.setAttribute("class", "grid-seção");
  div.appendChild(seção);
  div.appendChild(descrição);
  resultado.appendChild(div);
}

db.collection("seção")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderNCM(doc);
    });
  });