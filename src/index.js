const express = require("express");
const {PORT}=require('./config/serverConfig');
const setupandstartserver = async () => {
     //creates the express object
    const app=express();
    app.listen(PORT,() => {
          console.log(`server started at port ${PORT}`);
    })
}
setupandstartserver();