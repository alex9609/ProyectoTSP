import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../../helper/helper";
import "../empleados.css";
import DataGrid from "../../grid/Grid";

const columns = [
	{
		dataField: '_id',
		text: 'ID',
		hidden: true,
	},
	{
		dataField: 'nombre',
		text: 'Nombre',
	},
	{
		dataField: 'apellido_p',
		text: 'Primer apellido',
	},
	{
		dataField: 'apellido_m',
		text: 'Segundo apellido',
	},
	{
		dataField: 'telefono',
		text: 'Telefono',
	},
	{
		dataField: 'direccion',
		text: 'Direccion',
	},

	
	
]


export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		rows : [],
	};
  }

  componentDidMount() {
	this.getData(); 
  }
  getData() {
	request
	  .get("empleados")
	  .then((response) => {
		this.setState({rows:response.data})
	  })
	  .catch((error) => {
		console.log(error);
	  });
  }
  

  render() {
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Empleados</h1>
        </Row>
        <Row>
          <DataGrid url="empleados" columns={columns}/>
        </Row>
      </Container>
    );
  }
}
