const Ejercicio1x3 = ({current, styles, setInY1, setInY2, setInX1pory1, inY1, inY2, inX1pory1}) => {
  return (
    <>
      <section className={styles.cuadrado1x3}>
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
        <div className={styles.y2}>
          {(current.incognita1 === "y2"
            || current.incognita2 === "y2"
            || current.incognita3 === "y2")
            ? <input
              type="text"
              onChange={(e) => setInY2(e.target.value)}
              value={inY2}
            />
            : current.y2}
        </div>
        <div className={styles.y3}>{current.y3}</div>
        <div className={styles.x1}>{current.x1}</div>
        <div className={styles.lVerde}></div>
        <div className={styles.x1pory1}>
          {(current.incognita1 === "x1pory1"
            || current.incognita2 === "x1pory1"
            || current.incognita3 === "x1pory1")
            ? <input
              type="text"
              onChange={(e) => setInX1pory1(e.target.value)}
              value={inX1pory1}
            />
            : current.x1pory1}
        </div>
        <div className={styles.x1pory2}>{current.x1pory2}</div>
        <div className={styles.x1pory3}>{current.x1pory3}</div>
      </section>
    </>
  )
}

export default Ejercicio1x3
