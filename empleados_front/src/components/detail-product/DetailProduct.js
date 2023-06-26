import React from "react";
import "./detailProduct.css";
import { Row, Col } from "react-bootstrap";
import { getSession } from "../helper/helper";

const Card = ({ source, name, price, descripcion }) => {
  const comprar = () => {
    if (getSession()) {
      alert("Compra realizada con exito");
    } else {
      alert("Debe iniciar sesion para comprar");
    }
  };
  return (
    <div className="ficha">
      <Row>
        <Col className="col1">
          <img
            className="d-block w-100 producto-image"
            src={source}
            alt="First slide"
          />
        </Col>
        <Col className="col2">
          <h1 className="name-product">{name}</h1>
          <p className="description-product">{descripcion[0]}</p>
          <p className="description-product">{descripcion[1]}</p>
          <p className="description-product">{descripcion[2]}</p>
          <p className="price-product">$ {price}</p>
          <button className="buy-button" onClick={() => comprar()}>
            Comprar
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
