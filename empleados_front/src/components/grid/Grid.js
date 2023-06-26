import React from "react";
import {  Row, Col } from "react-bootstrap";
import { request } from "../helper/helper";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const MySearch = (props) =>{
	let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  return (
    <div>
      <input
        className="form-control"
        style={ { backgroundColor: 'pink' } }
        ref={ n => input = n }
        type="text"
      />
      <button className="btn" onClick={ handleClick }>Click to Search!!</button>
    </div>
  );
};


export default class DataGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: [],
		}
	}
	state = {  }

	componentDidMount() {
		this.getData(); 
	  }
	  getData() {
		request
		  .get(this.props.url)
		  .then((response) => {
			this.setState({rows:response.data})
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  }

	render() { 

		const options = {
			custom: true,
			totalSize: this.state.rows.length,
		  };

		return ( 
			<ToolkitProvider
            keyField="tp"
            data={this.state.rows}
            columns={this.props.columns}
            search
          >
            {(props) => (
              <div>
				<hr/>
				
				<PaginationProvider pagination={paginationFactory(options)}>
				{({ paginationProps, paginationTableProps }) => (
                    <div>
                      <Row>
					  <Col>
                          <SizePerPageDropdownStandalone {...paginationProps} />
                        </Col>
                        <Col>
						{/*<Searchbar {...props.searchProps} />*/}
						<MySearch { ...props.searchProps } />
                        </Col>
                      </Row>
                      <BootstrapTable
                        keyField="bt"
                        data={this.state.rows}
                        columns={this.props.columns}
                        {...paginationTableProps}
                        {...props.baseProps}
                      />
                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  )}
				</PaginationProvider>
			  </div>
            )}
          </ToolkitProvider> 
		 );
	}
}
