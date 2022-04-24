import React from 'react'
import { Modal } from 'react-bootstrap'

function BasketPopup(crossSellData) {
    return (
        <Modal
            {...crossSellData}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Have you thought about these course?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary btn-block">Continue Shopping</button>
                <a href="/checkout" className="btn btn-secondary btn-block">Go to Checkout</a>
            </Modal.Footer>
        </Modal>
    );
}

export default BasketPopup