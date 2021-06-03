import { nanoid } from "nanoid"
import { useState } from "react"
import styles from "../../scss/Ejercicio.module.scss"
import swal from 'sweetalert'

const Make3x3 = ({crud, setCrud,setchallengesN7,challengesN7}) => {
  const [inX1, setInX1] = useState("")
  const [inX2, setInX2] = useState("")
  const [inX3, setInX3] = useState("")
  const [inY1, setInY1] = useState("")
  const [inY2, setInY2] = useState("")
  const [inY3, setInY3] = useState("")
  const [inX1Y1, setInX1Y1] = useState("")
  const [inX1Y2, setInX1Y2] = useState("")
  const [inX1Y3, setInX1Y3] = useState("")
  const [inX2Y1, setInX2Y1] = useState("")
  const [inX2Y2, setInX2Y2] = useState("")
  const [inX2Y3, setInX2Y3] = useState("")
  const [inX3Y1, setInX3Y1] = useState("")
  const [inX3Y2, setInX3Y2] = useState("")
  const [inX3Y3, setInX3Y3] = useState("")
  const [inXtotal, setInXtotal] = useState("")
  const [inYtotal, setInYtotal] = useState("")
  const [inArea, setInArea] = useState("")
  const [incognita1, setIncognita1] = useState("")
  const [incognita2, setIncognita2] = useState("")
  const [incognita3, setIncognita3] = useState("")
  const [answer1, setAnswer1] = useState(false)
  const [answer2, setAnswer2] = useState(false)
  const [answer3, setAnswer3] = useState(false)
  const [answer4, setAnswer4] = useState(false)
  const [answer5, setAnswer5] = useState(false)
  const [answer6, setAnswer6] = useState(false)
  const [answer7, setAnswer7] = useState(false)
  const [answer8, setAnswer8] = useState(false)
  const [nIncognita, setNIncognita] = useState(0)

  const handleSumbit = () => {
    setCrud([...crud, { 
      id: "7" +nanoid(1),
      x1: inX1,
      x2: inX2,
      x3: inX3,
      xtotal: inXtotal,
      y1: inY1,
      y2: inY2,
      y3: inY3,
      ytotal: inYtotal,
      x1pory1: inX1Y1,
      x1pory2: inX1Y2,
      x1pory3: inX1Y3,
      x2pory1: inX2Y1,
      x2pory2: inX2Y2,
      x2pory3: inX2Y3,
      x3pory1: inX3Y1,
      x3pory2: inX3Y2,
      x3pory3: inX3Y3,
      area: inArea,
      tipo: "3x3",
      incognita1: incognita1,
      incognita2: incognita2,
      incognita3: incognita3}])
    setInX1("")
    setInX2("")
    setInX3("")
    setInXtotal("")
    setInY1("")
    setInY2("")
    setInY3("")
    setInYtotal("")
    setInX1Y1("")
    setInX1Y2("")
    setInX1Y3("")
    setInX2Y1("")
    setInX2Y2("")
    setInX2Y3("")
    setInX3Y1("")
    setInX3Y2("")
    setInX3Y3("")
    setInArea("")
    setchallengesN7(challengesN7+1)
    swal("Listo","Guardado Exitosamente","success")
  }

  const setVar1 = () => {
    if(incognita1 === "")
      setIncognita1("y1")
    else if(incognita2 === "")
      setIncognita2("y1")
    else if(incognita3 === "")
      setIncognita3("y1")
    setAnswer1(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar1 = () => {
    if(incognita1 === "y1")
      setIncognita1("")
    if(incognita2 === "y1")
      setIncognita2("")
    if(incognita3 === "y1")
      setIncognita3("")
    setInY1("")
    setAnswer1(false)
    setNIncognita(nIncognita - 1)
  }

  const setVar2 = () => {
    if(incognita1 === "")
      setIncognita1("x1")
    else if(incognita2 === "")
      setIncognita2("x1")
    else if(incognita3 === "")
      setIncognita3("x1")
    setAnswer2(true)
    setNIncognita(nIncognita + 1)
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
    setNIncognita(nIncognita - 1)
  }

  const setVar3 = () => {
    if(incognita1 === "")
      setIncognita1("x1pory3")
    else if(incognita2 === "")
      setIncognita2("x1pory3")
    else if(incognita3 === "")
      setIncognita3("x1pory3")
    setAnswer3(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar3 = () => {
    if(incognita1 === "x1pory3")
      setIncognita1("")
    if(incognita2 === "x1pory3")
      setIncognita2("")
    if(incognita3 === "x1pory3")
      setIncognita3("")
    setInX1Y3("")
    setAnswer3(false)
    setNIncognita(nIncognita - 1)
  }

  const setVar4 = () => {
    if(incognita1 === "")
      setIncognita1("x2")
    else if(incognita2 === "")
      setIncognita2("x2")
    else if(incognita3 === "")
      setIncognita3("x2")
    setAnswer4(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar4 = () => {
    if(incognita1 === "x2")
      setIncognita1("")
    if(incognita2 === "x2")
      setIncognita2("")
    if(incognita3 === "x2")
      setIncognita3("")
    setInX2("")
    setAnswer4(false)
    setNIncognita(nIncognita - 1)
  }

  const setVar5 = () => {
    if(incognita1 === "")
      setIncognita1("x2pory1")
    else if(incognita2 === "")
      setIncognita2("x2pory1")
    else if(incognita3 === "")
      setIncognita3("x2pory1")
    setAnswer5(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar5 = () => {
    if(incognita1 === "x2pory1")
      setIncognita1("")
    if(incognita2 === "x2pory1")
      setIncognita2("")
    if(incognita3 === "x2pory1")
      setIncognita3("")
    setInX2Y1("")
    setAnswer5(false)
    setNIncognita(nIncognita - 1)
  }

  const setVar6 = () => {
    if(incognita1 === "")
      setIncognita1("x3")
    else if(incognita2 === "")
      setIncognita2("x3")
    else if(incognita3 === "")
      setIncognita3("x3")
    setAnswer6(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar6 = () => {
    if(incognita1 === "x3")
      setIncognita1("")
    if(incognita2 === "x3")
      setIncognita2("")
    if(incognita3 === "x3")
      setIncognita3("")
    setInX3("")
    setAnswer6(false)
    setNIncognita(nIncognita - 1)
  }

  const setVar7 = () => {
    if(incognita1 === "")
      setIncognita1("x3pory3")
    else if(incognita2 === "")
      setIncognita2("x3pory3")
    else if(incognita3 === "")
      setIncognita3("x3pory3")
    setAnswer7(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar7 = () => {
    if(incognita1 === "x3pory3")
      setIncognita1("")
    if(incognita2 === "x3pory3")
      setIncognita2("")
    if(incognita3 === "x3pory3")
      setIncognita3("")
    setInX3Y3("")
    setAnswer7(false)
    setNIncognita(nIncognita - 1)
  }

  const setVar8 = () => {
    if(incognita1 === "")
      setIncognita1("area")
    else if(incognita2 === "")
      setIncognita2("area")
    else if(incognita3 === "")
      setIncognita3("area")
    setAnswer8(true)
    setNIncognita(nIncognita + 1)
  }

  const resetVar8 = () => {
    if(incognita1 === "area")
      setIncognita1("")
    if(incognita2 === "area")
      setIncognita2("")
    if(incognita3 === "area")
      setIncognita3("")
    setInArea("")
    setAnswer8(false)
    setNIncognita(nIncognita - 1)
  }

  return (
    <>
      <section className={styles.cuadrado3x3}>
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
          {!(nIncognita === 3 && !answer1) && (answer1
            ? <button onClick={() => resetVar1()}>Reset</button>
            : <button onClick={() => setVar1()}>Set</button>)
          }
        </div>
        <div className={styles.y2}>
          <input
            type="text"
            onChange={(e) => setInY2(e.target.value)}
            value={inY2}
          />
        </div>
        <div className={styles.y3}>
          <input
            type="text"
            onChange={(e) => setInY3(e.target.value)}
            value={inY3}
          />
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
          {!(nIncognita === 3 && !answer2) && (answer2
            ? <button onClick={() => resetVar2()}>Reset</button>
            : <button onClick={() => setVar2()}>Set</button>)
          }
        </div>
        <div className={styles.x1pory1}>
          <input
            type="text"
            onChange={(e) => setInX1Y1(e.target.value)}
            value={inX1Y1}
          />
        </div>
        <div className={styles.x1pory2}>
          <input
            type="text"
            onChange={(e) => setInX1Y2(e.target.value)}
            value={inX1Y2}
          />
        </div>
        <div className={styles.x1pory3}>
          R:
          <input
            type="text"
            onChange={(e) => setInX1Y3(e.target.value)}
            value={inX1Y3}
          />
          {!(nIncognita === 3 && !answer3) && (answer3
            ? <button onClick={() => resetVar3()}>Reset</button>
            : <button onClick={() => setVar3()}>Set</button>)
          }
        </div>
        <div className={styles.x2}>
          R:
          <input
            type="text"
            onChange={(e) => setInX2(e.target.value)}
            value={inX2}
          />
          {!(nIncognita === 3 && !answer4) && (answer4
            ? <button onClick={() => resetVar4()}>Reset</button>
            : <button onClick={() => setVar4()}>Set</button>)
          }
        </div>
        <div className={styles.x2pory1}>
          R:
          <input
            type="text"
            onChange={(e) => setInX2Y1(e.target.value)}
            value={inX2Y1}
          />
          {!(nIncognita === 3 && !answer5) && (answer5
            ? <button onClick={() => resetVar5()}>Reset</button>
            : <button onClick={() => setVar5()}>Set</button>)
          }
        </div>
        <div className={styles.x2pory2}>
          <input
            type="text"
            onChange={(e) => setInX2Y2(e.target.value)}
            value={inX2Y2}
          />
        </div>
        <div className={styles.x2pory3}>
          <input
            type="text"
            onChange={(e) => setInX2Y3(e.target.value)}
            value={inX2Y3}
          />
        </div>
        <div className={styles.x3}>
          R:
          <input
            type="text"
            onChange={(e) => setInX3(e.target.value)}
            value={inX3}
          />
          {!(nIncognita === 3 && !answer6) && (answer6
            ? <button onClick={() => resetVar6()}>Reset</button>
            : <button onClick={() => setVar6()}>Set</button>)
          }
        </div>
        <div className={styles.x3pory1}>
          <input
            type="text"
            onChange={(e) => setInX3Y1(e.target.value)}
            value={inX3Y1}
          />
        </div>
        <div className={styles.x3pory2}>
          <input
            type="text"
            onChange={(e) => setInX3Y2(e.target.value)}
            value={inX3Y2}
          />
        </div>
        <div className={styles.x3pory3}>
          R:
          <input
            type="text"
            onChange={(e) => setInX3Y3(e.target.value)}
            value={inX3Y3}
          />
          {!(nIncognita === 3 && !answer7) && (answer7
            ? <button onClick={() => resetVar7()}>Reset</button>
            : <button onClick={() => setVar7()}>Set</button>)
          }
        </div>
      </section>
      <section className={styles.text2x1}>
        <div className={styles.box1}>
          <div className={styles.dimensions}>Dimensions</div>
          <div className={styles.xtotal}>
            {inXtotal === ""
              ? <div className={styles.emptyVerde}></div>
              : inXtotal
            }
          </div>
          <div className={styles.x}>X</div>
          <div className={styles.ytotal}>
            {inYtotal === ""
              ? <div className={styles.emptyMorado}></div>
              : inYtotal
            }
          </div>
        </div>
        <div className={styles.box2}>
          <div>Text area of model</div>
          <div>
            R:
            <input
              type="text"
              onChange={(e) => setInArea(e.target.value)}
              value={inArea}
            />
            {!(nIncognita === 3 && !answer8) && (answer8
              ? <button onClick={() => resetVar8()}>Reset</button>
              : <button onClick={() => setVar8()}>Set</button>)
            }
          </div>
        </div>
        <button
          className={styles.save}
          onClick={() => handleSumbit()}>
          Save
        </button>
      </section>
    </>
  )
}

export default Make3x3
