import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'

class BasketPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crossSellID: this.props.crossSellsData,
            courses: this.props.courses
        };
    }
    render() {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Have you thought about these crossSell?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary btn-block">Continue Shopping</button>
                    <a href="/checkout" className="btn btn-secondary btn-block">Go to Checkout</a>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default BasketPopup