import React from "react";
import "./loading.css";
import {Spinner} from 'react-bootstrap'

const Loading = ({show}) => {
  return (
    <>
      {show ? (<div id="loading-backdrop">
		<Spinner animation="border" variant="primary"/>
	  </div>):null}
    </>
  );
};

export default Loading;
