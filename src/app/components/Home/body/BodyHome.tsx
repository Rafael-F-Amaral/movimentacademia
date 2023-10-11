import React from 'react'
import styles from './BodyHome.module.css'


const BodyHome = () => {
    return (
        <div className={styles.HomeBody}>
            <div className={styles.HomeText}>
                <div className={styles.H1Text}>
                    <h1>
                        SUPERE SEUS LIMITES,
                        CONQUISTE SEU MELHOR
                        </h1>
                </div>
                <div className={styles.H3Text}>
                    <h3>
                        Equipamentos profissionais, musculação, treinos personalizados e suplementação, tudo em um só lugar!
                    </h3>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.customButton}>AULA GRÁTIS</button>
                </div>
            </div>
        </div>
    )
}

export default BodyHome