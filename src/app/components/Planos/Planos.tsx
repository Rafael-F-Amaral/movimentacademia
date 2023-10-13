import React from 'react'
import styles from './Planos.module.css'

const bodyHome = () => {
  return (
    <div id='Treinos' className={styles.TreinoContainer}>
      <main className={styles.MainContent}>
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