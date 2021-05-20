import { useEffect, useState } from "react"
import MenuCrud from "./components/MenuCrud"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Register from "./components/Register"
let xmlContent = ''
let nicks = []
let refresh = ''
refresh = 'a'

const App = () => {
  const [state, setState] = useState([])
  const [user, setUser] = useState("")
  const [inpassword, setinPassword] = useState("")
  const [component, setComponent] = useState("")

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
      if(nick === "admin" && password === "1234" && nick === user && password === inpassword)
        setComponent("MenuCrud")
      else if(nick === user && password === inpassword && nick !== "admin")
        setComponent("usuario")
      return ""
    })
    setUser("")
    setinPassword("")
  }

  return (
    <Router>
      <main>
        <section>
          <Link to="/" onClick={() => setComponent("")}>Home</Link>
          <Link to="/register">Register</Link>
        </section>
        <Switch>
          <Route exact path="/">
            {component === "MenuCrud" && <MenuCrud/>}
            {component === "usuario" && <h1>Modo usuario</h1>}
            {component === "" &&
              <form className="form" onSubmit={handleSumbit}>
                <input
                    placeholder="User"
                    type="text"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                />
                <input
                    placeholder="Password"
                    type="text"
                    onChange={(e) => setinPassword(e.target.value)}
                    value={inpassword}
                />
                <button>Ingresar</button>
              </form>}
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