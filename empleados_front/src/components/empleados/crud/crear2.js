import React from 'react'
import { Container,Row } from 'react-bootstrap';
import "../empleados.css"

class EmpleadosCrear extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
			<Container id='empleados-crear-container'>
				<Row>
					<h1>Crear</h1>
				</Row>

			</Container>
		 );
	}
}
 
export default EmpleadosCrear;