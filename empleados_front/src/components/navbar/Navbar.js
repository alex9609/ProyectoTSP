import React from 'react'
import './navbar.css'
import Login from "../login/Login"
import SignUp from "../signup/Signup"
import useModal from '../hooks/useModal';

function Navbar(){

	const [isOpenModal,openModal,closeModal] = useModal();

  	const [isOpenModalSignUp,openModalSignUp,closeModalSignUp] = useModal();


	return (
		<>
		<Login isOpenModal={isOpenModal} closeModal={closeModal}></Login>

		<SignUp isOpenModal={isOpenModalSignUp} closeModal={closeModalSignUp}></SignUp>

		<nav className='navbar'>
			<div className='login-signup'>
        <p className='login-signup-button' onClick={openModal}>
            Inicio
        </p>&nbsp;
				<p>/</p>&nbsp;
        <p className='login-signup-button' onClick={openModalSignUp}>
            Registrar
        </p>
			</div>
			<div className='login-signup'>
				<a href='http://localhost:3000'>Contáctanos </a>&nbsp;
			</div>
		</nav>
	</>
	)
}

export default Navbar