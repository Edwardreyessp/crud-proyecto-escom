import { useEffect, useState } from "react"
import styles from '../../scss/Ejercicio.module.scss'
import Ejercicio1x2 from "../Ejercicio1x2"
import Ejercicio1x3 from "../Ejercicio1x3"
import Ejercicio2x1 from "../Ejercicio2x1"
import Ejercicio2x2 from "../Ejercicio2x2"
import Ejercicio2x3 from "../Ejercicio2x3"
import Ejercicio3x2 from "../Ejercicio3x2"
import Ejercicio3x3 from "../Ejercicio3x3"
import Felicidades from "../Felicidades"

const Nivel4 = ({crud, setStar4,Star4,Inicio,challengesN4, setBandera4}) => {
  const [superado, setSuperado] = useState(0)
  const [current, setCurrent] = useState([])
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
  const [inX3pory3, setInX3pory3] = useState("")
  const [inArea, setInArea] = useState("")
  const [answer1, setAnswer1] = useState(false)
  const [answer2, setAnswer2] = useState(false)
  const [answer3, setAnswer3] = useState(false)
  const [song, setSong] = useState(false)
  const [crudPosition, setcrudPosition] = useState(Inicio)

  useEffect(() => {
    if((crudPosition < crud.length)) {
      crud.map(({id, x1, x2, x3, xtotal, y1, y2, y3, ytotal, x1pory1, x1pory2, x1pory3, x2pory1, x2pory2, x2pory3, x3pory1, x3pory2, x3pory3, area, tipo, incognita1, incognita2, incognita3}) => (
      id === crud[crudPosition].id &&
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
    }
    // eslint-disable-next-line
  }, [crudPosition])


  const Reproducir = ()=> {
    var sonido = new Audio();
    //sonido.src="good.mp3";
    sonido.src="porfaborrame.mp3";
    sonido.play();
  }

  const respuesta2 = () => {
    if(current.incognita3 !== "" && current.incognita2 !== "" && current.incognita1 !== "") {
      if(current.incognita1 === "x1")
        if(current.x1 === inX1)
          setAnswer1(true)
      if(current.incognita1 === "x2")
        if(current.x2 === inX2)
          setAnswer1(true)
      if(current.incognita1 === "x3")
        if(current.x3 === inX3)
          setAnswer1(true)
      if(current.incognita1 === "y1")
        if(current.y1 === inY1)
          setAnswer1(true)
      if(current.incognita1 === "y2")
        if(current.y2 === inY2)
          setAnswer1(true)
      if(current.incognita1 === "y3")
        if(current.y3 === inY3)
          setAnswer1(true)
      if(current.incognita1 === "x1pory1")
        if(current.x1pory1 === inX1pory1)
          setAnswer1(true)
      if(current.incognita1 === "x1pory2")
        if(current.x1pory2 === inX1pory2)
          setAnswer1(true)
      if(current.incognita1 === "x1pory3")
        if(current.x1pory3 === inX1pory3)
          setAnswer1(true)
      if(current.incognita1 === "x2pory1")
        if(current.x2pory1 === inX2pory1)
          setAnswer1(true)
      if(current.incognita1 === "x2pory2")
        if(current.x2pory2 === inX2pory2)
          setAnswer1(true)
      if(current.incognita1 === "x3pory3")
        if(current.x3pory3 === inX3pory3)
          setAnswer1(true)
      if(current.incognita1 === "area")
        if(current.area === inArea)
          setAnswer1(true)
      /* i2 */
      if(current.incognita2 === "x1")
        if(current.x1 === inX1)
          setAnswer2(true)
      if(current.incognita2 === "x2")
        if(current.x2 === inX2)
          setAnswer2(true)
      if(current.incognita2 === "x3")
        if(current.x3 === inX3)
          setAnswer2(true)
      if(current.incognita2 === "y1")
        if(current.y1 === inY1)
          setAnswer2(true)
      if(current.incognita2 === "y2")
        if(current.y2 === inY2)
          setAnswer2(true)
      if(current.incognita2 === "y3")
        if(current.y3 === inY3)
          setAnswer2(true)
      if(current.incognita2 === "x1pory1")
        if(current.x1pory1 === inX1pory1)
          setAnswer2(true)
      if(current.incognita2 === "x1pory2")
        if(current.x1pory2 === inX1pory2)
          setAnswer2(true)
      if(current.incognita2 === "x1pory3")
        if(current.x1pory3 === inX1pory3)
          setAnswer2(true)
      if(current.incognita2 === "x2pory1")
        if(current.x2pory1 === inX2pory1)
          setAnswer2(true)
      if(current.incognita2 === "x2pory2")
        if(current.x2pory2 === inX2pory2)
          setAnswer2(true)
      if(current.incognita2 === "x3pory3")
        if(current.x3pory3 === inX3pory3)
          setAnswer2(true)
      if(current.incognita2 === "area")
        if(current.area === inArea)
          setAnswer2(true)
      /* i3 */
      if(current.incognita3 === "x1")
        if(current.x1 === inX1)
          setAnswer3(true)
      if(current.incognita3 === "x2")
        if(current.x2 === inX2)
          setAnswer3(true)
      if(current.incognita3 === "x3")
        if(current.x3 === inX3)
          setAnswer3(true)
      if(current.incognita3 === "y1")
        if(current.y1 === inY1)
          setAnswer3(true)
      if(current.incognita3 === "y2")
        if(current.y2 === inY2)
          setAnswer3(true)
      if(current.incognita3 === "y3")
        if(current.y3 === inY3)
          setAnswer3(true)
      if(current.incognita3 === "x1pory1")
        if(current.x1pory1 === inX1pory1)
          setAnswer3(true)
      if(current.incognita3 === "x1pory2")
        if(current.x1pory2 === inX1pory2)
          setAnswer3(true)
      if(current.incognita3 === "x1pory3")
        if(current.x1pory3 === inX1pory3)
          setAnswer3(true)
      if(current.incognita3 === "x2pory1")
        if(current.x2pory1 === inX2pory1)
          setAnswer3(true)
      if(current.incognita3 === "x2pory2")
        if(current.x2pory2 === inX2pory2)
          setAnswer3(true)
      if(current.incognita3 === "x3pory3")
        if(current.x3pory3 === inX3pory3)
          setAnswer3(true)
      if(current.incognita3 === "area")
        if(current.area === inArea)
          setAnswer3(true)
    }
    if(current.incognita3 === "" && current.incognita2 !== "" && current.incognita1 !== "") {
      if(current.incognita1 === "x1")
        if(current.x1 === inX1)
          setAnswer1(true)
      if(current.incognita1 === "x2")
        if(current.x2 === inX2)
          setAnswer1(true)
      if(current.incognita1 === "x3")
        if(current.x3 === inX3)
          setAnswer1(true)
      if(current.incognita1 === "y1")
        if(current.y1 === inY1)
          setAnswer1(true)
      if(current.incognita1 === "y2")
        if(current.y2 === inY2)
          setAnswer1(true)
      if(current.incognita1 === "y3")
        if(current.y3 === inY3)
          setAnswer1(true)
      if(current.incognita1 === "x1pory1")
        if(current.x1pory1 === inX1pory1)
          setAnswer1(true)
      if(current.incognita1 === "x1pory2")
        if(current.x1pory2 === inX1pory2)
          setAnswer1(true)
      if(current.incognita1 === "x1pory3")
        if(current.x1pory3 === inX1pory3)
          setAnswer1(true)
      if(current.incognita1 === "x2pory1")
        if(current.x2pory1 === inX2pory1)
          setAnswer1(true)
      if(current.incognita1 === "x2pory2")
        if(current.x2pory2 === inX2pory2)
          setAnswer1(true)
      if(current.incognita1 === "x3pory3")
        if(current.x3pory3 === inX3pory3)
          setAnswer1(true)
      if(current.incognita1 === "area")
        if(current.area === inArea)
          setAnswer1(true)
      /*i 2*/
      if(current.incognita2 === "x1")
        if(current.x1 === inX1)
          setAnswer2(true)
      if(current.incognita2 === "x2")
        if(current.x2 === inX2)
          setAnswer2(true)
      if(current.incognita2 === "x3")
        if(current.x3 === inX3)
          setAnswer2(true)
      if(current.incognita2 === "y1")
        if(current.y1 === inY1)
          setAnswer2(true)
      if(current.incognita2 === "y2")
        if(current.y2 === inY2)
          setAnswer2(true)
      if(current.incognita2 === "y3")
        if(current.y3 === inY3)
          setAnswer2(true)
      if(current.incognita2 === "x1pory1")
        if(current.x1pory1 === inX1pory1)
          setAnswer2(true)
      if(current.incognita2 === "x1pory2")
        if(current.x1pory2 === inX1pory2)
          setAnswer2(true)
      if(current.incognita2 === "x1pory3")
        if(current.x1pory3 === inX1pory3)
          setAnswer2(true)
      if(current.incognita2 === "x2pory1")
        if(current.x2pory1 === inX2pory1)
          setAnswer2(true)
      if(current.incognita2 === "x2pory2")
        if(current.x2pory2 === inX2pory2)
          setAnswer2(true)
      if(current.incognita2 === "x3pory3")
        if(current.x3pory3 === inX3pory3)
          setAnswer2(true)
      if(current.incognita2 === "area")
        if(current.area === inArea)
          setAnswer2(true)
      setAnswer3(true)
    }
    if(current.incognita3 === "" && current.incognita2 === "" && current.incognita1 !== "") {
      if(current.incognita1 === "x1")
        if(current.x1 === inX1)
          setAnswer1(true)
      if(current.incognita1 === "x2")
        if(current.x2 === inX2)
          setAnswer1(true)
      if(current.incognita1 === "x3")
        if(current.x3 === inX3)
          setAnswer1(true)
      if(current.incognita1 === "y1")
        if(current.y1 === inY1)
          setAnswer1(true)
      if(current.incognita1 === "y2")
        if(current.y2 === inY2)
          setAnswer1(true)
      if(current.incognita1 === "y3")
        if(current.y3 === inY3)
          setAnswer1(true)
      if(current.incognita1 === "x1pory1")
        if(current.x1pory1 === inX1pory1)
          setAnswer1(true)
      if(current.incognita1 === "x1pory2")
        if(current.x1pory2 === inX1pory2)
          setAnswer1(true)
      if(current.incognita1 === "x1pory3")
        if(current.x1pory3 === inX1pory3)
          setAnswer1(true)
      if(current.incognita1 === "x2pory1")
        if(current.x2pory1 === inX2pory1)
          setAnswer1(true)
      if(current.incognita1 === "x2pory2")
        if(current.x2pory2 === inX2pory2)
          setAnswer1(true)
      if(current.incognita1 === "x3pory3")
        if(current.x3pory3 === inX3pory3)
          setAnswer1(true)
      if(current.incognita1 === "area")
        if(current.area === inArea)
          setAnswer1(true)
      setAnswer2(true)
      setAnswer3(true)
    }
    setSong(true)
  }
  
  const Refresh = () => {
    setSong(false)
    setAnswer1(false)
    setAnswer2(false)
    setAnswer3(false)
    setcrudPosition(crudPosition + 1)
    setInX1("")
    setInX2("")
    setInX3("")
    setInY1("")
    setInY2("")
    setInY3("")
    setInX1pory2("")
    setInX1pory3("")
    setInX2pory1("")
    setInX2pory2("")
    setInX3pory3("")
    setInArea("")
  }

  return (
    <div>
      {challengesN4===0 ? <h1>The task are empty</h1>
      :<>
      {superado === challengesN4 
        ? <Felicidades setBandera4={setBandera4} id={crud[crudPosition - 1].id}/>
        : <>
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
                  setInY3={setInY3}
                  setInX2={setInX2}
                  setInX1pory2={setInX1pory2}
                  setInX1pory3={setInX1pory3}
                  setInX2pory2={setInX2pory2}
                  inX1={inX1}
                  inY1={inY1}
                  inY2={inY2}
                  inY3={inY3}
                  inX2={inX2}
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
                  setInX3pory3={setInX3pory3}
                  inX3pory3={inX3pory3}
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
            {!(answer1 && answer2 && answer3) && <button
              className={styles.check}
              onClick={() => respuesta2()}
            >Check
            </button>}
            {(answer1 && answer2 && answer3 && song) && Reproducir() }
            {(answer1 && answer2 && answer3) && <h1>Right!😀</h1> }
            {(answer1 && answer2 && answer3 && song) && setStar4(Star4+1 ) }
            {(answer1 && answer2 && answer3 && song) && Refresh()}
            {(answer1 && answer2 && answer3 && song) && setSuperado(superado+1)}
            {song && setSong(false)}
          </>
      }
      </>}
    </div>
  )
}

export default Nivel4

