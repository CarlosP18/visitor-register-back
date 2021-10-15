const { Schema, model } = require("mongoose");

const RegistroSchema = Schema({
  cedula: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },

  lastname: {
    type: String,
    require: true,
  },

  phone: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  registerDate: {
    type: String,
    require: true,
  },
  plateNumber: {
    type: String,
    require: false,
  },
  initialTime: {
    type: String,
    require: true,
  },
  endTime: {
    type: String,
    require: true,
  },
});

module.exports = model("registro", RegistroSchema);
