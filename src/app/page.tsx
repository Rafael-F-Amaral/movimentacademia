import React from 'react'
import MenuHeader from './components/Home/header/menuheader'
import BodyHome from './components/Home/body/BodyHome'
import TreinoComponent from './components/Treino/TreinoHome'
import Planos from './components/Planos/Planos'

const page = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <MenuHeader />
      <BodyHome />
      <TreinoComponent />
      <Planos />
    </div>

  )
}

export default page