const {FlightRepository} = require('../repository/index');

const{AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService
{
    constructor()
    {
      
        this.flightRepository=new FlightRepository();
        this.airplaneRepository=new AirplaneRepository();

    }
    async createFlight(data)
    {
        try{
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw {error: 'arrival time should be greater than the departure time'};
            }
          const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
           const flight= await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
          return flight;
        }catch(error){
            console.log(error);
            console.log("something went wrong in the service layer");
            throw {error};

        }
    }
    async getAllFlightData(data)
    {
        try{
                const flights = await this.flightRepository.getAllFlight(data);
                return flights;
        }catch(error){
            console.log("something went wrong in the service layer");
             throw {error};
        }
    }
    async getFlight(flightId)
    {
        try{
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        }catch(error){
            console.log("something went wrong in the service layer");
        }
    }
    async updateFlight(flightId,data){
        try{
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        }catch(error){
            console.log("something went wrong in the service layer");
        }
    }
}
module.exports=FlightService;