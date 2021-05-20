import { useEffect, useState } from "react"
import styles from '../App.module.css'

const MenuCrud = () => {
    let xmlContent = ''
    let libros = []
    const [preState, setPreState] = useState([])

    const set = async () => {
      await fetch("CRUD.xml").then((response) => {
        response.text().then((xml) => {
          xmlContent = xml

          let parser = new DOMParser()
          let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
          let niveles = xmlDOM.querySelectorAll('nivel')
          niveles.forEach(nivelXMLNode => {
            //id
            let id
            id = nivelXMLNode.getAttribute("id")

            //Nivel1 challenge1
            let AAx1 = ""
            AAx1 = nivelXMLNode.children[0].children[0].textContent

            let AAx2 = ""
            AAx2 = nivelXMLNode.children[0].children[1].textContent

            let AAx1plusx2 = ""
            AAx1plusx2 = nivelXMLNode.children[0].children[2].textContent

            let AAy1 = ""
            AAy1 = nivelXMLNode.children[0].children[3].textContent

            let AAarea1 = ""
            AAarea1 = nivelXMLNode.children[0].children[4].textContent

            let AAarea2 = ""
            AAarea2 = nivelXMLNode.children[0].children[5].textContent

            let AAresultado = ""
            AAresultado = nivelXMLNode.children[0].children[6].textContent

            //nivel1 challenge2
            let ABx1 = ""
            ABx1 = nivelXMLNode.children[1].children[0].textContent

            let ABy1 = ""
            ABy1 = nivelXMLNode.children[1].children[1].textContent

            let ABy2 = ""
            ABy2 = nivelXMLNode.children[1].children[2].textContent

            let ABy3 = ""
            ABy3 = nivelXMLNode.children[1].children[3].textContent

            let AByTotal = ""
            AByTotal = nivelXMLNode.children[1].children[4].textContent

            let ABresultado = ""
            ABresultado = nivelXMLNode.children[1].children[5].textContent

            libros = [...libros, {id: id,
                                  array: [1, 2, 3, 4, 5, 6],
                                  //Nivel1 challenge1
                                  AAx1: AAx1,
                                  AAx2: AAx2,
                                  AAx1plusx2: AAx1plusx2,
                                  AAy1: AAy1,
                                  AAarea1: AAarea1,
                                  AAarea2: AAarea2,
                                  AAresultado: AAresultado,
                                  //Nivel1 challenge2
                                  ABx1: ABx1,
                                  ABy1: ABy1,
                                  ABy2: ABy2,
                                  ABy3: ABy3,
                                  AByTotal: AByTotal,
                                  ABresultado: ABresultado
                                }
            ]
          })
          setPreState([...libros])
        })
      })
    }

  useEffect(() => {
      set()
  })
    
  return (
    <div>
      <main className={styles.crud}>
        <section className={styles.header}>
          <div>Ejercicio</div>
          <div>Acciones</div>
        </section>
        {preState.map(({id, array}) => (
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
        ))}
      </main>
    </div>
  )
}

export default MenuCrud;