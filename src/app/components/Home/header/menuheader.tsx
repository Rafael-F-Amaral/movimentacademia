"use client";
import styles from './menuheader.module.css'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Logo = {
    width: '6em'
}
const backgroundMenu = {
    backgroundColor: 'black',
}

const orangePipeStyle = {
    color: '#EC3138',
    fontSize: '17px',
    fontWeight: '900',
    transform: 'rotate(10deg)',
    display: 'inline-block',
    marginBottom: '-5px'
}

const letterColor = {
    color: 'white',
}

function CollapsibleExample() {
    const [activeMenu, setActiveMenu] = useState<null | string>(null);

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu === activeMenu ? null : menu);
    };


    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/home' || currentPath === '/') {
            setActiveMenu('home');
        }
    }, []);

    return (
        <div style={backgroundMenu}>
            <Navbar  collapseOnSelect expand="lg" style={{ width: '100%', borderBottom: '2px solid #2A354B', }}>
                <Container>
                    <Navbar.Brand href="#home"><img style={Logo} src='Logo.svg' alt="logo, logomarca da academia moviment de iracemápolis" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="teste responsive-navbar-nav ms-auto">
                        <Nav className='me-auto'>

                        </Nav>
                        <Nav style={{ textAlign: 'center', backgroundColor: 'black' }}>
                            <Nav.Link style={letterColor} href="#home" onClick={() => handleMenuClick
                                ('home')}>
                                {activeMenu === 'home' && <span style={orangePipeStyle}>|</span>} HOME
                            </Nav.Link>
                            <Nav.Link style={letterColor} href="#treinos" onClick={() => handleMenuClick('treinos')}>
                                {activeMenu === 'treinos' && <span style={orangePipeStyle}>|</span>} TREINOS
                            </Nav.Link>
                            <Nav.Link style={letterColor} href="#planos" onClick={() => handleMenuClick('planos')}>
                                {activeMenu === 'planos' && <span style={orangePipeStyle}>|</span>} PLANOS
                            </Nav.Link>
                            <Nav.Link style={letterColor} href="#loja" onClick={() => handleMenuClick('loja')}>
                                {activeMenu === 'loja' && <span style={orangePipeStyle}>|</span>} LOJA
                            </Nav.Link>
                            <Nav.Link style={letterColor} href="#agenda" onClick={() => handleMenuClick('agenda')}>
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



