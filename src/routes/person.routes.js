const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/person.validation");
const personCtrl = require("./../controllers/personController");

var router = require("express").Router();

//Create the person
router.post("/post", validate(createValidation), personCtrl.create);

//Retrive all the Person 
router.get("/" , personCtrl.findAll);

//Retrive person by id
router.get("/:id", validate(createValidation), personCtrl.findOne);

//update person by id
router.put("/:id" , personCtrl.update);

//delete Person by id
router.delete("/:id", personCtrl.delete);

module.exports = router;