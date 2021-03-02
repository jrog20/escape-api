// container to hold all the flights

class Flights {
  constructor() {
    this.flights = []
    this.adapter = new FlightsAdapter()
    this.initBindingsAndEventListeners()
    this.fetchAndLoadFlights()
  }

  initBindingsAndEventListeners() {
    this.flightsContainer = document.getElementById('flights-container')
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
    // console.log(this.flights.map(flight => `<li>${flight.body}</li>`).join(" "))
    this.flightsContainer.innerHTML = this.flights.map(flight => `<li>${flight.body}</li>`).join(" ")
  }
}
