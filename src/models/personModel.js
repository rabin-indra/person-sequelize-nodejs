// const { DataTypes } = require("sequelize/types");
// const { Sequelize } = require(".");

module.exports = (Sequelize, DataTypes) => {
    const Person = Sequelize.define("persons", {
        name : DataTypes.STRING,
        address : DataTypes.STRING,
        
    },{
        timestamps : false
    });
    return Person;
};