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


const Usario = ({crud}) => {

  const [Star1, setStar1] = useState(0);


    return (
        <Router>
        <main >
        <section >
          <Link onClick={()=> setStar1(0)} to="/" >
            <h1>Menu</h1>
          </Link>
        </section>
        <Switch>
          <Route exact path="/">
              <section>
                  <div>
                    <div></div>
                    <Link  to="/Nivel1">Nivel 1</Link> 
                    <div>{Star1}<i class="fas fa-star"></i></div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel2">Nivel2</Link> 
                    <div>Estrellitas Nivel 2</div>
                  </div>
                  <div></div>
                    <div></div>
                    <Link  to="/Nivel3">Nivel3</Link> 
                    <div>Estrellitas Nivel 3</div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel4">Nivel4</Link> 
                    <div>Estrellitas Nivel 4</div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel5">Nivel5</Link> 
                    <div>Estrellitas Nivel 5</div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel6">Nivel6</Link> 
                    <div>Estrellitas Nivel 6</div>
                  </div>
              </section>
          </Route>
          <Route path="/Nivel1">
            <Nivel1 crud={crud}  setStar1={setStar1} Star1={Star1}/>
          </Route>
          <Route path="/Nivel2">
            <Nivel2/>          
          </Route>
          <Route path="/Nivel3">
            <Nivel3/>          
          </Route>
          <Route path="/Nivel4">
            <Nivel4/>          
          </Route>
          <Route path="/Nivel5">
            <Nivel5/>          
          </Route>
          <Route path="/Nivel6">
            <Nivel6/>          
          </Route>
        </Switch>
      </main>
        </Router>
    )
}

export default Usario
