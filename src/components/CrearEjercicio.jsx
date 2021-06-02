import { useState } from "react"
import Make2X1 from "./makes/make2X1"
import Make2X2 from "./makes/make2x2"
import styles from "../scss/Ejercicio.module.scss"
import Make2x3 from "./makes/Make2x3"
import Make3x2 from "./makes/Make3x2"
import Make3x3 from "./makes/Make3x3"
import Make1x2 from "./makes/Make1x2"
import Make1x3 from "./makes/Make1x3"


const CrearEjercicio = ({crud, setCrear, setCrud, setSomeButton}) => {
    
    const [maM2x1, setmaM2x1] = useState(false)
    const [maM2x2, setMaM2x2] = useState(false)
    const [select, setSelect] = useState(false)
    const [maM2x3, setMaM2x3] = useState(false)   
    const [maM3x2, setMaM3x2] = useState(false)
    const [maM3x3, setMaM3x3] = useState(false)
    const [maM1x2, setMaM1x2] = useState(false)
    const [maM1x3, setMaM1x3] = useState(false)


  const back = () => {
    setSomeButton(false)
    setCrear(false)
  }

  const reBack = () => {
    setSelect(false)
    setmaM2x1(false)
    setMaM2x2(false)
    setMaM2x3(false)
    setMaM3x2(false)
    setMaM3x3(false)
    setMaM1x2(false)
    setMaM1x3(false)
  }
  
  const M2x1 =() =>{
    setSelect(true)
    setmaM2x1(true)
  }
  const M2x2 =() =>{
    setSelect(true)
    setMaM2x2(true)
  }
  const M2x3 =() =>{
    setSelect(true)
    setMaM2x3(true)
  }
  const M3x2 =() =>{
    setSelect(true)
    setMaM3x2(true)
  }
  const M3x3 =() =>{
    setSelect(true)
    setMaM3x3(true)
  }
  const M1x2 =() =>{
    setSelect(true)
    setMaM1x2(true)
  }
  const M1x3 =() =>{
    setSelect(true)
    setMaM1x3(true)
  }

  return (
    <div>
      <button  onClick={() => back()}>Volver al menú</button>
      {select && <button onClick={() => reBack()}>Volver a seleccionar tipo</button>}
      <h1>Agregar Ejecicio</h1>
      {!select && <p>Selecciona el tipo de cuadrado</p>}
      {!select && 
        <div className={styles.lVerde}></div>
      }
      {!select && (
        <button onClick={() =>M2x1()}>Cuadro 2x1</button>
      )}
      {!select && (
        <button onClick={() =>M2x2()}>Cuadro 2x2</button>
      )}
      {!select && (
        <button onClick={() =>M2x3()}>Cuadro 2x3</button>
      )}
      {!select && (
        <button onClick={() =>M3x2()}>Cuadro 3x2</button>
      )}
      {!select && (
        <button onClick={() =>M3x3()}>Cuadro 3x3</button>
      )}
      {!select && (
        <button onClick={() =>M1x2()}>Cuadro 1x2</button>
      )}
      {!select && (
        <button onClick={() =>M1x3()}>Cuadro 1x3</button>
      )}
      
      <section className={styles.container}>
        {((maM2x1 && <Make2X1 setCrud={setCrud} crud={crud}/>)
          ||(maM2x2 && <Make2X2 setCrud={setCrud} crud={crud}/>)
          ||(maM2x3 && <Make2x3 setCrud={setCrud} crud={crud}/>)
          ||(maM3x2 && <Make3x2 setCrud={setCrud} crud={crud}/>)
          ||(maM3x3 && <Make3x3 setCrud={setCrud} crud={crud}/>)
          ||(maM1x2 && <Make1x2 setCrud={setCrud} crud={crud}/>)
          ||(maM1x3 && <Make1x3 setCrud={setCrud} crud={crud}/>)
        )}
      </section>
    </div>
  )
}

export default CrearEjercicio
