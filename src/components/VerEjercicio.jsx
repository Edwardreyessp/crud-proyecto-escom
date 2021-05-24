const VerEjercicio = ({state, idChallenge}) => {
  return (
    <div>
      {idChallenge === "AA" &&
        state.map(({id, x1, x2, x3, y1, y2, y3}) => (
          id === idChallenge &&
            <div key={id}>
              <h3>x1: {x1}</h3>
              <h3>x2: {x2}</h3>
              <h3>x3: {x3}</h3>
              <h3>y1: {y1}</h3>
              <h3>y2: {y2}</h3>
              <h3>y3: {y3}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default VerEjercicio
