class Flight {
  constructor(flightJSON) {
    this.id = flightJSON.id
    this.body = flightJSON.body
  }

  renderLi() {
    return `<li>${this.body}</li>`
  }
}