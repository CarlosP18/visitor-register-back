const { response } = require("express");
const { validationResult } = require("express-validator");
const Registro = require("../models/Registro");

const postInfo = async (req, res = response) => {
  try {
    const registro = new Registro(req.body);
    await registro.save();

    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: err.mapped(),
      });
    }

    res.status(201).json({
      ok: true,
      msg: "info",
      registro: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Check",
    });
  }
};

const getInfo = async (req, res = response) => {
  const registros = await Registro.find();
  res.json({
    ok: true,
    msg: "info fetched",
    registros,
  });
};

module.exports = {
  postInfo,

  getInfo,
};
