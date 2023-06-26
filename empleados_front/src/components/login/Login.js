import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Modal from "../modal/modal";
//import useModal from '../hooks/useModal';
import Row from "react-bootstrap/Row";
import "./login.css";
import app from "../../app.json";
import axios from "axios";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calculaExtraccionSesion } from "../helper/helper";
import Loading from "../loading/Loading";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const { APIHOST } = app;
const cookies = new Cookies();

const Login = ({ isOpenModal, closeModal }) => {
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  async function ingreso(e) {
    e.preventDefault();
    var { usuario, password } = document.forms[0];
    console.log(usuario.value);

    setLoading(true);
    await axios
      .post(`${APIHOST}usuarios/login`, {
        usuario: usuario.value,
        pass: password.value,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuario y/o contraseña invalido");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExtraccionSesion(),
          });
          history.push(window.location.reload());
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    setLoading(false);
    closeModal();
  }

  return (
    <Container>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h2 className="titulo">Tec Des</h2>
        <form onSubmit={ingreso}>
          <Row>
            <input
              className="email"
              name="usuario"
              placeholder="Ingresa tu usuario"
            />
          </Row>
          <br></br>
          <Row>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
            />
          </Row>
          <br></br>
          <Row>
            <a className="forgot" href="http://localhost:3000/">
              {" "}
              Olvide mi contraseña
            </a>
          </Row>
          <Row>
            <button className="ingresar" type="submit">
              Ingresar
            </button>
          </Row>
          <Row>
            <a className="register" href="http://localhost:3000/">
              {" "}
              No tengo cuenta. Quiero registrarme
            </a>
          </Row>
        </form>
      </Modal>
      <Loading show={loading} />
    </Container>
  );
};

export default Login;
