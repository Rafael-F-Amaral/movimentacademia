import React from 'react'
import styles from './Treino.module.css'

const bodyHome = () => {
  return (
    <div id='Treinos' className={styles.TreinoContainer}>
      <main className={styles.MainContent}>
        <div className={styles.BodyTreinoText}>
          <h1>
            NOSSOS PROGRAMAS
          </h1>
          <div>
            <h3>
              Alguns programas de treinamento<br /> que você encontra na Moviment
            </h3>
          </div>
        </div>
        <div className={styles.TreinoCardsContainer}>
          <div className={styles.CardMuscleTreino}>
            {/* <div>
              <h1>Musculação</h1>
              <div className={styles.teste2}>
                  <span className={styles.Unicode2}></span>
                <ul>
                  <li className={styles.CardText}>
                    <span className={styles.Unicode}>&#129042;</span> GANHO DE FORÇA
                  </li>
                  <li className={styles.CardText}>
                    <span className={styles.Unicode}>&#129042;</span> MELHOR RESISTÊNCIA
                  </li>
                  <li className={styles.CardText}>
                    <span className={styles.Unicode}>&#129042;</span> GANHO DE HIPERTROFIA
                  </li>
                </ul>
              </div>
            </div> */}
            <div>
              <button className={styles.CardButton} >
                estou com dúvidas
              </button>
            </div>
          </div>

          <div className={styles.CardAerobicTreino}>
            <div>
              <button className={styles.CardButton} >
                estou com dúvidas
              </button>
            </div>
          </div>
          <div className={styles.CardCustomTreino}>
            <div>
              <button className={styles.CardButton} >
                estou com dúvidas
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default bodyHome