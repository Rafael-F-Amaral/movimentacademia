"use client";

import React, { useState } from 'react'; // Certifique-se de importar o useState
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ModalData = {
    modalContent: {
        description: string; 
        additionalImage: string;
        anotherImage?: string;
    };
};

interface MyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
    modalContent: ModalData['modalContent'];
}

function MyVerticallyCenteredModal(props: MyVerticallyCenteredModalProps) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalContent.description}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>{props.modalContent.description}</p>
                {Array.isArray(props.modalContent.additionalImage) ? (
                    props.modalContent.additionalImage.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                    ))
                ) : (
                    <img src={props.modalContent.additionalImage} alt="Image 1" />
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
