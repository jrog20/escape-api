class Flights {
  constructor() {
    this.flights = []
    this.adapter = new FlightsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadFlights()
  }

  fetchAndLoadFlights() {
    this.adapter.getFlights().then(flights => {
      console.log(flights)
    })
  }
}
