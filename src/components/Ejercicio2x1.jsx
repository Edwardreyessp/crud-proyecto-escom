import React from 'react';

const Ejercicio2x1 = ({current, styles, setInX1, setInX2, setInY1, inX1, inX2, inY1}) => {
  return (
    <>
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
    </>
  )
}

export default Ejercicio2x1
