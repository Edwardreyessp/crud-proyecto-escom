import React, { useState } from 'react'
import styles from '../scss/Register.module.scss'
import swal from 'sweetalert'
import { nanoid } from "nanoid"

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

          xmlUser.setAttribute("id", nanoid(2))
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
    
      state.map(({nick}) => {
      if(user === "admin")swal("¡No es posible usar admin!", "Intente de Nuevo", "error");
      else if(user === nick)swal("¡Usario Registrado!", "Intente de Nuevo", "error");
      else {
        if(password !== ""){ 
        setState([...state, {id:nanoid(2), nick: user, password: password}])
        swal("¡Usario Registrado!", "Bienvenido", "success");}
        else swal("¡Datos incompletos!", "Intente de Nuevo", "error");
        };
      return "";
     }) 
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
