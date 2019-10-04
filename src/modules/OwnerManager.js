const URL = "http://localhost:5002"
let O = "owners"

export default {
  get(id) {
    return fetch(`${URL}/${O}/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${URL}/${O}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${URL}/${O}/${id}`, {
        method: "DELETE"
      })
      .then(result => result.json())
  },
  post(newOwner) {
    return fetch(`${URL}/${O}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(result => result.json())
  },
  update(editedOwner) {
    return fetch(`${URL}/${O}/${editedOwner.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedOwner)
    }).then(response => response.json());
  }
}