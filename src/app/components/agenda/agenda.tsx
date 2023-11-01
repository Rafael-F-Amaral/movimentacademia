"use client"

import React, { useState } from 'react';
import styles from './agenda.module.css'
import Tab from 'react-bootstrap/Tab';
import TabPane from 'react-bootstrap/TabPane';
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

    return (
        <div
            className=
            {styles.main}
        >
            <div>
                <Tabs
                    defaultActiveKey="CALORIAS"
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
                            </table>
                        </div>
                    </TabPane>

                    <TabPane
                        eventKey="imc"
                        title="CALCULAR IMC"
                    >
                        <div className={styles.mainIMC}>
                            <div className={styles.contentImc}>
                                <div>
                                    <h2>SEU IMC</h2>
                                    <table>
                                        <tr>
                                            <th>IMC</th>
                                            <th>STATUS DO PESO</th>
                                        </tr>
                                        <tr>
                                            <td>Abaixo de 19.5</td>
                                            <td>Abaixo do peso</td>
                                        </tr>
                                        <tr>
                                            <td>18,5 - 24,5</td>
                                            <td>Saudável</td>
                                        </tr>
                                        <tr>
                                            <td>25,0 - 29,9</td>
                                            <td>Sobrepeso</td>
                                        </tr>
                                        <tr>
                                            <td>30,0 e acima</td>
                                            <td>Obeso</td>
                                        </tr>
                                        <caption><p>Taxa Metabólica Basal (TMB) / Índice de Massa Corporal (IMC) ? </p></caption>
                                    </table>
                                </div>

                                <div>
                                    <h3>Calcule seu IMC</h3>
                                    <p>Ter um peso dentro do intervalo de peso ideal, ajuda a evitar o aparecimento de várias doenças crônicas, como diabetes e hipertensão.</p>

                                    <table>
                                        <tr>
                                            <th>ALTURA(CM)</th>
                                            <th>PESO/KG</th>
                                        </tr>
                                        <tr>
                                            <td>175</td>
                                            <td>90</td>
                                        </tr>
                                        <tr>
                                            <th>IDADE</th>
                                            <th>SEXO</th>

                                        </tr>
                                        <tr>
                                            <td>35</td>
                                            <td>HOMEM</td>
                                        </tr>
                                        <tr>
                                            <td>30,0 e acima</td>
                                            <td>Obeso</td>
                                        </tr>
                                        <tr>
                                            <th>SELECIONE UM FATOR DE ATIVIDADE</th>
                                        </tr>

                                        <tr>
                                            <td>
                                                POUCO OU NENHUM EXERCÍCIO/TRABALHO SENTADO
                                            </td>

                                        </tr>
                                    </table>
                                    <span>
                                        <button>
                                            CALCULAR
                                        </button>
                                    </span>
                                </div>
                                <div>
                                    <img src="/moviment-academia-assets/agenda/imc/pessoa.svg" alt="imagem pessoa da academia moviment academia iracemápolis" />
                                    <p>VOCÊ ESTÁ OBESO!</p>
                                    <p>Seu ICM é de 31,62. Sua TMB está em 2.300 kcal/dia e TMB com seu fator  de atividade está em 2.800 kcal/dia ?</p>
                                </div>
                            </div>

                        </div>
                    </TabPane>

                    <TabPane
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
                    </TabPane>
                </Tabs>
            </div>

        </div>
    );
}


export default FillExample;