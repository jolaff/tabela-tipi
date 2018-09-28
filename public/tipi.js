const seção = document.querySelector("#seção");

function renderNCM(doc) {
  let li = document.createElement("li");
  let descrição = document.createElement("span");
  let notas = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  descrição.textContent = doc.data().descrição;
  notas.textContent = doc.data().notas;

  li.appendChild(descrição);
  li.appendChild(notas);

  seção.appendChild(li);
}

db.collection("seção")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderNCM(doc);
    });
  });
