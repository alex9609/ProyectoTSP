import "./carrousel.css";
import React, { useState } from "react";
import AudifonosLogitechG733 from "../../img/AudifonosLogitechG733.png";
import GamerMSIGF65 from "../../img/GamerMSIGF65.png";
import IpadPro2daGen from "../../img/IpadPro2daGen.png";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container className="contenedor">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="d-block w-100 audifonos"
                  src={AudifonosLogitechG733}
                  alt="First slide"
                />
              </Col>
              <Col>
                <h3 className="title-product">Audifonos Logitech G733</h3>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <img
                  className="d-block w-100 laptop"
                  src={GamerMSIGF65}
                  alt="Second slide"
                />
              </Col>
              <Col>
                <h3 className="title-product">Laptop Gamer MSI GF65</h3>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
		  <Row>
              <Col>
                <img
                  className="d-block w-100 ipad"
                  src={IpadPro2daGen}
                  alt="Second slide"
                />
              </Col>
              <Col>
                <h3 className="title-product">Ipad Pro 2° Generación</h3>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Carrousel;
