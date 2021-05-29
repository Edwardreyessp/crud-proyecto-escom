import { useEffect, useState } from "react"
import MenuCrud from "./components/MenuCrud"
import swal from 'sweetalert'
import '../src/scss/swAlerts.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Register from "./components/Register"
import styles from './scss/App.module.scss'
import "./scss/main.scss"
import Usario from "./components/Usario"

let xmlContent = ''
let nicks = []
let refresh = ''
let refresh2 = ''
refresh = 'a'
refresh2 = 'a'
let libros = []

const App = () => {
  const [crud, setCrud] = useState([])
  const [state, setState] = useState([])
  const [user, setUser] = useState("")
  const [inpassword, setinPassword] = useState("")
  const [component, setComponent] = useState("")
  const [login, setLogin] = useState(false)
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]

  useEffect(() => {
    fetch("CRUD.xml").then((response) => {
      response.text().then((xml) => {
        xmlContent = xml

        let parser = new DOMParser()
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
        let niveles = xmlDOM.querySelectorAll('niveles')

        niveles.forEach((nivelXMLNode) => {
          array.forEach(index2 => {
            let id = nivelXMLNode.children[index2].getAttribute("id")
            let x1 = nivelXMLNode.children[index2].children[0].textContent
            let x2 = nivelXMLNode.children[index2].children[1].textContent
            let x3 = nivelXMLNode.children[index2].children[2].textContent
            let xtotal = nivelXMLNode.children[index2].children[3].textContent
            let y1 = nivelXMLNode.children[index2].children[4].textContent
            let y2 = nivelXMLNode.children[index2].children[5].textContent
            let y3 = nivelXMLNode.children[index2].children[6].textContent
            let ytotal = nivelXMLNode.children[index2].children[7].textContent
            let x1pory1 = nivelXMLNode.children[index2].children[8].textContent
            let x1pory2 = nivelXMLNode.children[index2].children[9].textContent
            let x1pory3 = nivelXMLNode.children[index2].children[10].textContent
            let x2pory1 = nivelXMLNode.children[index2].children[11].textContent
            let x2pory2 = nivelXMLNode.children[index2].children[12].textContent
            let x2pory3 = nivelXMLNode.children[index2].children[13].textContent
            let x3pory1 = nivelXMLNode.children[index2].children[14].textContent
            let x3pory2 = nivelXMLNode.children[index2].children[15].textContent
            let x3pory3 = nivelXMLNode.children[index2].children[16].textContent
            let area = nivelXMLNode.children[index2].children[17].textContent
            let tipo = nivelXMLNode.children[index2].children[18].textContent
            let incognita1 = nivelXMLNode.children[index2].children[19].textContent
            let incognita2 = nivelXMLNode.children[index2].children[20].textContent
            let incognita3 = nivelXMLNode.children[index2].children[21].textContent

            libros = [...libros, {
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
            }]
          })
          setCrud([...libros])
          console.log("Hola");
        })
      })
    })
    // eslint-disable-next-line
  },[refresh2])

  useEffect(() => {
    fetch("Users.xml").then((response) => {
      response.text().then((xml) => {
        xmlContent = xml

        let parser = new DOMParser()
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
        let usuarios = xmlDOM.querySelectorAll('user')
        usuarios.forEach(usuarioXMLNode => {
          //id
          let id
          id = usuarioXMLNode.getAttribute("id")

          //Nick
          let nick = ""
          nick = usuarioXMLNode.children[0].textContent

          //Password
          let password = ""
          password = usuarioXMLNode.children[1].textContent

          nicks = ([...nicks, {id: id, nick: nick, password: password}])
        })
        setState([...nicks])
      })
    })
    // eslint-disable-next-line
  }, [refresh])
    
  const handleSumbit = (e) => {
    e.preventDefault()
    let  entrada = true
    state.map(({nick, password}) => {
      if(nick === "admin" && password === "1234" && nick === user && password === inpassword) {
        setComponent("MenuCrud")
        entrada= false
        setLogin(true)
      }
      else if(nick === user && password === inpassword && nick !== "admin") {
        setComponent("usuario")
        entrada= false
        setLogin(true)
      }
      return "";
    })

    setUser("")
    setinPassword("")
    if(entrada){
    return swal("¡Usario o contraseña diferente!", "Intente de Nuevo", "error");};
  }

  const reset = () => {
    setComponent("")
    setLogin(false)
  }

  return (
    <Router>
      <main className={styles.container}>
        <section className={styles.enlaces}>
          {/* <Link to="/Proyecto/index.html" onClick={() => reset()}>Home</Link> */}
          {/*<Link to="/build/index.html" onClick={() => reset()}>Home</Link>*/}
           <Link to="/" className={styles.link}
            onClick={() => reset()}>
            <div>
              <i className="fas fa-home"></i>
              Home
            </div>
          </Link> 
          <div>Logo bien mamalón</div>
          {!login && 
            <Link to="/register" className={styles.link}
            onClick={() => setLogin(true)}>
              <div>
                Create an Account
                <i className="fas fa-user-plus"></i>
              </div>
            </Link>
          }
        </section>
        <Switch>
          {/* <Route path="/Proyecto/index.html"> */}
          {/*<Route path="/build/index.html">*/}
           <Route exact path="/"> 
            {component === "MenuCrud" && <MenuCrud crud={crud} setCrud={setCrud}/>}
            {component === "usuario" && <Usario/>}
            {component === "" &&
              <div className={styles.login}>
                <form className={styles.form} onSubmit={handleSumbit}>
                  <h1>Login</h1>
                  <input
                      placeholder="User"
                      type="text"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                  />
                  <input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setinPassword(e.target.value)}
                      value={inpassword}
                  />
                  <button>Login</button>
                </form>
              </div>}
          </Route>
          <Route path="/register">
            <Register state={state} setState={setState}/>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App