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


const Usario = ({crud,challengesN1,challengesN2,challengesN3,challengesN4,challengesN5,challengesN6,challengesN7}) => {

  const [Star1, setStar1] = useState(0);
  const [Star2, setStar2] = useState(0);
  const [Star3, setStar3] = useState(0);
  const [Star4, setStar4] = useState(0);
  const [Star5, setStar5] = useState(0);
  const [Star6, setStar6] = useState(0);
  const [Star7, setStar7] = useState(0);


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
                    <div>{Star1}<i className="fas fa-star"></i></div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel2">Nivel2</Link> 
                    <div>{Star2}<i className="fas fa-star"></i></div>
                  </div>
                  <div></div>
                    <div></div>
                    <Link  to="/Nivel3">Nivel3</Link> 
                    <div>{Star3}<i className="fas fa-star"></i></div>
                    
                  <div>
                    <div></div>
                    <Link  to="/Nivel4">Nivel4</Link> 
                    <div>{Star4}<i className="fas fa-star"></i></div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel5">Nivel5</Link> 
                    <div>{Star5}<i className="fas fa-star"></i></div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel6">Nivel6</Link> 
                    <div>{Star6}<i className="fas fa-star"></i></div>
                  </div>
                  <div>
                    <div></div>
                    <Link  to="/Nivel7">Nivel7</Link> 
                    <div>{Star7}<i className="fas fa-star"></i></div>
                  </div>
              </section>
          </Route>

          <Route path="/Nivel1">
          {!(challengesN1 === 0) ?<Nivel1 crud={crud}  setStar1={setStar1} Star1={Star1} challengesN1={challengesN1}/>
          : <h1>Vacio</h1>}
          </Route>
          <Route path="/Nivel2" >
          {!(challengesN2 === 0) ?<Nivel2 crud={crud}  setStar2={setStar2} Star2={Star2} challengesN2={challengesN2} Inicio={challengesN1}/>          
          :<h1>Vacio</h1>}
          </Route>
          <Route path="/Nivel3">
          {!(challengesN3 === 0) ?<Nivel3 crud={crud}  setStar3={setStar3} Star3={Star3}  challengesN3={challengesN3} Inicio={challengesN1+challengesN2}/>          
          :<h1>Vacio</h1>}
          </Route>
          <Route path="/Nivel4">
          {!(challengesN4 === 0) ? <Nivel4 crud={crud}  setStar4={setStar4} Star4={Star4} challengesN4={challengesN4} Inicio={challengesN1+challengesN2+challengesN3}/>          
          :<h1>Vacio</h1>}
          </Route>
          <Route path="/Nivel5">
          {!(challengesN5 === 0) ?  <Nivel5 crud={crud}  setStar5={setStar5} Star5={Star5}  challengesN5={challengesN5} Inicio={challengesN1+challengesN2+challengesN3+challengesN4}/>          
          :<h1>Vacio</h1>}
          </Route>
          <Route path="/Nivel6">
          {!(challengesN6 === 0) ?  <Nivel6 crud={crud}  setStar6={setStar6} Star6={Star6}   challengesN6={challengesN6} Inicio={challengesN1+challengesN2+challengesN3+challengesN4+challengesN5}/>          
          :<h1>Vacio</h1>}
          </Route>
          <Route path="/Nivel7">
          {!(challengesN7 === 0) ?  <Nivel7 crud={crud}  setStar7={setStar7} Star6={Star7}  challengesN7={challengesN7} Inicio={challengesN1+challengesN2+challengesN3+challengesN4+challengesN5+challengesN6}/>
          :<h1>Vacio</h1>}
          </Route>
        </Switch>
      </main>
        </Router>
    )
}

export default Usario
