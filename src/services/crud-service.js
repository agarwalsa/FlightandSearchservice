class CrudService{
    constructor(repository){
        this.repository=repository;
    }
    async create(data){
             try{
            const result = await this.repository.create(data);
            return result;
             }catch(error){
                console.log("something went wrong in the service layer");
                throw error;
             }
    }
    async destroy(modelId){
             try{
              const response =  await this.repository.destroy(modelId);
               return response;
             }catch(error){
                console.log("something went wrong in the service layer");
                throw error;
             }
    }
    async get(modelId){
        try{
               const result = await this.repository.get(modelId);
                 return result;
        }catch(error){
            console.log("something went wrong in the service layer");
            throw error;
        }
    }
    async getAll(){
          try{
            const result = await this.repository.getAll();
            return result;
          }catch(error){
            console.log("something went wrong in the service layer");
            throw error;
          }
    }
    async update(modelId,data){
           try{
             const result = await this.repository.updata(modelId,data);
             return result;
           }catch(error){
            console.log("something went wrong in the service layer");
            throw error;
           }
    }

}
module.exports = CrudService;