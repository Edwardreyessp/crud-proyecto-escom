import React, { useState } from 'react'
import styles from '../scss/Register.module.scss'

const Register = ({state, setState}) => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  let xmlContent = ''

  const set = async () => {
    await fetch("Users.xml").then((response) => {
      response.text().then((xml) => {
        xmlContent = xml

        let parser = new DOMParser()
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
        let catalogo = xmlDOM.querySelectorAll('catalogo')
        catalogo.forEach(usuarioXMLNode => {
          let xmlUser = document.createElement('user')
          let xmlNick = document.createElement('nick')
          let xmlPassword = document.createElement('password')

          xmlUser.setAttribute("id", "5")
          xmlNick.innerText = user
          xmlPassword.innerText = password

          xmlUser.appendChild(xmlNick)
          xmlUser.appendChild(xmlPassword)

          usuarioXMLNode.appendChild(xmlUser)
          console.log(usuarioXMLNode)

          /* usuarioXMLNode.removeChild(usuarioXMLNode.children[3])
          console.log(usuarioXMLNode) */
        })
      })
    })
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    set()
    if(user === "admin")
      alert("admin is already used")
    else
      setState([...state, {id: "5", nick: user, password: password}])
    setUser("")
    setPassword("")
  }
    
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSumbit}>
        <h1>Register</h1>
        <input
            placeholder="User"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
        />
        <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <button>Hecho</button>
      </form>
    </div>
  )
}

export default Register
