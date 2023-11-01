"use client"

import React, { useState } from 'react';
import styles from './agenda.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
    const [tableData, setTableData] = useState([
        ['1', 'Inserir treinamento', 'Outro Dado 1', 'Outro Dado 1', 'Outro Dado 1', 'Outro Dado 1', 'Outro Dado 1', 'Outro Dado 1'],
        ['Nome 2', 'Idade 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2'],
        ['Nome 2', 'Idade 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2'],
        ['Nome 2', 'Idade 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2'],
        ['Nome 2', 'Idade 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2', 'Outro Dado 2'],
    ]);
    const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][colIndex] = value;
        setTableData(updatedData);
    };
    const applyTesteClass = (content: string) => {
        const cellContent = parseInt(content);
        return !isNaN(cellContent) && cellContent > 5 ? 'Teste' : '';
    };
    return (
        <div
            className=
            {styles.main}
        >
            <div>
                <Tabs
                    defaultActiveKey="home"
                    id="fill-tab-example"
                    className={`mb-3 ${styles.mainTab}`}
                    fill
                >
                    <Tab
                        eventKey="home"
                        title="Home"
                        className={styles.contentTab}
                    >
                        <div className={styles.tableHead}>
                            <table>
                                <thead>
                                    <tr className={styles.thCell}>
                                        <th></th>
                                        <th>SEGUNDA-FEIRA</th>
                                        <th>TERÇA-FEIRA</th>
                                        <th>QUARTA-FEIRA</th>
                                        <th>QUINTA-FEIRA</th>
                                        <th>SEXTA-FEIRA</th>
                                        <th>SÁBADO</th>
                                        <th
                                            className={styles.thCellBorder}>
                                            DOMINGO
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={styles.trCell}>
                                            {row.map((cellValue, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className={`${colIndex === 7 ? styles.Teste : ''} ${rowIndex === 4 ? styles.Teste2 : ''} ${styles.tdCell}`}
                                                >
                                                    <input
                                                        type="text"
                                                        value={cellValue}
                                                        onChange={(e) =>
                                                            handleCellChange(rowIndex, colIndex, e.target.value)
                                                        }
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table></div>
                    </Tab>
                    <Tab
                        eventKey="profile"
                        title="Profile"
                    >
                        Tab content for Profile
                    </Tab>
                    <Tab
                        eventKey="longer-tab"
                        title="Loooonger Tab"
                    >
                        Tab content for Loooonger Tab
                    </Tab>
                    <Tab
                        eventKey="contact"
                        title="Contact"
                    >
                        Tab content for Contact
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
export default FillExample;