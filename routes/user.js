//primero requerimos el metodo Router() del modulo express para el enrutador especifico
let router = require("express").Router();
//desestructurar los metodos que necesitamos de user
let { create } = require("../controllers/user");

router.route("/").post(create);

module.exports = router;
