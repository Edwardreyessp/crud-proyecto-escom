import { nanoid } from "nanoid"
import { useState } from "react"
import styles from "../../scss/Ejercicio.module.scss"

const Make2X2 = ({setCrud, crud}) => {
  const [inX1, setInX1] = useState("")
  const [inX2, setInX2] = useState("")
  const [inY1, setInY1] = useState("")
  const [inY2, setInY2] = useState("")
  const [inX1Y1, setInX1Y1] = useState("")
  const [inX1Y2, setInX1Y2] = useState("")
  const [inX2Y1, setInX2Y1] = useState("")
  const [inX2Y2, setInX2Y2] = useState("")
  const [inXtotal, setInXtotal] = useState("")
  const [inYtotal, setInYtotal] = useState("")
  const [inArea, setInArea] = useState("")
  const [incognita1, setIncognita1] = useState("");
  const [incognita2, setIncognita2] = useState("");
  const [incognita3, setIncognita3] = useState("");
  const [answer1, setAnswer1] = useState(false)
  const [answer2, setAnswer2] = useState(false)
  const [answer3, setAnswer3] = useState(false)
  const [answer4, setAnswer4] = useState(false)
    
  const handleSumbit = () => {
    setCrud([...crud, { 
      id: nanoid(2),
      x1: inX1,
      x2: inX2,
      x3: "",
      xtotal: inXtotal,
      y1: inYtotal,
      y2: "",
      y3: "",
      ytotal: inYtotal,
      x1pory1: inX1Y1,
      x1pory2: "",
      x1pory3: "",
      x2pory1: inX2Y1,
      x2pory2: "",
      x2pory3: "",
      x3pory1: "",
      x3pory2: "",
      x3pory3: "",
      area: inArea,
      tipo: "2x1",
      incognita1: incognita1,
      incognita2: incognita2,
      incognita3: incognita3}])
    setInX1("")
    setInX2("")
    setInXtotal("")
    setInYtotal("")
    setInX1Y1("")
    setInX2Y1("")
    setInArea("")
    setIncognita1("")
    setIncognita2("")
    setIncognita3("")
    setInX1("")
    setInX2("")
    setInXtotal("")
    setInYtotal("")
    setInX1Y1("")
    setInX2Y1("")
    setInArea("")
    setIncognita1("")
    setIncognita2("")
    setIncognita3("")
    alert("Guardado exitósamente")
  }

  const setVar1 = () => {
    if(incognita1 === "")
      setIncognita1("y1")
    else if(incognita2 === "")
      setIncognita2("y1")
    else if(incognita3 === "")
      setIncognita3("y1")
    setAnswer1(true)
  }

  const resetVar1 = () => {
    if(incognita1 === "y1")
      setIncognita1("")
    if(incognita2 === "y1")
      setIncognita2("")
    if(incognita3 === "y1")
      setIncognita3("")
    setInYtotal("")
    setAnswer1(false)
  }

  const setVar2 = () => {
    if(incognita1 === "")
      setIncognita1("x1")
    else if(incognita2 === "")
      setIncognita2("x1")
    else if(incognita3 === "")
      setIncognita3("x1")
    setAnswer2(true)
  }

  const resetVar2 = () => {
    if(incognita1 === "x1")
      setIncognita1("")
    if(incognita2 === "x1")
      setIncognita2("")
    if(incognita3 === "x1")
      setIncognita3("")
    setInX1("")
    setAnswer2(false)
  }

  const setVar3 = () => {
    if(incognita1 === "")
      setIncognita1("x2")
    else if(incognita2 === "")
      setIncognita2("x2")
    else if(incognita3 === "")
      setIncognita3("x2")
    setAnswer3(true)
  }

  const resetVar3 = () => {
    if(incognita1 === "x2")
      setIncognita1("")
    if(incognita2 === "x2")
      setIncognita2("")
    if(incognita3 === "x2")
      setIncognita3("")
    setInX2("")
    setAnswer3(false)
  }

  const setVar4 = () => {
    if(incognita1 === "")
      setIncognita1("area")
    else if(incognita2 === "")
      setIncognita2("area")
    else if(incognita3 === "")
      setIncognita3("area")
    setAnswer4(true)
  }

  const resetVar4 = () => {
    if(incognita1 === "area")
      setIncognita1("")
    if(incognita2 === "area")
      setIncognita2("")
    if(incognita3 === "area")
      setIncognita3("")
    setInArea("")
    setAnswer4(false)
  }

  return (
    <>
      <section className={styles.cuadrado2x2}>
        <div className={styles.ytotal}>
          <input
            type="text"
            onChange={(e) => setInYtotal(e.target.value)}
            value={inYtotal}
          />
        </div>
        <div className={styles.lMorada}></div>
        <div className={styles.y1}>
          R:
          <input
            type="text"
            onChange={(e) => setInY1(e.target.value)}
            value={inY1}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.y2}>
          R:
          <input
            type="text"
            onChange={(e) => setInY2(e.target.value)}
            value={inY2}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.xtotal}>
          <input
            type="text"
            onChange={(e) => setInXtotal(e.target.value)}
            value={inXtotal}
          />
        </div>
        <div className={styles.lVerde}></div>
        <div className={styles.x1}>
          R:
          <input
            type="text"
            onChange={(e) => setInX1(e.target.value)}
            value={inX1}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.x1pory1}>
          R:
          <input
            type="text"
            onChange={(e) => setInX1Y1(e.target.value)}
            value={inX1Y1}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.x1pory2}>
          R:
          <input
            type="text"
            onChange={(e) => setInX1Y2(e.target.value)}
            value={inX1Y2}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.x2}>
          R:
          <input
            type="text"
            onChange={(e) => setInX2(e.target.value)}
            value={inX2}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.x2pory1}>
          R:
          <input
            type="text"
            onChange={(e) => setInX2Y1(e.target.value)}
            value={inX2Y1}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.x2pory2}>
          R:
          <input
            type="text"
            onChange={(e) => setInX2Y2(e.target.value)}
            value={inX2Y2}
          />
          {!(answer2 && answer3 && answer4) && (answer1
            ? <button onClick={() => {resetVar1()}}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
      </section>
    </>
  )
}

export default Make2X2
