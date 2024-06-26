const{Op}=require('sequelize');
const{City,Airport}=require('../models/index');
class CityRepository{

    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async createCities(data){
        try{
            const cities = await City.bulkCreate(data);
            return cities;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }
    //data here is object name:"pragraj" means updating name with pragraj
    async updateCity(cityId,data){
        try{
            //the below approach work fine but will not return the updated object so we used this new one which will return an updated 
        //   const city=await City.update(data,{
        //     where:{
        //         id: cityId
        //     }
        //   });
        const city=await City.findByPk(cityId);
        city.name=data.name;
        await city.save();
          return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAirports(cityId)
    {
        try{
            const cities = await City.findAll({include :[{
                model: Airport,
                as: 'cityId',
                 
          where: {cityId: cityId}  }]});
             return cities;
        }catch (error){
            
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(cityId)
    {
        try{
         const city=await City.findByPk(cityId);
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllCities(filter){
        try{
            if(filter.name){
                const city = await City.findAll({
                    where: {
                        name: {
                          [Op.startsWith]: filter.name
                        }
                    }
                });
                return city;
            }
            const city = await City.findAll();
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;