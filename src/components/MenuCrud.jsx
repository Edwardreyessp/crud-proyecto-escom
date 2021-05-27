import { useEffect, useState } from "react"
import styles from '../scss/MenuCrud.module.scss'
import VerEjercicio from "./VerEjercicio"

const MenuCrud = () => {
    let xmlContent = ''
    let libros = []
    const [state, setState] = useState([])
    const [someButtom, setSomeButtom] = useState(false)
    const [Ver, setVer] = useState(false)
    const [idChallenge, setIdChallenge] = useState(0)
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]

    const set = async () => {
      await fetch("CRUD.xml").then((response) => {
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
            setState([...libros])
          })
        })
      })
    }

  useEffect(() => {
    set()
    // eslint-disable-next-line
  },[])

  const setVerEjercicio = (id) => {
    setVer(true)
    setSomeButtom(true)
    setIdChallenge(id)
  }
    
  return (
    <div className={styles.containerCrud}>
      {!someButtom ? <main className={styles.crud}>
        <section className={styles.header}>
          <div>Ejercicio</div>
          <div>Acciones</div>
        </section>
          {state.map(({id}) => (
            <section key={id} className={styles.lista}>
              <div>
                  Nivel {id[0]} -challenge {id[1]}
              </div>
              <section>
                <button onClick={() => setVerEjercicio(id)}>
                  Ver ejercicio
                </button>
                <button>Modificar ejercicio</button>
                <button>Eliminar ejercicio</button>
                <button>Probar ejercicio</button>
              </section>
            </section>
          ))}
        </main>
        : (Ver && <VerEjercicio
                    state={state}
                    idChallenge={idChallenge}
                    setSomeButtom={setSomeButtom}
                    setVer={setVer}
                  />)
      }
    </div>
  )
}

export default MenuCrud