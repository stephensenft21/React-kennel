const URL = "http://localhost:5002"
let E = "employees"
let EWithA = "?_embed=animals"
export default {
  get(id) {
    return fetch(`${URL}/${E}/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${URL}/${E}`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${URL}/${E}/${id}`, {
        method: "DELETE"
      })
      .then(result => result.json())
  },
  post(newEmployee) {
    return fetch(`${URL}/${E}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(result => result.json())
  }, 
  update(editedEmployee) {
    return fetch(`${URL}/${E}/${editedEmployee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployee)
    }).then(response => response.json());
  }, getWithAnimals(id) {
    return fetch(`${URL}/${E}/${id}${EWithA}`)
            .then(result => result.json())
}
}