import { useEffect, useState } from "react"
import styles from '../scss/Ejercicio.module.scss'
import Ejercicio2x1 from "./Ejercicio2x1"

const VerEjercicio = ({state, idChallenge, setSomeButtom, setVer}) => {
  const [current, setCurrent] = useState([])
  const [inArea, setInArea] = useState("")
  const [inX1, setInX1] = useState("")
  const [inX2, setInX2] = useState("")
  /* const [inX3, setInX3] = useState("") */
  /* const [inXtotal, setInXtotal] = useState("") */
  const [inY1, setInY1] = useState("")
  /* const [inY2, setInY2] = useState("")
  const [inY3, setInY3] = useState("")
  const [inYtotal, setInYtotal] = useState("") */
  /* const [inX1pory1, setInX1pory1] = useState("") */
  const [inX1pory2, setInX1pory2] = useState("")
  /*const [inX1pory3, setInX1pory3] = useState("") */
  /* const [inX2pory1, setInX2pory1] = useState("") */
  /* const [inX2pory2, setInX2pory2] = useState("")
  const [inX2pory3, setInX2pory3] = useState("")
  const [inX3pory1, setInX3pory1] = useState("")
  const [inX3pory2, setInX3pory2] = useState("")
  const [inX3pory3, setInX3pory3] = useState("") */
  const [answer1, setAnswer1] = useState(false)

  useEffect(() => {
    state.map(({id, x1, x2, x3, xtotal, y1, y2, y3, ytotal, x1pory1, x1pory2, x1pory3, x2pory1, x2pory2, x2pory3, x3pory1, x3pory2, x3pory3, area, tipo, incognita1, incognita2, incognita3}) => (
      id === idChallenge &&
        setCurrent({
          id: id,
          x1: x1,
          x2: x2,
          x3: x3,
          xtotal: xtotal,
          y1: y1,
          y2: y2,
          y3: y3,
          ytotal: ytotal,
          x1pory1: x1pory1,
          x1pory2: x1pory2,
          x1pory3: x1pory3,
          x2pory1: x2pory1,
          x2pory2: x2pory2,
          x2pory3: x2pory3,
          x3pory1: x3pory1,
          x3pory2: x3pory2,
          x3pory3: x3pory3,
          area: area,
          tipo: tipo,
          incognita1: incognita1,
          incognita2: incognita2,
          incognita3: incognita3
        })
    ))
    // eslint-disable-next-line
  }, [])

  const back = () => {
    setSomeButtom(false)
    setVer(false)
  }

  const respuesta = () => {
    if(current.id === "11")
      if(inArea === current.area)
        setAnswer1(true)
    if(current.id === "12")
      if(inX1pory2 === current.x1pory2)
        setAnswer1(true)
    if(current.id === "34")
      if(inX1 === current.x1 && inX2 === current.x2)
        setAnswer1(true)
  }
  /*
    2x1
    2x2
    2x3
    3x1
    3x2
    3x3
    1x2
    1x3
    2x3
  */

  return (
    <div>
      <button onClick={() => back()}>Volver</button>
      <button onClick={() => console.log(current.id)}>current</button>
      <h1>Let's Play</h1>
      {current.tipo === "2x1" &&
        <Ejercicio2x1
          current={current}
          styles={styles}
          setInArea={setInArea}
          inArea={inArea}
          setInX1={setInX1}
          inX1={inX1}
          setInX2={setInX2}
          inX2={inX2}
          setInY1={setInY1}
          inY1={inY1}/>
      }
      <button
        className={styles.check}
        onClick={() => respuesta()}
      >Check
      </button>
      {answer1 && <h1>Right!😀</h1>}
    </div>
  )
}

export default VerEjercicio
