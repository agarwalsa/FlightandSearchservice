const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');
const flightService=new FlightService();
const create = async (req,res) => {
    try{
      
      let FlightRequestData = {
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportid: req.body.departureAirportid,
        arrivalAirportid: req.body.arrivalAirportid,
        arrivalTime: req.body.arrivalTime,
        price: req.body.price,
        departureTime:  req.body.departureTime
      }
   const flight =  await flightService.createFlight(FlightRequestData);
   return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            
            message:"able to create the flight in a successful manner here",
            error:{}
   });
    }catch(error){
        console.log(error);
        return res.status(500).json({
          data:{},
          success:false,
          message:"not able to create the corresponding  flight",
          error:error
        });
    }
}
const getAll = async (req,res) => {
    try{
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.OK).json({
        data:response,
        success:true,
         message:"able to fetch  the flights in a successful manner here",
        error:{}
      });
    }catch(error){
        console.log(error);
        return res.status(500).json({
          data:{},
          success:false,
          message:"not able to get the  flights",
          error:error
        });
    }
}
module.exports={
    create,
    getAll
}