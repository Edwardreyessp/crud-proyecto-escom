import { useEffect, useState } from "react"

const VerEjercicio = ({state, idChallenge, setSomeButtom, setVer}) => {
  const [current, setCurrent] = useState([])

  useEffect(() => {
    state.map(({id, x1, x2, x3, y1, y2, y3, x1pory1, x1pory2, x1pory3, x2pory1, x2pory2, x2pory3, x3pory1, x3pory2, x3pory3, area, tipo}) => (
      id === idChallenge &&
        setCurrent({
          x1: x1,
          x2: x2,
          x3: x3,
          y1: y1,
          y2: y2,
          y3: y3,
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
          tipo: tipo
        })
    ))
    // eslint-disable-next-line
  }, [])

  const back = () => {
    setSomeButtom(false)
    setVer(false)
  }

  return (
    <div>
      <button onClick={() => console.log(current)}>Ver current</button>
      <button onClick={() => back()}>Volver</button>
      <h1>Let's Play</h1>
      {current.tipo === "2x1" &&
        <section>
          <div></div>
          <div>{current.x1pory1}</div>
          <div>{current.x2pory1}</div>
        </section>
      }
    </div>
  )
}

export default VerEjercicio
