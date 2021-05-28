const Ejercicio2x2 =({current, styles, setInX1, setInX2, setInY1, setInY2, setInX1pory1, setInX1pory2, setInX2pory1, setInX2pory2, inX1, inX2, inY1, inY2, inX1pory1, inX1pory2, inX2pory1, inX2pory2}) =>{
  return (
    <>
      <section className={styles.cuadrado2x2}>
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
        <div className={styles.x1pory2}>
          {(current.incognita1 === "x1pory2"
            || current.incognita2 === "x1pory2"
            || current.incognita3 === "x1pory2")
            ? <input
              type="text"
              onChange={(e) => setInX1pory2(e.target.value)}
              value={inX1pory2}
            />
            : current.x1pory2}
        </div>
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
        <div className={styles.x2pory1}>
          {(current.incognita1 === "x2pory1"
            || current.incognita2 === "x2pory1"
            || current.incognita3 === "x2pory1")
            ? <input
              type="text"
              onChange={(e) => setInX2pory1(e.target.value)}
              value={inX2pory1}
            />
            : current.x2pory1}
        </div>
        <div className={styles.x2pory2}>
          {(current.incognita1 === "x2pory2"
            || current.incognita2 === "x2pory2"
            || current.incognita3 === "x2pory2")
            ? <input
              type="text"
              onChange={(e) => setInX2pory2(e.target.value)}
              value={inX2pory2}
            />
            : current.x2pory2}
        </div>
      </section>
    </>
  )
}

export default Ejercicio2x2