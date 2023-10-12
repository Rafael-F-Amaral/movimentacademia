import React from 'react'
import styles from './Treino.module.css'

const bodyHome = () => {
  return (
    <div className={styles.TreinoContainer}>
      <main className={styles.MainContent}>
        <div className={styles.BodyTreinoText}>
          <h1>
            NOSSOS PROGRAMAS
          </h1>
          <div>
            <h3>
              Alguns programas de treinamento que você encontra na Moviment
            </h3>
          </div>
        </div>
        <div className={styles.TreinoCardsContainer}>
          <div className={styles.CardMuscleTreino}>
            <div className={styles.CardMuscleText}>
              <h1>
                Musculação
              </h1>

              <div className={styles.CardTextContent}>
                <div className={styles.SetaTexto}>
                  <span style={{ backgroundColor: '#E8E6E3', width: '60px', height: '1px', marginRight:'-21px', display: 'inline-block,', transform: 'rotate(90deg)'}} ></span>
                  <span className={styles.Setas}>&#10141;</span>
                  <li>FORÇA</li>
                </div>
                <div className={styles.SetaTexto}>
                <span style={{ backgroundColor: '#E8E6E3', width: '60px', height: '1px', marginRight:'-21px', display: 'inline-block,', transform: 'rotate(90deg)'}} ></span>
                  <span className={styles.Setas}>&#10141;</span>
                  <li>RESISTÊNCIA</li>
                </div>
                <div className={styles.SetaTexto}>
                <span style={{ backgroundColor: '#E8E6E3', width: '60px', height: '1px', marginRight:'-21px', display: 'inline-block,', transform: 'rotate(90deg)'}} ></span>
                  <span className={styles.Setas}>&#10141;</span>
                  <li>HIPERTROFIA</li>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.CardAerobicTreino}>
            <div className={styles.CardAerobicText}>
              <h1>
                Aeróbicos
              </h1>
              <div className={styles.CardTextContent}>
                <div className={styles.SetaTexto}>
                  <span className={styles.Setas}>&#10230;</span>
                  <li>FORÇA</li>
                </div>
                <div className={styles.SetaTexto}>
                  <span className={styles.Setas}>&#10230;</span>
                  <li>RESISTÊNCIA</li>
                </div>
                <div className={styles.SetaTexto}>
                  <span className={styles.Setas}>&#10230;</span>
                  <li>HIPERTROFIA</li>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.CardCustomTreino}>
            <div className={styles.CardCustomText}>
              <h1>
                Personalizado
              </h1>
              <div className={styles.CardTextContent}>
                <div className={styles.SetaTexto}>
                  <span className={styles.Setas}>&#10230;</span>
                  <li>FORÇA</li>
                </div>
                <div className={styles.SetaTexto}>
                  <span className={styles.Setas}>&#10230;</span>
                  <li>RESISTÊNCIA</li>
                </div>
                <div className={styles.SetaTexto}>
                  <span className={styles.Setas}>&#10230;</span>
                  <li>HIPERTROFIA</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default bodyHome