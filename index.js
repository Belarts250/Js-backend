const express = require("express")
const dbConnection =  require("./models/mongodb")
const useDbController = require("./controllers/userControllerDb")
const useApiController = require("./controllers/userController")
const app = express()
const logging = function(req,res,next){
    console.log("I am intercepting all requests")
    next()
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logging)
app.use("/api/users", useApiController);
app.use("/users", useDbController);
dbConnection()
app.listen(3000, () => console.log('Server started on port 3000'));

