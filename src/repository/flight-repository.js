const{Flights}=require('../models/index');
const{Op}=require('sequelize');
class FlightRepository{

     #createFilter(data)
     {
        let filter = {}
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId)
        {
            filter.departureAirportId = data.departureAirportId;
        }
        let pricefilter = [];
        // if(data.minPrice&&data.maxPrice)
        // {
        //     Object.assign(filter,{price: {[Op.between]:[data.minPrice,data.maxPrice]}});
        // }
        if(data.minPrice)
        {
            // Object.assign(filter,{price: {[Op.gte]:data.minPrice}});
            pricefilter.push({price: {[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice)
        {
            // Object.assign(filter,{price: {[Op.lte]:data.maxPrice}});
            pricefilter.push({price: {[Op.lte]:data.maxPrice}});
        } 
        Object.assign(filter,{[Op.and]:pricefilter});
      
            return filter;
     }

    async createFlight(data)
    {
        try{
               const flight = await Flights.create(data);
               return flight;
        }catch(error){
             console.log("SOMETHING WENT WRONG IN THE REPOSITORY LAYER");
             throw {error};
        }
    }
    // async getFlight(flightId)
    // {
    //     try{
    //          const flight = Flights.findByPk(flightId);
    //          return flight;
    //     }catch(error){
    //         console.log("something went wrong in the repository layer");
    //         throw {error};
    //     }
    // }
    async getAllFlight(data)
    {
        try{
             const filterObject = this.#createFilter(data);
             const flight = await Flights.findAll({
                where: filterObject
             });
             return flight;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;
