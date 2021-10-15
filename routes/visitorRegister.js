const { Router } = require("express");
const {
  postInfo,

  getInfo,
} = require("../controllers/visitorController");

const { check } = require("express-validator");

const router = Router();

router.post(
  "/",
  [check("cedula", "Numero de cedula es obligatorio").not().isEmpty()],
  [check("name", "Nombre es obligatorio").not().isEmpty()],
  [check("lastname", "Apellido es obligatorio").not().isEmpty()],
  [check("phone", "Telefono es obligatorio").not().isEmpty()],
  [check("company", "Nombre de la empresa es obligatorio").not().isEmpty()],
  [check("registerDate", "Nombre es obligatorio").not().isEmpty()],
  [check("initialTime", "Hora de entrada es obligatorio").not().isEmpty()],
  [check("endTime", "Hora de salida es obligatorio").not().isEmpty()],
  postInfo
);

router.get(
  "/",
  [check("cedula", "Numero de cedula es obligatorio").not().isEmpty()],
  getInfo
);

module.exports = router;
