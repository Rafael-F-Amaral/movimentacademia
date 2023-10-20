"use client";

import React, { useState } from 'react'; // Certifique-se de importar o useState
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import styles from './Loja.module.css'



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
            <Modal.Body className={styles.modalBody}>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={3}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className={`${styles.mySwiperModule} mySwiper`}

                >
                    <SwiperSlide>
                        <p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                    <SwiperSlide><p>{props.modalContent.description}</p>
                        {Array.isArray(props.modalContent.additionalImage) ? (
                            props.modalContent.additionalImage.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index + 1}`} />
                            ))
                        ) : (
                            <img src={props.modalContent.additionalImage} alt="Image 1" />
                        )}</SwiperSlide>
                </Swiper>
                <h4>Centered Modal</h4>

                {Array.isArray(props.modalContent.anotherImage) ? (
                    props.modalContent.anotherImage.map((image, index) => (
                        <img key={index} src={image} alt={`Another Image ${index + 1}`} />
                    ))
                ) : (
                    props.modalContent.anotherImage && (
                        <img src={props.modalContent.anotherImage} alt="Another Image" />
                    )
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
