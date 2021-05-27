import React from 'react';

const Ejercicio2x1 = ({current, styles, setInArea, setInX1, setInX2, setInY1, inX1, inX2, inY1, inArea}) => {
  return (
    <section className={styles.container}>
          <section className={styles.cuadrado2x1}>
            <div className={styles.lVerde}></div>
            <div className={styles.lMorada}></div>
            <div className={styles.xtotal}>{current.xtotal}</div>
            <div className={styles.y1}>
              {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? <input
                  type="text"
                  onChange={(e) => setInY1(e.target.value)}
                  value={inY1}
                />
                : current.y1}
            </div>
            <div className={styles.x1}>
              {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? <input
                  type="text"
                  onChange={(e) => setInX1(e.target.value)}
                  value={inX1}
                />
                : current.x1}
            </div>
            <div className={styles.x1pory1}>{current.x1pory1}</div>
            <div className={styles.x2}>
              {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? <input
                  type="text"
                  onChange={(e) => setInX2(e.target.value)}
                  value={inX2}
                />
                : current.x2}
            </div>
            <div className={styles.x2pory1}>{current.xtotal}</div>
          </section>
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
              <div className={styles.y1}>
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
  )
}

export default Ejercicio2x1
