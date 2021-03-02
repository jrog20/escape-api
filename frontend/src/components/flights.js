// container to hold all the flights

class Flights {
  constructor() {
    this.flights = []
    this.adapter = new FlightsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadFlights()
  }

  fetchAndLoadFlights() {
    this.adapter
      .getFlights()
      .then(flights => {
        flights.forEach(flight => this.flights.push(new Flight(flight)))
      })
      .then(() => {
        this.render()
      })
  }

  // render data to DOM
  render() {
    const flightsContainer = document.getElementById('flights-container');
    flightsContainer.innerText = this.flights.body
  }
}
