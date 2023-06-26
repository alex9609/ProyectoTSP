import React from "react";
import "./products.css";
//Imagenes
import AudifonosLogitechG733 from "../../img/AudifonosLogitechG733.png";
import MouseGamerM601 from "../../img/MouseGamerM601.png";
import IpadPro2daGen from "../../img/IpadPro2daGen.png";
import MonitorGamer from "../../img/MonitorGamer.webp";
import MonitorOdyssey from "../../img/MonitorOdyssey G3.webp";

//
import Card from "../card/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Products = () => {
  let history = useHistory();
  //const [isOpenModal, openModal, closeModal] = useModal();

  const producto = (nombreProducto) => (e) => {
    e.preventDefault();
    history.push(
      window.open("/product-description/" + nombreProducto, "_blank")
    );
  };

  return (
    <>
      <Container>
        <h1 className="titulo">Productos</h1>
        <Row>
          <Col
            className="cont-product"
            onClick={producto("AudifonosLogitechG733")}
          >
            <Card
              source={AudifonosLogitechG733}
              name={"Audifonos Logitech G733"}
              price={15000}
            />
          </Col>
          <Col className="cont-product" onClick={producto("MouseGamerM601")}>
            <Card
              source={MouseGamerM601}
              name={"Mouse Gamer M601"}
              price={20000}
            />
          </Col>
          <Col className="cont-product" onClick={producto("MonitorGamer")}>
            <Card source={MonitorGamer} name={"Monitor Gamer"} price={18000} />
          </Col>
        </Row>
        <Row>
          <Col className="cont-product" onClick={producto("IpadPro2daGen")}>
            <Card
              source={IpadPro2daGen}
              name={"Ipad Pro 2°Gen"}
              price={12000}
            />
          </Col>
          <Col className="cont-product" onClick={producto("MonitorOdyssey")}>
            <Card
              source={MonitorOdyssey}
              name={"Monitor Odyssey G3"}
              price={12000}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
