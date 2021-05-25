import { useEffect, useState } from "react"
import MenuCrud from "./components/MenuCrud"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Register from "./components/Register"
import styles from './scss/App.module.scss'
import "./scss/main.scss"

let xmlContent = ''
let nicks = []
let refresh = ''
refresh = 'a'

const App = () => {
  const [state, setState] = useState([])
  const [user, setUser] = useState("")
  const [inpassword, setinPassword] = useState("")
  const [component, setComponent] = useState("")
  const [login, setLogin] = useState(false)

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
    state.map(({nick, password}) => {
      if(nick === "admin" && password === "1234" && nick === user && password === inpassword) {
        setComponent("MenuCrud")
        setLogin(true)
      }
      else if(nick === user && password === inpassword && nick !== "admin") {
        setComponent("usuario")
        setLogin(true)
      }
      return "";
    })

    setUser("")
    setinPassword("")
    return alert("Favor de verificar contraseña y/o usario")
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
                Sing in
                <i className="fas fa-sign-in-alt"></i>
              </div>
            </Link>
          }
        </section>
        <Switch>
          {/* <Route path="/Proyecto/index.html"> */}
          <Route exact path="/">
            {component === "MenuCrud" && <MenuCrud/>}
            {component === "usuario" && <h1>Modo usuario</h1>}
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