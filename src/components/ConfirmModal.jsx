import React from 'react'
import { CloseButton, Modal } from 'react-bootstrap'

const ConfirmModal = (props) => {
    return (
        <Modal {...props}>
            <Modal.Body>
                <div className='d-flex justify-content-between' >
                    <h3>Modal Title</h3>
                    <CloseButton onClick={props.onHide} />
                </div>
                Woohoo, you are reading this text in a modal!
            </Modal.Body>
        </Modal>
    )
}

export default ConfirmModal
