const url = "http://localhost:3000/tarefas";

// obter tarefas
await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// obter uma tarefa
await fetch(`${url}/1a2b`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// criar uma tarefa
await fetch(url, {
  method: "POST",
  body: JSON.stringify({ nome: "Estudar React Native", concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// alterar uma tarefa
await fetch(`${url}/1a2b`, {
  method: "PUT",
  body: JSON.stringify({ nome: "Estudar React", concluida: true }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu ruim!", error.message));

// remover uma tarefa
await fetch(`${url}/1a2b`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Deu ruim!", error.message));
  
