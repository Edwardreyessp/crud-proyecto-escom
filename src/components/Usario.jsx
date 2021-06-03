import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import { useState } from "react"
import Nivel1 from "./Niveles/Nivel1"
import Nivel2 from "./Niveles/Nivel2"
import Nivel3 from "./Niveles/Nivel3"
import Nivel4 from "./Niveles/Nivel4"
import Nivel5 from "./Niveles/Nivel5"
import Nivel6 from "./Niveles/Nivel6"
import Nivel7 from "./Niveles/Nivel7"
import stylesUsuario from "../scss/Usuario.module.scss"

const Usario = ({crud,challengesN1,challengesN2,challengesN3,challengesN4,challengesN5,challengesN6,challengesN7}) => {

  const [Star1, setStar1] = useState(0)
  const [Star2, setStar2] = useState(0)
  const [Star3, setStar3] = useState(0)
  const [Star4, setStar4] = useState(0)
  const [Star5, setStar5] = useState(0)
  const [Star6, setStar6] = useState(0)
  const [Star7, setStar7] = useState(0)
  const [bandera1, setBandera1] = useState(false)
  const [bandera2, setBandera2] = useState(false)
  const [bandera3, setBandera3] = useState(false)
  const [bandera4, setBandera4] = useState(false)
  const [bandera5, setBandera5] = useState(false)
  const [bandera6, setBandera6] = useState(false)
  const [bandera7, setBandera7] = useState(false)

  const setStars = () => {
    if(!bandera1)
      setStar1(0)
    if(!bandera2)
      setStar2(0)
    if(!bandera3)
      setStar3(0)
    if(!bandera4)
      setStar4(0)
    if(!bandera5)
      setStar6(0)
    if(!bandera6)
      setStar6(0)
    if(!bandera7)
      setStar7(0)
  }

  return (
      <Router>
        <main className={stylesUsuario.container}>
        <section className={stylesUsuario.niveles}>
          <Link className={stylesUsuario.titleLink} onClick={()=> setStars()} to="/" >
            <div className={stylesUsuario.title}>Menu</div>
          </Link>
          <Switch>
            <Route exact path="/">
              <section className={stylesUsuario.nivelesGrid}>
                <Link
                  onClick={() => {setStar1(0); setBandera1(false)}}
                  className={stylesUsuario.link}
                  to="/Nivel1">
                  <main className={stylesUsuario.img1}></main>
                  <div>Nivel 1</div>
                  <section>{Star1} <i className="fas fa-star"></i></section>
                </Link>
                <Link
                  onClick={() => {setStar2(0); setBandera2(false)}}
                  className={stylesUsuario.link}
                  to="/Nivel2">
                  <main className={stylesUsuario.img2}></main>
                  <div>Nivel 2</div>
                  <section>{Star2} <i className="fas fa-star"></i></section>
                </Link>
                <Link
                  onClick={() => {setStar3(0); setBandera3(false)}}
                  className={stylesUsuario.link}
                  to="/Nivel3">
                  <main className={stylesUsuario.img3}></main>
                  <div>Nivel 3</div>
                  <section>{Star3} <i className="fas fa-star"></i></section>
                </Link>
                <Link
                  onClick={() => {setStar4(0); setBandera4(false)}}
                  className={stylesUsuario.link}
                  to="/Nivel4">
                  <main className={stylesUsuario.img4}></main>
                  <div>Nivel 4</div>
                  <section>{Star4} <i className="fas fa-star"></i></section>
                </Link>
                <Link
                  onClick={() => {setStar5(0); setBandera5(false)}}
                  className={stylesUsuario.link}
                  to="/Nivel5">
                  <main className={stylesUsuario.img5}></main>
                  <div>Nivel 5</div>
                  <section>{Star5} <i className="fas fa-star"></i></section>
                </Link>
                <Link
                  onClick={() => {setStar6(0); setBandera6(false)}}
                  className={stylesUsuario.link}
                  to="/Nivel6">
                  <main className={stylesUsuario.img6}></main>
                  <div>Nivel 6</div>
                  <section>{Star6} <i className="fas fa-star"></i></section>
                </Link>
              </section>
              <Link
                onClick={() => {setStar7(0); setBandera7(false)}}
                className={stylesUsuario.nivelFlex}
                to="/Nivel7">
                <main className={stylesUsuario.img7}></main>
                <div>Nivel 7</div>
                <section>{Star7} <i className="fas fa-star"></i></section>
              </Link>
            </Route>
            <Route path="/Nivel1">
              <div className={stylesUsuario.container}>
                {!(challengesN1 === 0)
                  ? <Nivel1
                      crud={crud}
                      setStar1={setStar1}
                      Star1={Star1}
                      challengesN1={challengesN1}
                      setBandera1={setBandera1}
                    />
                  : <h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
            <Route path="/Nivel2" >
              <div className={stylesUsuario.container}>
                {!(challengesN2 === 0)
                  ? <Nivel2
                      crud={crud}
                      setStar2={setStar2}
                      Star2={Star2}
                      challengesN2={challengesN2}
                      Inicio={challengesN1}
                      final={challengesN1 + challengesN2}
                      setBandera2={setBandera2}
                    />          
                  : <h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
            <Route path="/Nivel3">
              <div className={stylesUsuario.container}>
                {!(challengesN3 === 0)
                  ? <Nivel3
                      crud={crud}
                      setStar3={setStar3}
                      Star3={Star3}
                      challengesN3={challengesN3}
                      Inicio={challengesN1 + challengesN2}
                      final={challengesN1 + challengesN2 + challengesN3}
                      setBandera3={setBandera3}
                    />          
                  : <h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
            <Route path="/Nivel4">
              <div className={stylesUsuario.container}>
                {!(challengesN4 === 0)
                  ? <Nivel4
                      crud={crud}
                      setStar4={setStar4}
                      Star4={Star4}
                      challengesN4={challengesN4}
                      Inicio={challengesN1 + challengesN2 + challengesN3}
                      final={challengesN1 + challengesN2 + challengesN3 + challengesN4}
                      setBandera4={setBandera4}
                    />          
                  : <h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
            <Route path="/Nivel5">
              <div className={stylesUsuario.container}>
                {!(challengesN5 === 0)
                  ? <Nivel5
                      crud={crud}
                      setStar5={setStar5}
                      Star5={Star5}
                      challengesN5={challengesN5}
                      Inicio={challengesN1+challengesN2+challengesN3+challengesN4}
                      final={challengesN1 + challengesN2 + challengesN3 + challengesN4 + challengesN5}
                      setBandera5={setBandera5}
                    />
                  :<h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
            <Route path="/Nivel6">
              <div className={stylesUsuario.container}>
                {!(challengesN6 === 0)
                  ? <Nivel6
                      crud={crud}
                      setStar6={setStar6}
                      Star6={Star6}
                      challengesN6={challengesN6}
                      Inicio={challengesN1 + challengesN2 + challengesN3 + challengesN4 + challengesN5}
                      final={challengesN1 + challengesN2 + challengesN3 + challengesN4 + challengesN5 + challengesN6}
                      setBandera6={setBandera6}
                    />          
                  : <h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
            <Route path="/Nivel7">
              <div className={stylesUsuario.container}>
                {!(challengesN7 === 0)
                  ? <Nivel7
                      crud={crud}
                      setStar7={setStar7}
                      Star6={Star7}
                      challengesN7={challengesN7}
                      Inicio={challengesN1 + challengesN2 + challengesN3 + challengesN4 + challengesN5 + challengesN6}
                      final={challengesN1 + challengesN2 + challengesN3 + challengesN4 + challengesN5 + challengesN6 + challengesN7}
                      setBandera7={setBandera7}
                    />
                  : <h1>No hay ejercicios disponibles</h1>
                }
              </div>
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  )
}

export default Usario
