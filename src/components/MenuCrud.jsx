import { useEffect, useState } from "react"
import styles from '../App.module.css'

const MenuCrud = () => {
    let xmlContent = ''
    let libros = []
    const [preState, setPreState] = useState([])
    let array = [0, 1]

    const set = async () => {
      await fetch("CRUD.xml").then((response) => {
        response.text().then((xml) => {
          xmlContent = xml

          let parser = new DOMParser()
          let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
          let niveles = xmlDOM.querySelectorAll('nivel')
          niveles.forEach((nivelXMLNode) => {
            array.forEach(index2 => {
              let id = nivelXMLNode.children[index2].getAttribute("id")
              let x1 = nivelXMLNode.children[index2].children[0].textContent
              let x2 = nivelXMLNode.children[index2].children[1].textContent
              let x3 = nivelXMLNode.children[index2].children[2].textContent
              let y1 = nivelXMLNode.children[index2].children[3].textContent
              let y2 = nivelXMLNode.children[index2].children[4].textContent
              let y3 = nivelXMLNode.children[index2].children[5].textContent

              libros = [...libros, {
                                    id: id,
                                    x1: x1,
                                    x2: x2,
                                    x3: x3,
                                    y1: y1,
                                    y2: y2,
                                    y3: y3
                                  }]
            })
            setPreState([...libros])
          })
        })
      })
    }

  useEffect(() => {
    set()
    // eslint-disable-next-line
  },[])
    
  return (
    <div>
      <main className={styles.crud}>
        <section className={styles.header}>
          <div>Ejercicio</div>
          <div>Acciones</div>
        </section>
        {/* {preState.map(({id, array}) => (
          <section key={id}>
            {array.map((index) => (
              <section className={styles.lista}>
                <div key={id + index}>Nivel {id} - challenge {index}</div>
                <section>
                  <button>Ver ejercicio</button>
                  <button>Modificar ejercicio</button>
                  <button>Eliminar ejercicio</button>
                  <button>Probar ejercicio</button>
                </section>
              </section>
            ))}
          </section>
        ))} */}
        <button onClick={() => console.log(preState)}>View preState</button>
      </main>
    </div>
  )
}

export default MenuCrud;