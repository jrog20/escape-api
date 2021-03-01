class Api::V1::FlightsController < ApplicationController
  def index
    @flights = Flight.all
    render json: @flights, status: 200
  end

  def show
    @flight = Flight.find(params[:id])
    render json: @flight, status: 200
  end

  def create
    @flight = Flight.create(flight_params)
    render json: @flight, status: 200
  end

  def update
    @flight = Flight.find(params[:id])
    @flight.update(flight_params)
    render json: @flight, status: 200
  end

  def destroy
    @flight = Flight.find(params[:id])
    @flight.delete
    render json: {flightId: @flight.id}
  end

  private
  def flight_params
    params.require(:flight).permit(:body)
  end

end
