const {Sequelize, DataTypes} = require("sequelize");
const dbSequelize = new Sequelize('sequelize','root','password',{
    host : 'localhost',
    dialect : 'mysql',
    
});

dbSequelize.authenticate()
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log('error :' +err);
});


const db = {};
db.Sequelize = Sequelize;
db.dbSequelize = dbSequelize;


db.dbSequelize.sync({force : false})
.then(() => {
    console.log("Sync");
});
db.Person = require("./personModel")(dbSequelize, DataTypes);

module.exports = db;