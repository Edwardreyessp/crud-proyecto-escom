import { useState } from "react"
import Make2X1 from "./makes/make2X1"
import Make2X2 from "./makes/make2x2"
import styles from "../scss/Ejercicio.module.scss"

const CrearEjercicio = ({crud, setCrear, setCrud, setSomeButton}) => {
    
    const [maM2x1, setmaM2x1] = useState(false)
    const [maM2x2, setMaM2x2] = useState(false)
    const [select, setSelect] = useState(false)
    /*const [maM2X3, setMa2MX3] = useState(false)   
    const [maM3x2, setmaM3x2] = useState(false)
    const [maM3x3, setMaM3x3] = useState(false)
    const [maM1x2, setMaM1x2] = useState(false)
    const [maM1x3, setMaM1x3] = useState(false)*/


  const back = () => {
    setSomeButton(false)
    setCrear(false)
  }

  const reBack = () => {
    setSelect(false)
    setmaM2x1(false)
  }
  
  const M2x1 =() =>{
    setSelect(true)
    setmaM2x1(true)
  }
  const M2x2 =() =>{
    alert('2x2')
    setMaM2x2(true);
  }
  const M2x3 =() =>{
    alert('2x3')
  }
  const M3x2 =() =>{
    alert('3x2')
  }
  const M3x3 =() =>{
    alert('3x3')
  }
  const M1x2 =() =>{
    alert('1x2')
  }
  const M1x3 =() =>{
    alert('1x3')
  }

  return (
    <div>
      <button onClick={() => back()}>Volver al menú</button>
      {select && <button onClick={() => reBack()}>Volver a seleccionar tipo</button>}
      <h1>Agregar Ejecicio</h1>
      {!select && <p>Selecciona el tipo de cuadrado</p>}
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
        <button onClick={() =>M1x2()}>Cuadro 2x1</button>
      )}
      {!select && (
        <button onClick={() =>M1x3()}>Cuadro 2x1</button>
      )}
      
      <section className={styles.container}>
        {((maM2x1 &&
          <Make2X1
            setCrud={setCrud}
            crud={crud}
          />)
        || (maM2x2 && <Make2X2 setCrud={setCrud} crud={crud}/>
        ))}
      </section>
    </div>
  )
}

export default CrearEjercicio
