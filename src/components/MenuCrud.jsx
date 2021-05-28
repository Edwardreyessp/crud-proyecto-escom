import { useState } from "react"
import styles from '../scss/MenuCrud.module.scss'
import ProbarEjercicio from "./ProbarEjercicio"
import VerEjercicio from "./VerEjercicio"

const MenuCrud = ({crud}) => {
  const [someButtom, setSomeButtom] = useState(false)
  const [idChallenge, setIdChallenge] = useState(0)
  const [probar, setProbar] = useState(false)
  const [ver, setVer] = useState(false)

  const setProbarEjercicio = (id) => {
    setProbar(true)
    setSomeButtom(true)
    setIdChallenge(id)
  }

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
          {crud.map(({id}) => (
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
                <button onClick={() => setProbarEjercicio(id)}>
                  Probar ejercicio
                </button>
              </section>
            </section>
          ))}
        </main>
        : ((probar && 
            <ProbarEjercicio
              state={crud}
              idChallenge={idChallenge}
              setSomeButtom={setSomeButtom}
              setProbar={setProbar}
            />)
          || (ver &&
            <VerEjercicio
              crud={crud}
              idChallenge={idChallenge}
              setSomeButton={setSomeButtom}
              setVer={setVer}
            />)
        )
      }
    </div>
  )
}

export default MenuCrud