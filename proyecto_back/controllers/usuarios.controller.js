const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const { response } = require("express");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.pass)
    .digest("hex");

  Usuario.findOne(
    { usuario: req.body.usuario, pass: hashedpass },
    function (err, usuario) {
      let response = {
        token: null,
      };

      if (usuario !== null) {
        response.token = jwt.sign(
          {
            id: usuario.id,
            usuario: usuario.usuario,
          },
          "__recret__",
          { expiresIn: "12h" }
        );
      }
      res.json(response);
    }
  );
};

exports.create = function (req, res) {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.pass)
    .digest("hex");

  let usuario = new Usuario({
    usuario: req.body.usuario,
    pass: hashedpass,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  });

  usuario.save(function (err) {
    if (err) {
      console.error(err);
      response.exito = false;
      response.msg = "Error al crear usuario";
      res.json(response);
      return;
    }
  });

  response.exito = true;
  response.msg = "Usuario creado con exito";
  res.json(response);
};
