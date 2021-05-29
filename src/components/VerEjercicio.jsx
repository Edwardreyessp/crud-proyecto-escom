import { useEffect, useState } from "react"
import styles from "../scss/Ejercicio.module.scss";

const VerEjercicio = ({crud, idChallenge, setSomeButton, setVer}) => {
  const [current, setCurrent] = useState([])

  const back = () => {
    setSomeButton(false)
    setVer(false)
  }

  useEffect(() => {
    crud.map(({id, x1, x2, x3, xtotal, y1, y2, y3, ytotal, x1pory1, x1pory2, x1pory3, x2pory1, x2pory2, x2pory3, x3pory1, x3pory2, x3pory3, area, tipo, incognita1, incognita2, incognita3}) => (
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

  return (
    <div>
      <button onClick={() => back()}>Volver</button>
      <h1>Let's start</h1>
      <section className={styles.container}>
        {current.tipo === "2x1" &&
          <section className={styles.cuadrado2x1}>
            <div className={styles.lVerde}></div>
            <div className={styles.lMorada}></div>
            <div className={styles.xtotal}>{current.xtotal}</div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.x1}>
              {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? "R: " + current.x1
                : current.x1}
            </div>
            <div className={styles.x1pory1}>{current.x1pory1}</div>
            <div className={styles.x2}>
              {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? "R: " + current.x2
                : current.x2}
            </div>
            <div className={styles.x2pory1}>{current.x2pory1}</div>
          </section>
        }
        {current.tipo === "2x2" &&
          <section className={styles.cuadrado2x2}>
            <div className={styles.ytotal}>{current.ytotal}</div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.y2}>
              {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? "R: " + current.y2
                : current.y2}
            </div>
            <div className={styles.xtotal}>{current.xtotal}</div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
              {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? "R: " + current.x1
                : current.x1}
            </div>
            <div className={styles.x1pory1}>
              {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? "R: " + current.x1pory1
                : current.x1pory1}
            </div>
            <div className={styles.x1pory2}>
              {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? "R: " + current.x1pory2
                : current.x1pory2}
            </div>
            <div className={styles.x2}>
              {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? "R: " + current.x2
                : current.x2}
            </div>
            <div className={styles.x2pory1}>
              {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? "R: " + current.x2pory1
                : current.x2pory1}
            </div>
            <div className={styles.x2pory2}>
              {(current.incognita1 === "x2pory2"
                || current.incognita2 === "x2pory2"
                || current.incognita3 === "x2pory2")
                ? "R: " + current.x2pory2
                : current.x2pory2}
            </div>
          </section>
        }
        {current.tipo === "2x3" &&
          <section className={styles.cuadrado2x3}>
            <div className={styles.ytotal}>{current.ytotal}</div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.y2}>
              {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? "R: " + current.y2
                : current.y2}
            </div>
            <div className={styles.y3}>
            {(current.incognita1 === "y3"
                || current.incognita2 === "y3"
                || current.incognita3 === "y3")
                ? "R: " + current.y3
                : current.y3}
            </div>
            <div className={styles.xtotal}>{current.xtotal}</div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
              {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? "R: " + current.x1
                : current.x1}
            </div>
            <div className={styles.x1pory1}>{current.x1pory1}</div>
            <div className={styles.x1pory2}>
              {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? "R: " + current.x1pory2
                : current.x1pory2}
            </div>
            <div className={styles.x1pory3}>
              {(current.incognita1 === "x1pory3"
                || current.incognita2 === "x1pory3"
                || current.incognita3 === "x1pory3")
                ? "R: " + current.x1pory3
                : current.x1pory3}
            </div>
            <div className={styles.x2}> 
              {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? "R: " + current.x2
                : current.x2}</div>
            <div className={styles.x2pory1}>{current.x2pory1}</div>
            <div className={styles.x2pory2}>
              {(current.incognita1 === "x2pory2"
                || current.incognita2 === "x2pory2"
                || current.incognita3 === "x2pory2")
                ? "R: " + current.x2pory2
                : current.x2pory2}
            </div>
            <div className={styles.x2pory3}>{current.x2pory3}</div>
          </section>
        }
        {current.tipo === "3x2" &&
          <section className={styles.cuadrado3x2}>
            <div className={styles.ytotal}>{current.ytotal}</div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.y2}>{current.y2}</div>
            <div className={styles.xtotal}>{current.xtotal}</div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
              {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? "R: " + current.x1
                : current.x1}
            </div>
            <div className={styles.x1pory1}>{current.x1pory1}</div>
            <div className={styles.x1pory2}>{current.x1pory2}</div>
            <div className={styles.x2}>
              {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? "R: " + current.x2
                : current.x2}
            </div>
            <div className={styles.x2pory1}>{current.x2pory1}</div>
            <div className={styles.x2pory2}>{current.x2pory2}</div>
            <div className={styles.x3}>
              {(current.incognita1 === "x3"
                || current.incognita2 === "x3"
                || current.incognita3 === "x3")
                ? "R: " + current.x3
                : current.x3}
            </div>
            <div className={styles.x3pory1}>{current.x3pory1}</div>
            <div className={styles.x3pory2}>{current.x3pory2}</div>
          </section>
        }
        {current.tipo === "3x3" &&
          <section className={styles.cuadrado3x3}>
            <div className={styles.ytotal}>{current.ytotal}</div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.y2}>{current.y2}</div>
            <div className={styles.y3}>{current.y3}</div>
            <div className={styles.xtotal}>{current.xtotal}</div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
              {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? "R: " + current.x1
                : current.x1}
            </div>
            <div className={styles.x1pory1}>{current.x1pory1}</div>
            <div className={styles.x1pory2}>{current.x1pory2}</div>
            <div className={styles.x1pory3}>
              {(current.incognita1 === "x1pory3"
                || current.incognita2 === "x1pory3"
                || current.incognita3 === "x1pory3")
                ? "R: " + current.x1pory3
                : current.x1pory3}
            </div>
            <div className={styles.x2}>
              {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? "R: " + current.x2
                : current.x2}
            </div>
            <div className={styles.x2pory1}>
              {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? "R: " + current.x2pory1
                : current.x2pory1}
            </div>
            <div className={styles.x2pory2}>{current.x2pory2}</div>
            <div className={styles.x2pory3}>{current.x2pory3}</div>
            <div className={styles.x3}>
              {(current.incognita1 === "x3"
                || current.incognita2 === "x3"
                || current.incognita3 === "x3")
                ? "R: " + current.x3
                : current.x3}
            </div>
            <div className={styles.x3pory1}>{current.x3pory1}</div>
            <div className={styles.x3pory2}>{current.x3pory2}</div>
            <div className={styles.x3pory3}>
            {(current.incognita1 === "x3pory3"
                || current.incognita2 === "x3pory3"
                || current.incognita3 === "x3pory3")
                ? "R: " + current.x3pory3
                : current.x3pory3}
            </div>
          </section>
        }
        {current.tipo === "1x2" &&
          <section className={styles.cuadrado1x2}>
            <div className={styles.ytotal}>{current.ytotal}</div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.y2}>
              {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? "R: " + current.y2
                : current.y2}
            </div>
            <div className={styles.x1}>{current.x1}</div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1pory1}>{current.x1pory1}</div>
            <div className={styles.x1pory2}>
              {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? "R: " + current.x1pory2
                : current.x1pory2}
            </div>
          </section>
        }
        {current.tipo === "1x3" &&
          <section className={styles.cuadrado1x3}>
            <div className={styles.ytotal}>{current.ytotal}</div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? "R: " + current.y1
                : current.y1}
            </div>
            <div className={styles.y2}>
              {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? "R: " + current.y2
                : current.y2}
            </div>
            <div className={styles.y3}>{current.y3}</div>
            <div className={styles.x1}>{current.x1}</div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1pory1}>
              {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? "R: " + current.x1pory1
                : current.x1pory1}
            </div>
            <div className={styles.x1pory2}>{current.x1pory2}</div>
            <div className={styles.x1pory3}>{current.x1pory3}</div>
          </section>
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
              ? "R: " + current.area
              : current.area}
          </div>
        </section>
      </section>
    </div>
  )
}

export default VerEjercicio
