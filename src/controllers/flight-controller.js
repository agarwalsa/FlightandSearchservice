const {FlightService} = require('../services/index');
const flightService=new FlightService();
const create = async (req,res) => {
    try{
   const flight =  await flightService.createFlight(req.body);
   return res.status(201).json({
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
module.exports={
    create
}