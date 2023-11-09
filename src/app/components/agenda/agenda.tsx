"use client"

import React, { useState } from 'react';
import styles from './agenda.module.css'
import TabPane from 'react-bootstrap/TabPane';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Select from './Components/agenda/Select/Select'
import TableCell from './Components/agenda/table/tableCell';


function FillExample() {
    const colsValue = "10"; // Exemplo de uma string

    const [textInputs, setTextInputs] = useState(['']); // Estado para armazenar os textos
    const [text, setText] = useState(''); // Estado para controlar o texto a ser adicionado

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleAddText = () => {
        if (text.trim() !== '') {
            setTextInputs([...textInputs, text]);
            setText(''); // Limpa o campo de entrada
        }
    };

    const handleDeleteText = (index: number) => {
        const newInputs = [...textInputs];
        newInputs.splice(index, 1);
        setTextInputs(newInputs);
    };


    return (
        <div
            className=
            {styles.main}
        >
            <div>
                <Tabs
                    defaultActiveKey="imc"
                    id="fill-tab-example"
                    className={`mb-3 ${styles.mainTab}`}
                    fill
                >
                    <TabPane
                        eventKey="agenda"
                        title="AGENDA DE HORÁRIOS"
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
                                    <tr className={styles.trCell}>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <Select />
                                        </td>
                                        <td className={styles.tdCell}>
                                            <TableCell />

                                        </td>


                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />
                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr className={styles.trCell}>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className={styles.trCell}>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className={styles.trCell}>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className={styles.trCell}>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={styles.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPane>

                    <TabPane
                        eventKey="imc"
                        title="CALCULAR IMC"
                    >
                        <div className={styles.mainIMC}>
                            <div className={styles.contentImc}>
                                <div className={styles.contentSeuImc}>
                                    <table>
                                        <tr style={{ borderBottom: 'none' }}>
                                            <th style={{ borderBottom: 'none' }}>
                                                <h2 style={{ textAlign: 'left', height: '1vw' }}>SEU IMC</h2>

                                            </th>
                                        </tr>
                                        <tr>
                                            <th style={{ borderRight: '1px #cacaca solid' }}>IMC</th>
                                            <span></span>
                                            <th style={{ paddingLeft: '2vw' }}>STATUS DO PESO</th>
                                        </tr>
                                        <tr>
                                            <td style={{ borderRight: '1px #cacaca solid' }}>Abaixo de 19.5</td>
                                            <span></span>
                                            <td style={{ paddingLeft: '2vw' }}>Abaixo do peso</td>
                                        </tr>
                                        <tr>
                                            <td style={{ borderRight: '1px #cacaca solid' }}>18,5 - 24,5</td>
                                            <span></span>

                                            <td style={{ paddingLeft: '2vw' }}>Saudável</td>
                                        </tr>
                                        <tr>
                                            <td style={{ borderRight: '1px #cacaca solid' }}>25,0 - 29,9</td>
                                            <span></span>

                                            <td style={{ paddingLeft: '2vw' }}>Sobrepeso</td>
                                        </tr>
                                        <tr style={{ borderBottom: 'none' }}>
                                            <td style={{ borderRight: '1px #cacaca solid', borderBottom: 'none' }}>30,0 e acima</td>
                                            <span></span>

                                            <td style={{ paddingLeft: '2vw', borderBottom: 'none' }}>Obeso</td>
                                        </tr>
                                        <caption>
                                            <p>Taxa Metabólica Basal (TMB) / Índice de Massa Corporal (IMC) ?
                                            </p>
                                        </caption>
                                    </table>
                                </div>

                                <div className={styles.contentCalculeImc}>

                                    <h3>Calcule seu IMC</h3>
                                    <p>Ter um peso dentro do intervalo de peso ideal, ajuda a evitar o aparecimento de várias doenças crônicas, como diabetes e hipertensão.</p>
                                    <table>
                                        <tr>
                                            <th>ALTURA(CM)</th>
                                            <th>PESO/KG</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p
                                                    style={{
                                                        borderBottom: '1px #cacaca solid',
                                                        width: '70%'
                                                    }}>
                                                    <input
                                                        className={styles.selectInput}
                                                        type="number"
                                                        min="0"
                                                        max="240"
                                                        placeholder='Exemplo: 180'
                                                        required
                                                    />

                                                </p>
                                            </td>

                                            <td>
                                                <p
                                                    style={{
                                                        borderBottom: '1px #cacaca solid',
                                                        width: '70%'
                                                    }}>
                                                    <input
                                                        className={styles.selectInput}
                                                        type="number"
                                                        min="0"
                                                        max="240"
                                                        placeholder='Exemplo: 70'
                                                        required
                                                    />
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>IDADE</th>

                                            <th>SEXO</th>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p style={{
                                                    borderBottom: '1px #cacaca solid',
                                                    width: '70%'
                                                }}>
                                                    <input
                                                        className={styles.selectInput}
                                                        type="number"
                                                        min="0"
                                                        max="240"
                                                        placeholder='Exemplo: 22'
                                                        required
                                                    />
                                                </p>
                                            </td>

                                            <td>
                                                <p style={{
                                                    borderBottom: '1px #cacaca solid',
                                                    width: '70%'
                                                }}>
                                                    <select className={styles.selectSexInput} id="pet-select">
                                                        <option value="dog">HOMEM</option>
                                                        <option value="cat">MULHER</option>

                                                    </select>
                                                </p>
                                            </td>
                                        </tr>


                                    </table>
                                    <div>
                                        <div>SELECIONE UM FATOR DE ATIVIDADE</div>
                                    </div>

                                    <div>
                                        <div>
                                            <select className={styles.selectSexInput} id="pet-select">
                                                <option value="dog">HOMEM</option>
                                                <option value="cat">MULHER</option>
                                                <option value="cat">MULHER</option>
                                                <option value="cat">MULHER</option>

                                            </select>
                                        </div>

                                    </div>
                                    <span>
                                        <button>
                                            CALCULAR
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.resultIMC2}>
                                <img src="/moviment-academia-assets/agenda/imc/pessoa.svg" alt="imagem pessoa da academia moviment academia iracemápolis" />
                                <div>
                                    <p>VOCÊ ESTÁ OBESO!</p>
                                    <p>Seu ICM é de 31,62. Sua TMB está em 2.300 kcal/dia e TMB com seu fator  de atividade está em 2.800 kcal/dia ?</p>
                                </div>
                            </div>
                        </div>
                    </TabPane>

                    {/* <TabPane
                        eventKey="CALORIAS"
                        title="CALCULAR CALORIAS"
                    >
                        <div className={styles.mainCalorias}>
                            <div className={styles.resultadoContent}>
                                <h3>Resultado:</h3>
                                <p>Sua base de ingestão calórica diária é de 2504 kcal para chegar em seu objetivo.</p>
                                <span>Linha horizontal</span>
                                <p>Este é o numero de calorias diárias que deve ingerir para conseguir perder 35 kg, sem colocar a sua saúde em risco.</p>
                                <p>À medida que vai emagrecendo e chegando mais perto do peso que deseja, deve recalcular o número de calorias que pode ingerir por dia para acelerar o processo de emagrecimento. Para isso, basta preencher novamente a calculadora com os seus dados atualizados.</p>
                                <p>
                                    <img
                                        src="/moviment-academia-assets/agenda/calorias/caution.svg"
                                        alt="Cuidado, aviso de cuidado para que as pessoas fiquem alertas a mensagem passada"
                                    />
                                    ATENÇÃO: é importante ressaltar que a quantidade de calorias também deve variar de acordo com o estado de saúde, metabolismo e produção de hormônios de cada pessoa.
                                </p>
                                <p>
                                    Essa Calculadora não leva em consideração a realidade alimentar e a saúde dos indivíduos e não deve ser usada como única fonte de informação para sua saúde.

                                </p>
                                <p>
                                    Por isso, para confirmar a quantidade diária de ingestão calórica é sempre aconselhada a consulta com um nutricionista.
                                </p>
                            </div>

                            <div className={styles.formerContent}>
                                <h3>
                                    Calcular Calorias Diárias
                                </h3>
                                <p>
                                    Calcular calorias diárias é uma forma bastante popular de se manter no peso, engordar ou emagrecer. Com essa calculadora é possível ter uma base de quantas calorias é preciso para chegar ao seu objetivo. ?
                                </p>
                                <div>
                                    <div>
                                        <h5>ALTURA</h5>
                                        <p>175</p>
                                        <h5>idade</h5>
                                        <p>35</p>
                                    </div>
                                    <div>
                                        <h5>PESO/KG</h5>
                                        <p>90</p>
                                        <h5>SEXO</h5>
                                        <p>HOMEm</p>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <h5>SELECIONE SEU OBJETIVO</h5>
                                        <p>QUERO EMAGRECER</p>
                                    </span>
                                    <span>
                                        <h5>SELECIONE SEU TIPO DE EMPREGO</h5>
                                        <p>POUCO OU NENHUM EXERCÍCIO/TRABALHO SENTADO</p>
                                    </span>
                                    <span>
                                        <h5>SELECIONE SEU EXERCÍCIO SEMANAL:</h5>
                                        <p>POUCO OU NENHUM EXERCÍCIO FÍSICO</p>
                                    </span>
                                    <div>
                                        <button>
                                            CALCULAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane> */}
                </Tabs>
            </div>

        </div >
    );
}


export default FillExample;