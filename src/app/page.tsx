import React from 'react'
import MenuHeader from './components/Home/header/menuheader'
import BodyHome from './components/Home/body/BodyHome'
import TreinoComponent from './components/Treino/TreinoHome'
const page = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <MenuHeader />
      <BodyHome />
    </div>

    //<TreinoComponent/>
  )
}

export default page