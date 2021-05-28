import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Nivel1 from "./Nivel1"
import Nivel2 from "./Nivel2"
import Nivel3 from "./Nivel3"
import Nivel4 from "./Nivel4"
import Nivel5 from "./Nivel5"
import Nivel6 from "./Nivel6"


const Usario = () => {
    return (
        <Router>
        <main >
        <section >
          <Link to="/" >
            <h1>Menu</h1>
          </Link>
        </section>
        <Switch>
          <Route exact path="/">
              <section>
                  <div>
                    <div></div>
                    <Link  to="/Nivel1">Nivel1</Link> 
                    <div>Estrellitas Nivel 1</div>
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
            <Nivel1/>
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
