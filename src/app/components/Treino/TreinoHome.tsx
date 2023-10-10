import React from 'react'

const bodyHome = () => {
  return (
    <div className='BodyTreino'>
      <div className='BodyTreinoText'>
        <h1>
          NOSSOS PROGRAMAS
        </h1>
        <div>
          <h3>
            Alguns programas de treinamento que você encontra na Moviment
          </h3>
        </div>
      </div>
      <div className='BodyTreinoCards'>

        <div className='CardMuscleTreino'>
          <div className='CardMuscleText'>
            <div>
              <h1>
                Musculação
              </h1>
            </div>
            <div>
              FORÇA, RESISTÊNCIA, HIPERTROFIA
            </div>
          </div>
        </div>

        <div className='CardAerobicTreino'>
          <div className='CardAerobicText'>
            <div>
              <h1>
                Aeróbicos
              </h1>
            </div>
            <div>
              QUEIMA CALORIAS, MELHORA DISPOSIÇÃO, REDUZ ESTRESSE
            </div>
          </div>
        </div>

        <div className='CardCustomTreino'>

        </div>
      </div>
    </div>
  )
}

export default bodyHome