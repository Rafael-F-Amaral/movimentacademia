import React, { useState } from 'react';
import styles from './tableCell.module.css'

const TableCell = () => {
    const [textInputs, setTextInputs] = useState(['']);
    const [text, setText] = useState('');

    const handleTextChange = (event: any) => {
        setText(event.target.value);
    };

    const handleAddText = () => {
        if (text.trim() !== '') {
            setTextInputs([...textInputs, text]);
            setText('');
        }
    };

    const handleDeleteText = (index: number) => {
        const newInputs = [...textInputs];
        newInputs.splice(index, 1);
        setTextInputs(newInputs);
    };

    return (
        <div id="text-container">
            {textInputs.map((input, index) => (
                <div key={index}>
                    {input}
                    {input &&
                        (
                            <span className={styles.buttonAdd} onClick={() => handleDeleteText(index)}><img src='/moviment-academia-assets/agenda/agenda/botao-remover.svg' /></span>
                        )}
                </div>
            ))}
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleAddText();
                    }
                }}
                placeholder="Meu Treino"
            />
            <span className={styles.buttonAdd} onClick={handleAddText}><img src='/moviment-academia-assets/agenda/agenda/botao-adicionar.svg' /></span>

        </div>
    );
};

export default TableCell;
