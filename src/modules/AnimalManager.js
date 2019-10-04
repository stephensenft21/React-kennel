const URL = "http://localhost:5002"
let A = "animals"
export default {
  get(id) {
    return fetch(`${URL}/${A}/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${URL}/${A}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${URL}/${A}/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(newAnimal) {
    return fetch(`${URL}/${A}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(result => result.json())
  },
  update(editedAnimal) {
    return fetch(`${URL}/${A}/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(response => response.json());
  }
}