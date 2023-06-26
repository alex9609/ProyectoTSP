import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF, FaTwitter, FaGoogle, FaSearch } from "react-icons/fa";
import "./header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col className="col1">
              <ul className="iconos">
                <li>
                  <a href="https://localhost:3000">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://localhost:3000">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://localhost:3000">
                    <FaGoogle />
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col2">
              <h2 className="tituloHeader titulo">Tec Des</h2>
              <ul className="menu">
                <li>
                  <a href="http://localhost:3000/">Inicio</a>
                </li>
                <p className="linea">|</p>&nbsp;
                <li>
                  <a href="http://localhost:3000/">Productos</a>
                </li>
                <p className="linea">|</p>&nbsp;
                <li>
                  <a href="http://localhost:3000/">Nosotros</a>
                </li>
                <p className="linea">|</p>&nbsp;
                <li>
                  <a href="http://localhost:3000/">Carrito</a>
                </li>
              </ul>
            </Col>
            <Col className="col3">
              <div className="bar-search">
                <input className="search" placeholder="Buscar producto" />
                <FaSearch />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <hr></hr>
    </>
  );
};

export default Header;
