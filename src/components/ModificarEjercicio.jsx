import { useEffect, useState } from "react"
import styles from "../scss/Ejercicio.module.scss"


const ModificarEjercicio = ({crud,idChallenge,setSomeButton,setModificar, setCrud}) => {
    const [current,setCurrent]= useState([])
    const [modX1,setModX1]=useState(false)
    const [modX2,setModX2]=useState(false)
    const [modX3,setModX3]=useState(false) 
    const [modXtotal,setModXtotal]=useState(false)
    const [modY1,setModY1]=useState(false)
    const [modY2,setModY2]=useState(false)
    const [modY3,setModY3]=useState(false)
    const [modYtotal,setModYtotal]=useState(false)
    const [modX1Y1,setModX1Y1]=useState(false)
    const [modX2Y1,setModX2Y1]=useState(false)
    const [modX3Y1,setModX3Y1]=useState(false)
    const [modX1Y2,setModX1Y2]=useState(false)
    const [modX2Y2,setModX2Y2]=useState(false)
    const [modX3Y2,setModX3Y2]=useState(false)
    const [modX1Y3,setModX1Y3]=useState(false)
    const [modX2Y3,setModX2Y3]=useState(false)
    const [modX3Y3,setModX3Y3]=useState(false)
    const [modArea,setmodArea]=useState(false)
    const [inX1, setInX1] = useState("")
    const [inX2, setInX2] = useState("")
    const [inX3, setInX3] = useState("")
    const [inY1, setInY1] = useState("")
    const [inY2, setInY2] = useState("")
    const [inY3, setInY3] = useState("")
    const [inX1Y1,setInX1Y1]=useState("")
    const [inX1Y2,setInX1Y2]=useState("")
    const [inX1Y3,setInX1Y3]=useState("")
    const [inX2Y1,setInX2Y1]=useState("")
    const [inX2Y2,setInX2Y2]=useState("")
    const [inX2Y3,setInX2Y3]=useState("")
    const [inX3Y1,setInX3Y1]=useState("")
    const [inX3Y2,setInX3Y2]=useState("")
    const [inX3Y3,setInX3Y3]=useState("")
    const [inXtotal, setInXtotal] = useState("")
    const [inYtotal, setInYtotal] = useState("")
    const [InArea,setInArea]=useState("")
    const [ayuda, setAyuda] = useState(false)
    
    const back = () => {
      setSomeButton(false)
      setModificar(false)
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
    const mY1 = () =>{
      setCurrent({...current, y1: inY1})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModY1(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mY2 = () =>{
      setCurrent({...current, y2: inY2})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModY2(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mY3 = () =>{
      setCurrent({...current, y3: inY3})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModY3(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mYtotal = () =>{
      setCurrent({...current, ytotal: inYtotal})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModYtotal(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX1 = () =>{
      setCurrent({...current, x1: inX1})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX1(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX2 = () =>{
      setCurrent({...current, x2: inX2})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX2(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX3 = () =>{
      setCurrent({...current, x3: inX3})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX3(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX1Y1 = () =>{
      setCurrent({...current, x1pory1: inX1Y1})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX1Y1(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX1Y2 = () =>{
      setCurrent({...current, x1pory2: inX1Y2})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX1Y2(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)

    }
    const mX1Y3 = () =>{
      setCurrent({...current, x1pory3: inX1Y3})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX1Y3(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)

    }
    const mX2Y1 = () =>{
      setCurrent({...current, x2pory1: inX2Y1})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX2Y1(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX2Y2 = () =>{
      setCurrent({...current, x2pory2: inX2Y2})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX2Y2(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX2Y3 = () =>{
      setCurrent({...current, x2pory3: inX2Y3})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX2Y3(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX3Y1 = () =>{
      setCurrent({...current, x3pory1: inX3Y1})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX3Y1(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX3Y2 = () =>{
      setCurrent({...current, x3pory2: inX3Y2})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX3Y2(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mX3Y3 = () =>{
      setCurrent({...current, x3pory3: inX3Y3})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModX3Y3(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mXtotal = () =>{
      setCurrent({...current, xtotal: inXtotal})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setModXtotal(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }
    const mArea = () =>{
      setCurrent({...current, area: InArea})
      const newCrud = crud.map(item => {
        if(item.id === current.id) {
          return {...current}
        }
        else return item
      })
      setCrud(newCrud)
      setmodArea(false)
      if(ayuda) setAyuda(false)
      else setAyuda(true)
    }

    return (
      <div>
      <button onClick={() => back()}>Volver</button>
      <h1>Let's start</h1>
      <section className={styles.container}>
        {current.tipo === "2x1" &&
          <section className={styles.cuadrado2x1}>
            <div className={styles.lVerde}></div>
            <div className={styles.lMorada}></div>
            <div className={styles.xtotal}>
            {!modXtotal ? current.xtotal
                : <input
                    type="text"
                    onChange={(e) => setInXtotal(e.target.value)}
                    value={inXtotal}
                  />}
              {!modXtotal
                ? <button onClick={() => setModXtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mXtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mXtotal()}
            </div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.x1pory1}>
            {!modX1Y1 ? current.x1pory1
                : <input
                    type="text"
                    onChange={(e) => setInX1Y1(e.target.value)}
                    value={inX1Y1}
                  />}
              {!modX1Y1
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
              {ayuda && mX1Y1()}
            </div>
            <div className={styles.x2}>
            {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? (!modX2 ? "R: " + current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inX2}
                    />)
                : (!modX2 ? current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inX2}
                    />)}
              {!modX2 
                ? <button onClick={() => setModX2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2()}
            </div>
            <div className={styles.x2pory1}>
            {!modX2Y1 ? current.x2pory1
                : <input
                    type="text"
                    onChange={(e) => setInX2Y1(e.target.value)}
                    value={inX2Y1}
                  />}
              {!modX2Y1
                ? <button onClick={() => setModX2Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y1()}><i class="fas fa-save"></i></button>}
              {ayuda && mX2Y1()}
            </div>
          </section>
        }
        {current.tipo === "2x2" &&
        <section className={styles.cuadrado2x2}>
            <div className={styles.ytotal}>
            {!modYtotal ? current.ytotal
                : <input
                    type="text"
                    onChange={(e) => setInYtotal(e.target.value)}
                    value={inYtotal}
                  />}
              {!modYtotal
                ? <button onClick={() => setModYtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mYtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mYtotal()}
            </div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.y2}>
            {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? (!modY2 ? "R: " + current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)
                : (!modY2 ? current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)}
              {!modY2 
                ? <button onClick={() => setModY2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY2()}><i class="fas fa-save"></i></button>}
                {ayuda && mY2()}
            </div>
            <div className={styles.xtotal}>
            {!modXtotal ? current.xtotal
                : <input
                    type="text"
                    onChange={(e) => setInXtotal(e.target.value)}
                    value={inXtotal}
                  />}
              {!modXtotal
                ? <button onClick={() => setModXtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mXtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mXtotal()}
            </div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.x1pory1}>
            {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? (!modX1Y1 ? "R: " + current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)
                : (!modX1Y1 ? current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)}
              {!modX1Y1 
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y1()}
            </div>
            <div className={styles.x1pory2}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}
            </div>
            <div className={styles.x2}>
            {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? (!modX2 ? "R: " + current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inY1}
                    />)
                : (!modX2 ? current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inX2}
                    />)}
              {!modX2 
                ? <button onClick={() => setModX2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2()}
            </div>
            <div className={styles.x2pory1}>
            {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? (!modX2Y1 ? "R: " + current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)
                : (!modX2Y1 ? current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)}
              {!modX2Y1 
                ? <button onClick={() => setModX2Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y1()}
            </div>
            <div className={styles.x2pory2}>
            {(current.incognita1 === "x2pory2"
                || current.incognita2 === "x2pory2"
                || current.incognita3 === "x2pory2")
                ? (!modX2Y2 ? "R: " + current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inY1}
                    />)
                : (!modX2Y2 ? current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)}
              {!modX2Y2 
                ? <button onClick={() => setModX2Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y2()}
            </div>
          </section>
        }
        {current.tipo === "2x3" &&
          <section className={styles.cuadrado2x3}>
            <div className={styles.ytotal}>
            {!modYtotal ? current.ytotal
                : <input
                    type="text"
                    onChange={(e) => setInYtotal(e.target.value)}
                    value={inYtotal}
                  />}
              {!modYtotal
                ? <button onClick={() => setModYtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mYtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mYtotal()}
            </div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.y2}>
            {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? (!modY2 ? "R: " + current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)
                : (!modY2 ? current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)}
              {!modY2 
                ? <button onClick={() => setModY2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY2()}><i class="fas fa-save"></i></button>}
                {ayuda && mY2()}
            </div>
            <div className={styles.y3}>
            {(current.incognita1 === "y3"
                || current.incognita2 === "y3"
                || current.incognita3 === "y3")
                ? (!modY3 ? "R: " + current.y3
                  : <input
                      type="text"
                      onChange={(e) => setInY3(e.target.value)}
                      value={inY3}
                    />)
                : (!modY3 ? current.y3
                  : <input
                      type="text"
                      onChange={(e) => setInY3(e.target.value)}
                      value={inY3}
                    />)}
              {!modY3 
                ? <button onClick={() => setModY3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY3()}><i class="fas fa-save"></i></button>}
                {ayuda && mY3()}
            </div>
            <div className={styles.xtotal}>
            {!modXtotal ? current.xtotal
                : <input
                    type="text"
                    onChange={(e) => setInXtotal(e.target.value)}
                    value={inXtotal}
                  />}
              {!modXtotal
                ? <button onClick={() => setModXtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mXtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mXtotal()}
            </div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.x1pory1}>
            {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? (!modX1Y1 ? "R: " + current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)
                : (!modX1Y1 ? current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)}
              {!modX1Y1 
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y1()}
            </div>
            <div className={styles.x1pory2}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}
            </div>
            <div className={styles.x1pory3}>
            {(current.incognita1 === "x1pory3"
                || current.incognita2 === "x1pory3"
                || current.incognita3 === "x1pory3")
                ? (!modX1Y3 ? "R: " + current.x1pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y3(e.target.value)}
                      value={inX1Y3}
                    />)
                : (!modX1Y3 ? current.x1pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y3(e.target.value)}
                      value={inX1Y3}
                    />)}
              {!modX1Y3 
                ? <button onClick={() => setModX1Y3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y3()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y3()}
            </div>
            <div className={styles.x2}> 
            {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? (!modX2 ? "R: " + current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inY1}
                    />)
                : (!modX2 ? current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inX2}
                    />)}
              {!modX2 
                ? <button onClick={() => setModX2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2()}
            </div>
            <div className={styles.x2pory1}>
            {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? (!modX2Y1 ? "R: " + current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)
                : (!modX2Y1 ? current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)}
              {!modX2Y1 
                ? <button onClick={() => setModX2Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y1()}  
            </div>
            <div className={styles.x2pory2}>
            {(current.incognita1 === "x2pory2"
                || current.incognita2 === "x2pory2"
                || current.incognita3 === "x2pory2")
                ? (!modX2Y2 ? "R: " + current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)
                : (!modX2Y2 ? current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)}
              {!modX2Y2 
                ? <button onClick={() => setModX2Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y2()}
            </div>
            <div className={styles.x2pory3}>
            {(current.incognita1 === "x2pory3"
                || current.incognita2 === "x2pory3"
                || current.incognita3 === "x2pory3")
                ? (!modX2Y3 ? "R: " + current.x2pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y3(e.target.value)}
                      value={inX2Y3}
                    />)
                : (!modX2Y3 ? current.x2pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y3(e.target.value)}
                      value={inX2Y3}
                    />)}
              {!modX2Y3 
                ? <button onClick={() => setModX2Y3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y3()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y3()}
            </div>
          </section>
        }
        {current.tipo === "3x2" &&
          <section className={styles.cuadrado3x2}>
          <div className={styles.ytotal}>
            {!modYtotal ? current.ytotal
                : <input
                    type="text"
                    onChange={(e) => setInYtotal(e.target.value)}
                    value={inYtotal}
                  />}
              {!modYtotal
                ? <button onClick={() => setModYtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mYtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mYtotal()}
            </div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.y2}>
            {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? (!modY2 ? "R: " + current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)
                : (!modY2 ? current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)}
              {!modY2 
                ? <button onClick={() => setModY2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY2()}><i class="fas fa-save"></i></button>}
                {ayuda && mY2()}
            </div>
            <div className={styles.xtotal}>
            {!modXtotal ? current.xtotal
                : <input
                    type="text"
                    onChange={(e) => setInXtotal(e.target.value)}
                    value={inXtotal}
                  />}
              {!modXtotal
                ? <button onClick={() => setModXtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mXtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mXtotal()}
            </div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.x1pory1}>
            {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? (!modX1Y1 ? "R: " + current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)
                : (!modX1Y1 ? current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)}
              {!modX1Y1 
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y1()}
            </div>
            <div className={styles.x1pory2}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}
            </div>
            <div className={styles.x2}>
            {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? (!modX2 ? "R: " + current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inY1}
                    />)
                : (!modX2 ? current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inX2}
                    />)}
              {!modX2 
                ? <button onClick={() => setModX2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2()}
            </div>
            <div className={styles.x2pory1}>
            {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? (!modX2Y1 ? "R: " + current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)
                : (!modX2Y1 ? current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)}
              {!modX2Y1 
                ? <button onClick={() => setModX2Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y1()}  
            </div>
            <div className={styles.x2pory2}>
            {(current.incognita1 === "x2pory2"
                || current.incognita2 === "x2pory2"
                || current.incognita3 === "x2pory2")
                ? (!modX2Y2 ? "R: " + current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)
                : (!modX2Y2 ? current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)}
              {!modX2Y2 
                ? <button onClick={() => setModX2Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y2()}
            </div>
            <div className={styles.x3}>
            {(current.incognita1 === "x3"
                || current.incognita2 === "x3"
                || current.incognita3 === "x3")
                ? (!modX3 ? "R: " + current.x3
                  : <input
                      type="text"
                      onChange={(e) => setInX3(e.target.value)}
                      value={inX3}
                    />)
                : (!modX3 ? current.x3
                  : <input
                      type="text"
                      onChange={(e) => setInX3(e.target.value)}
                      value={inX3}
                    />)}
              {!modX3 
                ? <button onClick={() => setModX3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3()}
            </div>
            <div className={styles.x3pory1}>
            {(current.incognita1 === "x3pory1"
                || current.incognita2 === "x3pory1"
                || current.incognita3 === "x3pory1")
                ? (!modX3Y1 ? "R: " + current.x3pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX3Y1}
                    />)
                : (!modX3Y1 ? current.x3pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y1(e.target.value)}
                      value={inX3Y1}
                    />)}
              {!modX3Y1 
                ? <button onClick={() => setModX3Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3Y1()}  
            </div>
            <div className={styles.x3pory2}>
            {(current.incognita1 === "x3pory2"
                || current.incognita2 === "x3pory2"
                || current.incognita3 === "x3pory2")
                ? (!modX3Y2 ? "R: " + current.x3pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y2(e.target.value)}
                      value={inX3Y2}
                    />)
                : (!modX3Y2 ? current.x3pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y2(e.target.value)}
                      value={inX3Y2}
                    />)}
              {!modX3Y2 
                ? <button onClick={() => setModX3Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3Y2()}
            </div>
          </section>
        }
        {current.tipo === "3x3" &&
          <section className={styles.cuadrado3x3}>
            <div className={styles.ytotal}>
            {!modYtotal ? current.ytotal
                : <input
                    type="text"
                    onChange={(e) => setInYtotal(e.target.value)}
                    value={inYtotal}
                  />}
              {!modYtotal
                ? <button onClick={() => setModYtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mYtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mYtotal()}
            </div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.y2}>
            {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? (!modY2 ? "R: " + current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)
                : (!modY2 ? current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)}
              {!modY2 
                ? <button onClick={() => setModY2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY2()}><i class="fas fa-save"></i></button>}
                {ayuda && mY2()}
            </div>
            <div className={styles.y3}>
            {(current.incognita1 === "y3"
                || current.incognita2 === "y3"
                || current.incognita3 === "y3")
                ? (!modY3 ? "R: " + current.y3
                  : <input
                      type="text"
                      onChange={(e) => setInY3(e.target.value)}
                      value={inY3}
                    />)
                : (!modY3 ? current.y3
                  : <input
                      type="text"
                      onChange={(e) => setInY3(e.target.value)}
                      value={inY3}
                    />)}
              {!modY3 
                ? <button onClick={() => setModY3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY3()}><i class="fas fa-save"></i></button>}
                {ayuda && mY3()}
            </div>
            <div className={styles.xtotal}>
            {!modXtotal ? current.xtotal
                : <input
                    type="text"
                    onChange={(e) => setInXtotal(e.target.value)}
                    value={inXtotal}
                  />}
              {!modXtotal
                ? <button onClick={() => setModXtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mXtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mXtotal()}
            </div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.x1pory1}>
            {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? (!modX1Y1 ? "R: " + current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)
                : (!modX1Y1 ? current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)}
              {!modX1Y1 
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y1()}
            </div>
            <div className={styles.x1pory2}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}
            </div>
            <div className={styles.x1pory3}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}
            </div>
            <div className={styles.x2}>
            {(current.incognita1 === "x2"
                || current.incognita2 === "x2"
                || current.incognita3 === "x2")
                ? (!modX2 ? "R: " + current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inY1}
                    />)
                : (!modX2 ? current.x2
                  : <input
                      type="text"
                      onChange={(e) => setInX2(e.target.value)}
                      value={inX2}
                    />)}
              {!modX2 
                ? <button onClick={() => setModX2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2()}
            </div>
            <div className={styles.x2pory1}>
            {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? (!modX2Y1 ? "R: " + current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)
                : (!modX2Y1 ? current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)}
              {!modX2Y1 
                ? <button onClick={() => setModX2Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y1()}  
            </div>
            <div className={styles.x2pory2}>
            {(current.incognita1 === "x2pory2"
                || current.incognita2 === "x2pory2"
                || current.incognita3 === "x2pory2")
                ? (!modX2Y2 ? "R: " + current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)
                : (!modX2Y2 ? current.x2pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y2(e.target.value)}
                      value={inX2Y2}
                    />)}
              {!modX2Y2 
                ? <button onClick={() => setModX2Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y2()}
            </div>
            <div className={styles.x2pory3}>
            {(current.incognita1 === "x2pory3"
                || current.incognita2 === "x2pory3"
                || current.incognita3 === "x2pory3")
                ? (!modX2Y3 ? "R: " + current.x2pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y3(e.target.value)}
                      value={inX2Y3}
                    />)
                : (!modX2Y3 ? current.x2pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y3(e.target.value)}
                      value={inX2Y3}
                    />)}
              {!modX2Y3 
                ? <button onClick={() => setModX2Y3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y3()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y3()}
            </div>
            <div className={styles.x3}>
            {(current.incognita1 === "x3"
                || current.incognita2 === "x3"
                || current.incognita3 === "x3")
                ? (!modX3 ? "R: " + current.x3
                  : <input
                      type="text"
                      onChange={(e) => setInX3(e.target.value)}
                      value={inX3}
                    />)
                : (!modX3 ? current.x3
                  : <input
                      type="text"
                      onChange={(e) => setInX3(e.target.value)}
                      value={inX3}
                    />)}
              {!modX3 
                ? <button onClick={() => setModX3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3()}
            </div>
            <div className={styles.x3pory1}>
            {(current.incognita1 === "x3pory1"
                || current.incognita2 === "x3pory1"
                || current.incognita3 === "x3pory1")
                ? (!modX3Y1 ? "R: " + current.x3pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX3Y1}
                    />)
                : (!modX3Y1 ? current.x3pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y1(e.target.value)}
                      value={inX3Y1}
                    />)}
              {!modX3Y1 
                ? <button onClick={() => setModX3Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3Y1()}  
            </div>
            <div className={styles.x3pory2}>
            {(current.incognita1 === "x3pory2"
                || current.incognita2 === "x3pory2"
                || current.incognita3 === "x3pory2")
                ? (!modX3Y2 ? "R: " + current.x3pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y2(e.target.value)}
                      value={inX3Y2}
                    />)
                : (!modX3Y2 ? current.x3pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y2(e.target.value)}
                      value={inX3Y2}
                    />)}
              {!modX3Y2 
                ? <button onClick={() => setModX3Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3Y2()}
            </div>
            <div className={styles.x3pory3}>
            {(current.incognita1 === "x3pory3"
                || current.incognita2 === "x3pory3"
                || current.incognita3 === "x3pory3")
                ? (!modX3Y3 ? "R: " + current.x3pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y3(e.target.value)}
                      value={inX3Y3}
                    />)
                : (!modX3Y3 ? current.x3pory3
                  : <input
                      type="text"
                      onChange={(e) => setInX3Y3(e.target.value)}
                      value={inX2Y3}
                    />)}
              {!modX3Y3 
                ? <button onClick={() => setModX3Y3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX3Y3()}><i class="fas fa-save"></i></button>}
                {ayuda && mX3Y3()}
            </div>
          </section>
        }
        {current.tipo === "1x2" &&
          <section className={styles.cuadrado1x2}>
            <div className={styles.ytotal}>
            {!modYtotal ? current.ytotal
                : <input
                    type="text"
                    onChange={(e) => setInYtotal(e.target.value)}
                    value={inYtotal}
                  />}
              {!modYtotal
                ? <button onClick={() => setModYtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mYtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mYtotal()}
            </div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.y2}>
            {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? (!modY2 ? "R: " + current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)
                : (!modY2 ? current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)}
              {!modY2 
                ? <button onClick={() => setModY2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY2()}><i class="fas fa-save"></i></button>}
                {ayuda && mY2()}
            </div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1pory1}>
            {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? (!modX1Y1 ? "R: " + current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)
                : (!modX1Y1 ? current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)}
              {!modX1Y1 
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y1()} 
            </div>
            <div className={styles.x1pory2}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}  
            </div>
          </section>
        }
        {current.tipo === "1x3" &&
          <section className={styles.cuadrado1x3}>
          <div className={styles.ytotal}>
          {!modYtotal ? current.ytotal
                : <input
                    type="text"
                    onChange={(e) => setInYtotal(e.target.value)}
                    value={inYtotal}
                  />}
              {!modYtotal
                ? <button onClick={() => setModYtotal(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mYtotal()}><i class="fas fa-save"></i></button>}
              {ayuda && mYtotal()}
          </div>
            <div className={styles.lMorada}></div>
            <div className={styles.y1}>
            {(current.incognita1 === "y1"
                || current.incognita2 === "y1"
                || current.incognita3 === "y1")
                ? (!modY1 ? "R: " + current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)
                : (!modY1 ? current.y1
                  : <input
                      type="text"
                      onChange={(e) => setInY1(e.target.value)}
                      value={inY1}
                    />)}
              {!modY1 
                ? <button onClick={() => setModY1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY1()}><i class="fas fa-save"></i></button>}
                {ayuda && mY1()}
            </div>
            <div className={styles.y2}>
            {(current.incognita1 === "y2"
                || current.incognita2 === "y2"
                || current.incognita3 === "y2")
                ? (!modY2 ? "R: " + current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)
                : (!modY2 ? current.y2
                  : <input
                      type="text"
                      onChange={(e) => setInY2(e.target.value)}
                      value={inY2}
                    />)}
              {!modY2 
                ? <button onClick={() => setModY2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY2()}><i class="fas fa-save"></i></button>}
                {ayuda && mY2()}
            </div>
            <div className={styles.y3}>
            {(current.incognita1 === "y3"
                || current.incognita2 === "y3"
                || current.incognita3 === "y3")
                ? (!modY3 ? "R: " + current.y3
                  : <input
                      type="text"
                      onChange={(e) => setInY3(e.target.value)}
                      value={inY3}
                    />)
                : (!modY3 ? current.y3
                  : <input
                      type="text"
                      onChange={(e) => setInY3(e.target.value)}
                      value={inY3}
                    />)}
              {!modY3 
                ? <button onClick={() => setModY3(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mY3()}><i class="fas fa-save"></i></button>}
                {ayuda && mY3()}
            </div>
            <div className={styles.x1}>
            {(current.incognita1 === "x1"
                || current.incognita2 === "x1"
                || current.incognita3 === "x1")
                ? (!modX1 ? "R: " + current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)
                : (!modX1 ? current.x1
                  : <input
                      type="text"
                      onChange={(e) => setInX1(e.target.value)}
                      value={inX1}
                    />)}
              {!modX1 
                ? <button onClick={() => setModX1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1()}
            </div>
            <div className={styles.lVerde}></div>
            <div className={styles.x1pory1}>
            {(current.incognita1 === "x1pory1"
                || current.incognita2 === "x1pory1"
                || current.incognita3 === "x1pory1")
                ? (!modX1Y1 ? "R: " + current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)
                : (!modX1Y1 ? current.x1pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y1(e.target.value)}
                      value={inX1Y1}
                    />)}
              {!modX1Y1 
                ? <button onClick={() => setModX1Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y1()} 
            </div>
            <div className={styles.x1pory2}>
            {(current.incognita1 === "x2pory1"
                || current.incognita2 === "x2pory1"
                || current.incognita3 === "x2pory1")
                ? (!modX2Y1 ? "R: " + current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)
                : (!modX2Y1 ? current.x2pory1
                  : <input
                      type="text"
                      onChange={(e) => setInX2Y1(e.target.value)}
                      value={inX2Y1}
                    />)}
              {!modX2Y1 
                ? <button onClick={() => setModX2Y1(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX2Y1()}><i class="fas fa-save"></i></button>}
                {ayuda && mX2Y1()}
            </div>
            <div className={styles.x1pory3}>
            {(current.incognita1 === "x1pory2"
                || current.incognita2 === "x1pory2"
                || current.incognita3 === "x1pory2")
                ? (!modX1Y2 ? "R: " + current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)
                : (!modX1Y2 ? current.x1pory2
                  : <input
                      type="text"
                      onChange={(e) => setInX1Y2(e.target.value)}
                      value={inX1Y2}
                    />)}
              {!modX1Y2 
                ? <button onClick={() => setModX1Y2(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mX1Y2()}><i class="fas fa-save"></i></button>}
                {ayuda && mX1Y2()}
            </div>   
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
                ? (!modArea ? "R: " + current.area
                  : <input
                      type="text"
                      onChange={(e) => setInArea(e.target.value)}
                      value={InArea}
                    />)
                : (!modArea ? current.area
                  : <input
                      type="text"
                      onChange={(e) => setInArea(e.target.value)}
                      value={InArea}
                    />)}
                {!modArea 
                ? <button onClick={() => setmodArea(true)}><i class="fas fa-edit"></i></button>
                : <button onClick={() => mArea()}><i class="fas fa-save"></i></button>}
                {ayuda && mArea()}
          </div>
        </section>
      </section>
    </div>
    )
}

export default ModificarEjercicio

