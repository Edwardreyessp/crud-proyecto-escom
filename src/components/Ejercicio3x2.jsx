const Ejercicio3x2 = ({current, styles, setInX1, setInX2, setInX3, setInY1, inX1, inX2, inX3, inY1}) => {
  return (
    <>
      <section className={styles.cuadrado3x2}>
        <div className={styles.ytotal}>{current.ytotal}</div>
        <div className={styles.lMorada}></div>
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
        <div className={styles.y2}>{current.y2}</div>
        <div className={styles.xtotal}>{current.xtotal}</div>
        <div className={styles.lVerde}></div>
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
        <div className={styles.x1pory2}>{current.x1pory2}</div>
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
        <div className={styles.x2pory1}>{current.x2pory1}</div>
        <div className={styles.x2pory2}>{current.x2pory2}</div>
        <div className={styles.x3}>
          {(current.incognita1 === "x3"
            || current.incognita2 === "x3"
            || current.incognita3 === "x3")
            ? <input
              type="text"
              onChange={(e) => setInX3(e.target.value)}
              value={inX3}
            />
            : current.x3}
        </div>
        <div className={styles.x3pory1}>{current.x3pory1}</div>
        <div className={styles.x3pory2}>{current.x3pory2}</div>
      </section>
    </>
  )
}

export default Ejercicio3x2
