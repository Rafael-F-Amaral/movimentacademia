"use client"

import React, { useState } from 'react';
import ContainerTab from './ContainerTab.module.css'
import AgendaHorario from './Components/CssAgenda/AgendaHorario.module.css'
import CalculoImc from './Components/CssAgenda/CalculoImc.module.css'
import CalculoCalorias from './Components/CssAgenda/CalculoCalorias.module.css'
import TabPane from 'react-bootstrap/TabPane';
import Tabs from 'react-bootstrap/Tabs';
import Select from './Components/agenda/Select/Select'
import TableCell from './Components/agenda/table/tableCell';


function FillExample() {


    return (
        <div
            className=
            {ContainerTab.main}
        >
            <div>
                <Tabs
                    defaultActiveKey="CALORIAS"
                    id="fill-tab-example"
                    className={`mb-3 ${ContainerTab.mainTab}`}
                    fill
                >
                    <TabPane
                        eventKey="agenda"
                        title="AGENDA DE HORÁRIOS"
                        style={{ marginTop: '60px' }}
                    >
                        <div className={AgendaHorario.tableHead}>
                            <table>
                                <thead>
                                    <tr className={AgendaHorario.thCell}>
                                        <th></th>
                                        <th>SEGUNDA-FEIRA</th>
                                        <th>TERÇA-FEIRA</th>
                                        <th>QUARTA-FEIRA</th>
                                        <th>QUINTA-FEIRA</th>
                                        <th>SEXTA-FEIRA</th>
                                        <th>SÁBADO</th>
                                        <th
                                            style={{ borderRight: 'none' }}>
                                            DOMINGO
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className={AgendaHorario.trCell}>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <Select />
                                        </td>
                                        <td className={AgendaHorario.tdCell}>
                                            <TableCell />

                                        </td>


                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />
                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderRight: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr className={AgendaHorario.trCell}>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderRight: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className={AgendaHorario.trCell}>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderRight: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className={AgendaHorario.trCell}>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderRight: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className={AgendaHorario.trCell}>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <Select />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderBottom: 'none' }}
                                        >
                                            <TableCell />

                                        </td>
                                        <td
                                            className={AgendaHorario.tdCell}
                                            style={{ borderRight: 'none', borderBottom: 'none' }}
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
                        style={{ marginTop: '60px' }}
                    >
                        <div className={CalculoImc.mainIMC}>
                            <div className={CalculoImc.contentImc}>
                                <div className={CalculoImc.contentSeuImc}>
                                    <table>
                                        <tr style={{ borderBottom: 'none' }}>
                                            <th style={{ borderBottom: 'none' }}>
                                                <h3 style={{ textAlign: 'left' }}>SEU IMC</h3>

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
                                            <p>Taxa Metabólica Basal (TMB) / Índice de Massa Corporal (IMC)
                                                <img
                                                    className={CalculoImc.informaçãoAdicionalImage2}
                                                    src='./moviment-academia-assets/agenda/imc/interrogacao.svg'
                                                >

                                                </img>
                                            </p>
                                        </caption>
                                    </table>
                                </div>

                                <div className={CalculoImc.contentCalculeImc}>

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
                                                        width: '80%'
                                                    }}>
                                                    <input
                                                        className={CalculoImc.selectInput}
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
                                                        width: '100%'
                                                    }}>
                                                    <input
                                                        className={CalculoImc.selectInput}
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
                                                        className={CalculoImc.selectInput}
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
                                                    width: '100%'
                                                }}>
                                                    <select className={CalculoImc.selectSexInput} id="pet-select">
                                                        <option value="homem">HOMEM</option>
                                                        <option value="mulher">MULHER</option>

                                                    </select>
                                                </p>
                                            </td>
                                        </tr>


                                    </table>
                                    <div>
                                        <div><p>SELECIONE UM FATOR DE ATIVIDADE</p></div>
                                    </div>

                                    <div>
                                        <div>
                                            <p
                                                style={{
                                                    borderBottom: '1px #cacaca solid',
                                                    width: '100%'
                                                }}>
                                                <select className={CalculoImc.selectSexInput} id="work-select">
                                                    <option
                                                        value="muitoMovimento"
                                                    >
                                                        MEU TRABALHO É ME MOVIMENTAR
                                                    </option>
                                                    <option
                                                        value="movimentoParcial"
                                                    >
                                                        TRABALHO UM POUCO PARADO UM POUCO MOVIMENTANDO
                                                    </option>
                                                    <option
                                                        value="trabalhoSentado"
                                                    >
                                                        TRABALHO A MAIOR PARTE DO TEMPO SENTADO
                                                    </option>
                                                    <option
                                                        value="trabalhoMuitoSentado"
                                                    >
                                                        SÓ LEVANTO PRA IR EMBORA
                                                    </option>
                                                </select>
                                            </p>

                                        </div>

                                    </div>
                                    <span>
                                        <button className={CalculoImc.buttonAgenda}>
                                            CALCULAR
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className={CalculoImc.resultIMC2}>
                                <img
                                    className={CalculoImc.iconePessoa}
                                    src="/moviment-academia-assets/agenda/imc/pessoa.svg"
                                    alt="imagem pessoa da academia moviment academia iracemápolis"
                                />
                                <div>
                                    <p>VOCÊ ESTÁ OBESO!</p>
                                    <p>Seu ICM é de 31,62. Sua TMB está em 2.300 kcal/dia e TMB com seu fator  de atividade está em 2.800 kcal/dia
                                        <img
                                            className={CalculoImc.informaçãoAdicionalImage}
                                            src='./moviment-academia-assets/agenda/imc/interrogacao.svg'
                                        >

                                        </img>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabPane>

                    <TabPane
                        eventKey="CALORIAS"
                        title="CALCULAR CALORIAS"
                        style={{ marginTop: '60px' }}
                    >
                        <div className={CalculoCalorias.mainCalorias}>
                            <div className={CalculoCalorias.resultadoContent}>
                                <div>
                                    <h3>Resultado:</h3>
                                    <p>
                                        Sua base de ingestão calórica diária é de 2504 kcal para chegar em seu objetivo.


                                    </p>
                                    <span></span>
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
                            </div>


                            <div className={CalculoCalorias.formerContent}>
                                <h3>
                                    Calcular Calorias Diárias
                                </h3>
                                <p style={{ width: '80%' }}>
                                    Calcular calorias diárias é uma forma bastante popular de se manter no peso, engordar ou emagrecer. Com essa calculadora é possível ter uma base de quantas calorias é preciso para chegar ao seu objetivo.
                                    <img

                                        src='./moviment-academia-assets/agenda/imc/interrogacao.svg'
                                    >

                                    </img>
                                </p>
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
                                                    width: '90%',
                                                    marginTop: '7px',
                                                }}>
                                                <input
                                                    className={CalculoImc.selectInput}
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
                                                    width: '100%',
                                                    marginTop: '7px',

                                                }}>
                                                <input
                                                    className={CalculoImc.selectInput}
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
                                                width: '90%',
                                                marginTop: '7px',

                                            }}>
                                                <input
                                                    className={CalculoImc.selectInput}
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
                                                width: '100%',
                                                marginTop: '7px',

                                            }}>
                                                <select
                                                    className={CalculoImc.selectSexInput}
                                                    id="pet-select"

                                                >
                                                    <option value="homem">HOMEM</option>
                                                    <option value="mulher">MULHER</option>

                                                </select>
                                            </p>
                                        </td>
                                    </tr>


                                </table>

                                <div>
                                    <div>
                                        <p>SELECIONE SEU OBJETIVO:</p>
                                        <select
                                            className={CalculoCalorias.selectSexInput}
                                            id="pet-select"
                                            style={{borderBottom:'1px #cacaca solid'}}
                                        >
                                            <option value="homem">QUERO EMAGRECER</option>
                                            <option value="mulher">QUERO ENGORDAR</option>

                                        </select>
                                    </div>
                                    <div>
                                        <p>SELECIONE SEU TIPO DE EMPREGO:</p>
                                        <select
                                            className={CalculoCalorias.selectSexInput}
                                            id="pet-select"
                                            style={{borderBottom:'1px #cacaca solid'}}
                                        >
                                            <option value="homem">POUCO OU NENHUM EXERCÍCIO</option>
                                            <option value="mulher">BASTANTE OU MUITO EXERCÍCIO</option>

                                        </select>
                                    </div>
                                    <div>
                                        <p>SELECIONE SEU EXERCÍCIO SEMANAL:</p>
                                        <select
                                            className={CalculoCalorias.selectSexInput}
                                            id="pet-select"
                                            style={{borderBottom:'1px #cacaca solid'}}
                                        >
                                            <option value="homem">POUCO OU NENHUM</option>
                                            <option value="mulher">BASTANTE OU MUITO</option>

                                        </select>
                                    </div>
                                    <span>
                                        <button className={CalculoCalorias.buttonCalculoCalorias}>
                                            CALCULAR
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>

        </div >
    );
}


export default FillExample;