import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Modal from "../modal/modal";
import app from "../../app.json";
//import useModal from '../hooks/useModal';
import Row from "react-bootstrap/Row";
import "./signUp.css";
import axios from "axios";
import Loading from "../loading/Loading";
import { useState } from "react";
const { APIHOST } = app;

const SignUp = ({ isOpenModal, closeModal }) => {
  const [loading, setLoading] = useState(false);

  async function ingreso(e) {
    e.preventDefault();
    var { nombre, apellido, usuario, password, password2 } = document.forms[1];
    setLoading(true);

    var user = {
      nombre: nombre.value,
      apellido: apellido.value,
      usuario: usuario.value,
      password: password.value,
      password2: password2.value,
    };

    if (user.password !== user.password2) {
      alert("Las contraseñas no coinciden");
      setLoading(false);
      closeModal();
      return;
    }

    if (
      user.nombre === "" ||
      user.apellido === "" ||
      user.usuario === "" ||
      user.password === "" ||
      user.password2 === ""
    ) {
      alert("Alguno de los campos esta vacio por favor llenalos");
      setLoading(false);
      closeModal();
      return;
    }

    // creating a post request
    await axios
      .post(`${APIHOST}usuarios/`, {
        usuario: user.nombre,
        pass: user.apellido,
        nombre: user.usuario,
        apellido: user.password,
      })
      .then((res) => {
        console.log(res);
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
        <p className="titulo subtitulo">Formulario de registro</p>
        <form onSubmit={ingreso}>
          <Row>
            <input
              className="label-info"
              name="nombre"
              placeholder="Ingresa tu nombre"
            />
          </Row>
          <br></br>
          <Row>
            <input
              className="label-info"
              name="apellido"
              placeholder="Ingresa tu apellido"
            />
          </Row>
          <br></br>
          <Row>
            <input
              className="label-info"
              name="usuario"
              placeholder="Ingresa tu email"
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
            <input
              className="password"
              type="password"
              name="password2"
              placeholder="Repite tu contraseña"
            />
          </Row>
          <br></br>
          <Row>
            <button className="ingresar" type="submit">
              Registrar
            </button>
          </Row>
          <Row>
            <a className="register" href="http://localhost:3000/">
              Ya tengo una cuenta{" "}
            </a>
          </Row>
        </form>
      </Modal>
      <Loading show={loading}></Loading>
    </Container>
  );
};

export default SignUp;
