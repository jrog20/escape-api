// Communicates with the API and gives info to frontend (the controller)

class FlightsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/flights'
  }

  getFlights() {
    return fetch(this.baseUrl).then(res => res.json())
  }
}