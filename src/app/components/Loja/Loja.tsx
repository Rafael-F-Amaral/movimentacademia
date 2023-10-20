"use client";
import React, { useRef, useState } from 'react';
import styles from './Loja.module.css';

// Swipper
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Swipper
import Modal from './modal';

type SwiperType = {
    slideTo: (index: number, speed?: number, runCallbacks?: boolean) => void;
    activeIndex: number;
};

type ModalData = {
    modalContent: {
        description: string;
        additionalImage: string;
        anotherImage?: string;
    };
};


// Tipo para os slides de imagem
type ImageData = {
    url: string;
    text: string;
    type: string;
    modalContent: {
        description: any;
        additionalImage: any;

    };

};

export default function App() {
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    const [selectedType, setSelectedType] = useState("ver todos");

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalData>({ modalContent: { description: '', additionalImage: '', } });

    const handleExpandClick = (item: ImageData) => {

        setModalData(item);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };




    const imageUrls = [
        {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'first',
            type: 'whey',
            modalContent: {
                description: 'Dasdsadasd',
                additionalImage: [
                    '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
                    '/moviment-academia-assets/loja/imagens/produtos/termogenico/termo.png',
                    '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
                    '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
                ],
            },
        }, {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'FTW Wh2ey Protein, (900g)',
            type: 'camiseta',
            modalContent: {
                description: 'Descrição do Whey Protein',
                additionalImage: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
                anotherImage: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',

            },
        }, {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'FTW Whey Protein, (900g)',
            type: 'whey',
            modalContent: {
                description: 'Descrição do Whey Protein',
                additionalImage: '/caminho/para/outra/imagem.jpg',

            },
        }, {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'FTW Whey Protein, (900g)',
            type: 'creatina',
            modalContent: {
                description: 'Descrição do Whey Protein',
                additionalImage: '/caminho/para/outra/imagem.jpg',

            },
        }, {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'FTW Whey Protein, (900g)',
            type: 'termogenico',
            modalContent: {
                description: 'Descrição do Whey Protein',
                additionalImage: '/caminho/para/outra/imagem.jpg',

            },
        },];//modal

    return (
        <>
            <Modal
                show={isModalOpen}
                onHide={handleCloseModal}
                modalContent={modalData?.modalContent || { description: '', additionalImage: '' }}
            />
            <div className={styles.teste}>
                <nav className={styles.menuLoja}>
                    <ul>
                        <li
                            onClick={() => setSelectedType("ver todos")}
                            className={selectedType === "ver todos" ? styles.menuItemSelected : ""}
                        >
                            VER TODOS
                        </li>
                        <li
                            onClick={() => setSelectedType("whey")}
                            className={selectedType === "whey" ? styles.menuItemSelected : ""}
                        >
                            WHEY
                        </li>
                        <li
                            onClick={() => setSelectedType("creatina")}
                            className={selectedType === "creatina" ? styles.menuItemSelected : ""}
                        >
                            CREATINAS
                        </li>
                        <li
                            onClick={() => setSelectedType("termogenico")}
                            className={selectedType === "termogenico" ? styles.menuItemSelected : ""}
                        >
                            TERMOGÊNICOS
                        </li>
                        <li
                            onClick={() => setSelectedType("camiseta")}
                            className={selectedType === "camiseta" ? styles.menuItemSelected : ""}
                        >
                            CAMISETAS
                        </li>
                    </ul>
                </nav>
                <div className={styles.swiperContainer}>
                    <Swiper
                        className={styles.Body}
                        modules={[Virtual, Navigation, Pagination]}
                        onSwiper={(swiper) => setSwiperRef(swiper as SwiperType)}
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={30}
                        navigation={true}
                        virtual
                    >
                        {imageUrls
                            .filter((image) => selectedType === "ver todos" || image.type === selectedType)
                            .map((image, index) => (
                                <SwiperSlide key={index} className={styles.imageContainer}>
                                    <img src={image.url} alt={`Slide ${index + 1}`} />
                                    <div className={styles.textCard}>
                                        <div>{image.text}</div>
                                        <div className={styles.Divider}></div>
                                        <div className={styles.menuCard}>
                                            <span>
                                                <img src='/moviment-academia-assets/loja/imagens/produtos/whey/expandir-icon.svg' />
                                                <p onClick={() => handleExpandClick(image)}>EXPANDIR</p>
                                            </span>
                                            <span>
                                                <img src='/moviment-academia-assets/loja/imagens/produtos/whey/etiqueta-preco.svg' />
                                                <p>CONSULTAR</p>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}