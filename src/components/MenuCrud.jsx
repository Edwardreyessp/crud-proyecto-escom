import { useState } from "react"
import styles from '../scss/MenuCrud.module.scss'
import ProbarEjercicio from "./ProbarEjercicio"
import VerEjercicio from "./VerEjercicio"
import swal from 'sweetalert'
import ModificarEjercicio from "./ModificarEjercicio"
import CrearEjercicio from "./CrearEjercicio"

const MenuCrud = ({crud,setCrud}) => {
  const [someButtom, setSomeButtom] = useState(false)
  const [modificar,setModificar]=useState(false)
  const [idChallenge,setIdChallenge] = useState(0)
  const [probar,setProbar] = useState(false)
  const [ver,setVer] = useState(false)
  const [crear,setCrear] = useState(false)

  const setProbarEjercicio = (id) => {
    setProbar(true)
    setSomeButtom(true)
    setIdChallenge(id)
  }

  const Modificar = (id) =>{
    setModificar(true)
    setSomeButtom(true)
    setIdChallenge(id)
  }

  const setVerEjercicio = (id) => {
    setVer(true)
    setSomeButtom(true)
    setIdChallenge(id)
  }

  
  const Crear = () => {
    setCrear(true)
    setSomeButtom(true)
  }

  const DeleteMap = (id) => {
    swal({
      title: "Estas seguro?",
      text: "Una vez que borres este ejercicio no podra ser recuperado!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Listo! Se ah borrado el Ejercicio!", {
          icon: "success",
        });
        const newCrud = crud.filter(cruds => cruds.id !== id);
        setCrud(newCrud);
        <MenuCrud/>
      } 
    });
  }

  return (
    <div className={styles.containerCrud}>
      {!someButtom ? <main className={styles.crud}>
        <section className={styles.header}>
          <div>Ejercicio</div>
          <div>Acciones</div>
        </section>
        <section>
        <button onClick={() => Crear()}>Crear un nuevo ejercicio</button>
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
                <button onClick={() => Modificar(id)}>Modificar ejercicio</button>
                <button onClick={() =>DeleteMap(id)}>Eliminar ejercicio</button>
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
          || (modificar && <ModificarEjercicio
            crud={crud}
            idChallenge={idChallenge}
            setSomeButton={setSomeButtom}
            setModificar={setModificar}
            setCrud={setCrud}
            />) 
          ||(crear && <CrearEjercicio
            crud={crud}
            setSomeButton={setSomeButtom}
            setCrear={setCrear}
            setCrud={setCrud}
          />) 
        )
      }
    </div>
  )
}

export default MenuCrud