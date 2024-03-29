const {CityService}=require('../services/index');
const cityService = new CityService();
const create = async (req,res) => {
try{
const city=await cityService.createCity(req.body);
return res.status(201).json({
    data: city,
    success: true,
    message: "successfully created a city",
    error: {}
});
}catch(error){
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message: "city creation not successful",
        error: error
    });
}
}
const createCities=async (req,res) => {
    try{
        const city=await cityService.createCities(req.body);
        return res.status(201).json({
            // data: city,
            // success: true,
            message: "successfully created the cities",
            error: {}
        });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                // data: {},
                // success: false,
                message: "city creation not successful",
                error: error
            });
        }
}
const destroy = async (req,res) => {
    try{
        const response =await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
            error: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city deletion not successful",
            error: error
        });
    }
}
const update = async (req,res) => {
    try{
        const response =await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully updated a city",
            error: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city updation is not successful",
            error: error
        });
    }
}
const getAirports = async (req,res) => {
    try{
        
        const response = await cityService.getAirports(req.params.id);
        return res.status(200).json({
            // data:response,
            // success: true,
            message: "successfully get all the airports belonging to a single city ",
            error: {}
        });
    } catch (error){
        console.log(error);
         return res.status(500).json({
            // data:{},
            // success: false,
            message: "not able to fetch the airports belonging to a particular city",
            error: error
         });
        
    }
}
const get = async (req,res) => {
    try{
        const response =await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully get a city",
            error: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city get is not successful",
            error: error
        });
    }
}
const getAll = async (req,res) => {
    try{
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
        // data : cities,
        // success : true,
        message : "successfully get all the cities",
        error: {}
    });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            // data: {},
            // success: false,
            message: "city get all the is not successful",
            error: error
        });
    }
}
module.exports={
    create,
    createCities,
    destroy,
    update,
    getAirports,
    get,

    getAll
}