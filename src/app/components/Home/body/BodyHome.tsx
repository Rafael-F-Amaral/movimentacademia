import React from 'react'
import styles from './BodyHome.module.css'

const BodyHome = () => {
    return (
        <div className={styles.HomeBody}>
            <div className={styles.Teste}>
                <div className='HomeText'>
                    <div >
                        <h1>
                            SUPERE SEUS LIMITES, CONQUISTE SEU MELHOR
                        </h1>
                    </div>
                    <div>
                        <h3>
                            Equipamentos profissionais, musculação, treinos personalizados e suplementação, tudo em um só lugar!
                        </h3>
                    </div>
                    <div className='HomeButton'>
                        AULA GRÁTIS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyHome