//App.jsx
// import { useState } from 'react'
import Header from './components/header'
import Inicio from './components/Inicio'
import Yo from './components/yo'
import Productos from './components/Productos'
import Contacto from './components/contacto'

function App() {
  return (
    <>
      <Header/>
      <Inicio/>
      <Yo/>
      <Productos/>
      <Contacto/>
    </>
  )
}
export default App