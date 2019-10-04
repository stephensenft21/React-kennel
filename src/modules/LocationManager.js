const URL = "http://localhost:5002"
let L = "locations"
export default {
  get(id) {
    return fetch(`${URL}/${L}/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${URL}/${L}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${URL}/${L}/${id}`, {
        method: "DELETE"
      })
      .then(result => result.json())
  },
  post(newLocation) {
    return fetch(`${URL}/${L}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocation)
    }).then(result => result.json())
  },
  update(editedLocation) {
    return fetch(`${URL}/${L}/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(response => response.json());
  }
}