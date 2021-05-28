import { useEffect, useState } from "react"
import styles from '../scss/Ejercicio.module.scss'
import Ejercicio1x2 from "./Ejercicio1x2"
import Ejercicio1x3 from "./Ejercicio1x3"
import Ejercicio2x1 from "./Ejercicio2x1"
import Ejercicio2x2 from "./Ejercicio2x2"
import Ejercicio2x3 from "./Ejercicio2x3"
import Ejercicio3x2 from "./Ejercicio3x2"
import Ejercicio3x3 from "./Ejercicio3x3"

const VerEjercicio = ({state, idChallenge, setSomeButtom, setVer}) => {
  const [current, setCurrent] = useState([])
  const [inArea, setInArea] = useState("")
  const [inX1, setInX1] = useState("")
  const [inX2, setInX2] = useState("")
  const [inX3, setInX3] = useState("")
  const [inY1, setInY1] = useState("")
  const [inY2, setInY2] = useState("")
  const [inY3, setInY3] = useState("")
  const [inX1pory1, setInX1pory1] = useState("")
  const [inX1pory2, setInX1pory2] = useState("")
  const [inX1pory3, setInX1pory3] = useState("")
  const [inX2pory1, setInX2pory1] = useState("")
  const [inX2pory2, setInX2pory2] = useState("")
  //const [inX2pory3, setInX2pory3] = useState("")
  //const [inX3pory1, setInX3pory1] = useState("")
  //const [inX3pory2, setInX3pory2] = useState("")
  const [inX3pory3, setInX3pory3] = useState("")
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

  const Reproducir = ()=> {
    var sonido = new Audio();
    //sonido.src="good.mp3";
    sonido.src="porfaborrame.mp3";
    sonido.play();
  }

  const respuesta = () => {
    if(current.id === "11")
      if(inArea === current.area)
        setAnswer1(true)
    if(current.id === "12")
      if(inX1pory2 === current.x1pory2)
        setAnswer1(true)
    if(current.id === "13")
      if(inArea === current.area)
        setAnswer1(true)
    if(current.id === "14")
      if(inX1pory2 === current.x1pory2)
        setAnswer1(true)
    if(current.id === "15")
      if(inX1pory1=== current.x1pory1)
        setAnswer1(true)
    if(current.id === "16")
      if(inArea === current.area)
        setAnswer1(true)
    if(current.id === "21")
      if(inX1pory1 === current.x1pory1 && inX2pory2 === current.x2pory2)
        setAnswer1(true)
    if(current.id === "22")
      if(inX1pory2 === current.x1pory2 && inArea === current.area)
        setAnswer1(true)
    if(current.id === "23")
      if(setInX2pory1 === current.x2pory1 && inX3pory3 === current.x3pory3)
        setAnswer1(true)
    if(current.id === "24")
      if(inX2pory1 === current.x2pory1 && inX2pory1 === current.x2pory1 )
        setAnswer1(true)
    if(current.id === "25")
      if(inX1pory3 === current.x1pory3 && inX2pory2 === current.x2pory2)
        setAnswer1(true)
    if(current.id === "26")
      if(inX1pory2 === current.x1pory2 && inX2pory1 === current.x2pory1)
        setAnswer1(true)
    if(current.id === "31")
      if(inY2 === current.y2 && inY1 === current.y1)
        setAnswer1(true)
    if(current.id ==="32")
      if(inX1 === current.x1 && inY2 === current.y2)
        setAnswer1(true)
    if(current.id === "33")
      if(inX2 === current.x2 && inY2=== current.y2)
        setAnswer1(true)
    if(current.id === "34")
      if(inX1 === current.x1 && inX2 === current.x2)
        setAnswer1(true)
    if(current.id==="35")
      if(inY1===current.y1 && inY2===current.y2)
        setAnswer1(true)
    if(current.id === "36")
        if(inX1 === current.x1 && inX2 === current.x2)
        setAnswer1(true)
    if(current.id === "41")
      if(inX1 === current.x1 && inX2 === current.x2 && inX3 === current.x3)
        setAnswer1(true)
    if(current.id === "42")
      if(inX1 === current.x1 && inX3 ===current.x3 && inY1=== current.y1)
        setAnswer1(true)
    if(current.id === "43")
      if(inX2 === current.x2 && inY2 === current.y2 && inY3 === current.y3)
        setAnswer1(true)
    if(current.id === "44")
      if(inX1 === current.x1 && inX3 === current.x3 && inX1 === current.x1)
        setAnswer1(true)
    if(current.id === "45")
      if(inX1 === current.x1 && inY2 === current.y2 && inY1 === current.y1)
        setAnswer1(true)
    if(current.id === "46")
      if(inX2 === current.x2 && inX3 === current.x3 &&inY1 === current.y1)
      setAnswer1(true)
    if(current.id === "51")
      if(inX1 === current.x1 && inY1 === current.y1)
        setAnswer1(true)
    if(current.id==="52")
      if(inX2 === current.x2 && inY1 === current.y1)
        setAnswer1(true)
    if(current.id === "53")
      if(inX1=== current.x1 && inY1 === current.y1)
      setAnswer1(true)
    if(current.id === "54")
      if(inX1 === current.x1 && inY2 === current.y2 )
        setAnswer1(true)
    if(current.id === "55")
      if(inX1 === current.x1 && inY2 === current.y2)
        setAnswer1(true)
    if(current.id === "56")
      if(inX1 === current.x1 && inY1 === current.y1)
        setAnswer1(true)
    if(current.id ==="61")
      if(inX1 === current.x1 && inY1 === current.y1 && inY2 === current.y2)
        setAnswer1(true)
    if(current.id === "62")
      if(inX1 === current.x1 && inX2 === current.x2 && inY2 === current.y2)
        setAnswer1(true)
    if(current.id === "63")
      if(inX1 === current.x1 && inX2 === current.x2 && inY2 === current.y2)
        setAnswer1(true)
    if(current.id === "64")
      if(inX1 === current.x1 && inX2 === current.x2 && inY1 === current.y1)
        setAnswer1(true)
    if(current.id === "65")
      if(inX1 === current.x1 && inX2 === current.x2 && inY2 === current.y2)
        setAnswer1(true)
    if(current.id === "66")
      if(inX1 === current.x1 && inX2 === current.x2 && inY1 === current.y1)
        setAnswer1(true)            
  }
  /*
    2x1 ok
    2x2 ok
    2x3 ok
    3x1 no hay
    3x2 ok
    3x3 ok
    1x2 ok
    1x3 ok
  */

  return (
    <div>
      <button onClick={() => back()}>Volver</button>
      <button onClick={() => console.log(current.tipo)}>current</button>
      <h1>Let's Play</h1>
      <section className={styles.container}>
        {current.tipo === "2x1" &&
          <Ejercicio2x1
            current={current}
            styles={styles}
            setInX1={setInX1}
            setInX2={setInX2}
            setInY1={setInY1}
            setInX1pory1={setInX1pory1}
            setInX2pory1={setInX1pory2} 
            inX1={inX1}
            inX2={inX2}
            inY1={inY1}
            inX1pory1={inX1pory1}
            inX2pory1={inX1pory1}/>
        }
        {current.tipo === "2x2" &&
          <Ejercicio2x2
            current={current}
            styles={styles}
            setInX1={setInX1}
            setInX2={setInX2}
            setInY1={setInY1}
            setInY2={setInY2}
            setInX1pory1={setInX1pory1}
            setInX1pory2={setInX1pory2}
            setInX2pory1={setInX2pory1}
            setInX2pory2={setInX2pory2}
            inX1={inX1}
            inX2={inX2}
            inY1={inY1}
            inY2={inY2}
            inX1pory1={inX1pory1}
            inX1pory2={inX1pory2}
            inX2pory1={inX2pory1}
            inX2pory2={inX2pory2}
          />
        }
        {current.tipo === "2x3" &&
          <Ejercicio2x3
            current={current}
            styles={styles}
            setInX1={setInX1}
            setInY1={setInY1}
            setInY2={setInY2}
            setInX1pory2={setInX1pory2}
            setInX1pory3={setInX1pory3}
            setInX2pory2={setInX2pory2}
            inX1={inX1}
            inY1={inY1}
            inY2={inY2}
            inX1pory2={inX1pory2}
            inX1pory3={inX1pory3}
            inX2pory2={inX2pory2}
          />
        }
        {current.tipo === "3x2" &&
          <Ejercicio3x2
            current={current}
            styles={styles}
            setInX1={setInX1}
            setInX2={setInX2}
            setInX3={setInX3}
            setInY1={setInY1}
            inX1={inX1}
            inX2={inX2}
            inX3={inX3}
            inY1={inY1}
          />
        }
        {current.tipo === "3x3" &&
          <Ejercicio3x3
            current={current}
            styles={styles}
            setInX1={setInX1}
            setInX3={setInX3}
            setInY1={setInY1}
            setInX2pory1={setInX2pory1}
            setInX1pory3={setInX3pory3}
            inX1={inX1}
            inX3={inX3}
            inY1={inY1}
            inX2pory1={inX2pory1}
            inX1pory3={inX3pory3}
          />
        }
        {current.tipo === "1x2" &&
          <Ejercicio1x2
            current={current}
            styles={styles}
            setInY1={setInY1}
            setInY2={setInY2}
            setInX1pory2={setInX1pory2}
            inY1={inY1}
            inY2={inY2}
            inX1pory2={inX1pory2}
          />
        }
        {current.tipo === "1x3" &&
          <Ejercicio1x3
            current={current}
            styles={styles}
            setInY1={setInY1}
            setInY2={setInY2}
            setInX1pory1={setInX1pory1}
            inY1={inY1}
            inY2={inY2}
            inX1pory1={inX1pory1}
          />
        }
        <section className={styles.text2x1}>
          <div className={styles.box1}>
            <div className={styles.dimensions}>Dimensions</div>
            <div className={styles.xtotal}>
              {(current.incognita1 === "xtotal"
              || current.incognita2 === "xtotal"
              || current.incognita3 === "xtotal")
              ? <div className={styles.emptyVerde}></div>
              : current.xtotal}
            </div>
            <div className={styles.x}>X</div>
            <div className={styles.ytotal}>
              {(current.incognita1 === "ytotal"
              || current.incognita2 === "ytotal"
              || current.incognita3 === "ytotal")
              ? <div className={styles.emptyMorado}></div>
              : current.ytotal}
            </div>
          </div>
          <div className={styles.box2}>
            <div>Text area of model</div>
            {(current.incognita1 === "area"
              || current.incognita2 === "area"
              || current.incognita3 === "area")
              ? <input
                type="text"
                onChange={(e) => setInArea(e.target.value)}
                value={inArea}
              />
              : current.area}
          </div>
        </section>
      </section>
      <button
        className={styles.check}
        onClick={() => respuesta()}
      >Check
      </button>
      {answer1 && Reproducir() }
      {answer1 && <h1>Right!😀</h1> }
    </div>
  )
}

export default VerEjercicio
