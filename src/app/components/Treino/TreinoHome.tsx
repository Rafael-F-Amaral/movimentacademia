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
              Alguns programas de treinamento<br/> que você encontra na Moviment
            </h3>
          </div>
        </div>
        <div className={styles.TreinoCardsContainer}>
          <div className={styles.CardMuscleTreino}>
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