import React from 'react'
import './modal.css'

const Modal = ({isOpen, closeModal, title, children}) => {

  const handleModalDialogClick = (e) =>{
    e.stopPropagation(); //Termia la ejecución y no activa el click de los elementos padre
  }

  return (
    <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
      <div className="modal_dialog" onClick={handleModalDialogClick}>
      <div className="cerrar">
      <button className="modal-close" onClick={closeModal}>
            x
        </button>
      </div>
        {children}
        <br></br>
      </div>
    </div>
  )
}

export default Modal