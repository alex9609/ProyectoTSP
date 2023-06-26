import Container from "react-bootstrap/Container";
import AudifonosLogitechG733 from "../../img/AudifonosLogitechG733.png";
import MouseGamerM601 from "../../img/MouseGamerM601.png";
import IpadPro2daGen from "../../img/IpadPro2daGen.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import useModal from "../hooks/useModal";
import { useHistory } from "react-router-dom";
import "./main.css";

const Main = () => {
  let history = useHistory();
  //const [isOpenModal, openModal, closeModal] = useModal();

  const producto = (nombreProducto) => (e) => {
    e.preventDefault();
    history.push(
      window.open("/product-description/" + nombreProducto, "_blank")
    );
  };

  //<Login isOpenModal={isOpenModal} closeModal={closeModal}></Login>
  return (
    <Container className="main">
      <Row>
        <Col className="item-uno" onClick={producto("MouseGamerM601")}>
          <h3 className="title-item">Mouse Gamer M601</h3>
          <img
            className="d-block w-100 mouse"
            src={MouseGamerM601}
            alt="First slide"
          />
          <a href="http://localhost:3000/">Comprar</a>
        </Col>
        <Col className="item-dos" onClick={producto("IpadPro2daGen")}>
          <h3 className="title-item">Ipad 2° Gen</h3>
          <img
            className="d-block w-100 ipad"
            src={IpadPro2daGen}
            alt="First slide"
          />
          <a href="http://localhost:3000/">Comprar</a>
        </Col>
        <Col className="item-tres" onClick={producto("AudifonosLogitechG733")}>
          <h3 className="title-item">Audifonos Logitech G733</h3>
          <img
            className="d-block w-100 audifonos"
            src={AudifonosLogitechG733}
            alt="First slide"
          />
          <a href="http://localhost:3000/">Comprar</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
