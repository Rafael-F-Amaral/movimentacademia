"use client";

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Logo = {
    width: '210%'
}
const backgroundMenu = {
    backgroundColor: 'black',
}

const orangePipeStyle = {
    color: '#EC3138',
    fontSize: '18px',
    fontWeight: '900',
    transform: 'rotate(10deg)', // Aplica uma rotação de 60 graus
    display: 'inline-block', // Para ajustar a rotação sem quebrar o layout
}

function CollapsibleExample() {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu:any) => {
        setActiveMenu(menu === activeMenu ? null : menu); // Toggle para ativar/desativar o ícone
    };

    return (
        <div style={backgroundMenu}>
            <Navbar collapseOnSelect expand="lg" style={{ height: '6em', borderBottom:'2px solid #2A354B' }}>
                <Container>
                    <Navbar.Brand href="#home"><img style={Logo} src='Logo.svg' alt="logo, logomarca da academia moviment de iracemápolis" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#home" onClick={() => handleMenuClick('home')}>
                                {activeMenu === 'home' && <span style={orangePipeStyle}>|</span>} HOME
                            </Nav.Link>
                            <Nav.Link href="#treinos" onClick={() => handleMenuClick('treinos')}>
                                {activeMenu === 'treinos' && <span style={orangePipeStyle}>|</span>} TREINOS
                            </Nav.Link>
                            <Nav.Link href="#planos" onClick={() => handleMenuClick('planos')}>
                                {activeMenu === 'planos' && <span style={orangePipeStyle}>|</span>} PLANOS
                            </Nav.Link>
                            <Nav.Link href="#loja" onClick={() => handleMenuClick('loja')}>
                                {activeMenu === 'loja' && <span style={orangePipeStyle}>|</span>} LOJA
                            </Nav.Link>
                            <Nav.Link href="#agenda" onClick={() => handleMenuClick('agenda')}>
                                {activeMenu === 'agenda' && <span style={orangePipeStyle}>|</span>} AGENDA
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CollapsibleExample;

