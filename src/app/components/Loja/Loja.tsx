"use client";
import React, { useState } from 'react';
import styles from './Loja.module.css';

// Swiper
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Swiper

type SwiperType = {
    slideTo: (index: number, speed?: number, runCallbacks?: boolean) => void;
    activeIndex: number;
};

type ImageData = {
    url: string;
    text: string;
    type: string;
};


export default function App() {
    const [selectedType, setSelectedType] = useState("ver todos");


    
    const [rotateSlide, setRotateSlide] = useState(false);


    const imageUrls: ImageData[] = [
        {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'FTW Whey Protein, (900g)  Vários Sabores',

            type: 'whey',
        },
        {
            url: '/moviment-academia-assets/loja/imagens/produtos/camiseta/camiseta.png',
            text: 'Camiseta Moviment, (Vários Tamanhos e Cores)',
            type: 'camiseta',
        },
        {
            url: '/moviment-academia-assets/loja/imagens/produtos/termogenico/termo.png',
            text: 'Max Titanum Termogênico, (900g)',
            type: 'termogenico',
        },
        {
            url: '/moviment-academia-assets/loja/imagens/produtos/whey/Whey.png',
            text: 'FTW Whey Protein, (900g)',
            type: 'creatina',
        },
        {
            url: '/moviment-academia-assets/loja/imagens/produtos/termogenico/termo.png',

            text: 'Max Titanum Termogênico, (900g)',

            type: 'termogenico',
        },
    ];

    return (

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
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={30}
                    navigation={true}
                >
                    {imageUrls
                        .filter((image) => selectedType === "ver todos" || image.type === selectedType)
                        .map((image, index) => (
                            <SwiperSlide key={index} className={`${styles.imageContainer} ${rotateSlide ? styles.rotate : ''}`}>
                                <img src={image.url} alt={`Slide ${index + 1}`}
                                    onClick={() => setRotateSlide(!rotateSlide)}
                                />
                                <div className={styles.textCard}>
                                    <div>{image.text}</div>
                                    <div className={styles.Divider}></div>
                                    <div className={styles.menuCard}>
                                        <span>
                                            <img src='/moviment-academia-assets/loja/imagens/produtos/whey/expandir-icon.svg' />
                                            <p>EXPANDIR</p>
                                        </span>
                                        <span>
                                            <img src='/moviment-academia-assets/loja/imagens/produtos/whey/etiqueta-preco.svg' />
                                            <p><a href='https://www.uol.com.br/' target="_blank">CONSULTAR</a></p>
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
