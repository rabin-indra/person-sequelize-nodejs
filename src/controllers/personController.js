const {Person , Sequelize:{ Op }} = require("./../models");

//create and save Person
exports.create = (req, res) => {
    // console.log("request:",req.body);

    //create person
    const person = {
        name : req.body.name,
        address : req.body.address
    };

    //save person
console.log("Person:",Person);
    Person.create(person)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || "Problem creating the person."
        });
    });
}

// retrive all person
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Person.findAll({condition})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Problem occured while retriving all persons."
        })
    })
}

// find by id

exports.findOne = (req, res) => {
    const id = req.params.id;
    Person.findByPk(id)
    .then(data => {
    if(data) {
        res.send(data)
    }
    else {
        res.status(400).send({
            message :
            err.message || `Could not find the person with id : ${id}. `
        })
    }
    })
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || `Error retriving person with id : ${id}.`
        })
    })
}

//update person by  id

exports.update = (req, res) => {
    const id = req.params.id;
    Person.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Person was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Person with id=${id}. Maybe Person was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Person with id=" + id
          });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Person.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Person was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Person with id=${id}. Maybe Person was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Person with id=" + id
        });
      });
  };

