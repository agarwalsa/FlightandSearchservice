const {FlightRepository} = require('../repository/index');

const{AirplaneRepository} = require('../repository/airplane-repository');
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
}
module.exports=FlightService;