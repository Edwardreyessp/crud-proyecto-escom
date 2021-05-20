import React, { useState } from 'react'

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
    setState([...state, {id: "5", nick: user, password: password}])
    setUser("")
    setPassword("")
  }
    
  return (
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
      />
      <button>Hecho</button>
    </form>
  )
}

export default Register
