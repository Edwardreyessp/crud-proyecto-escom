import { useState } from "react"
import styles from '../scss/MenuCrud.module.scss'
import ProbarEjercicio from "./ProbarEjercicio"
import VerEjercicio from "./VerEjercicio"
import swal from 'sweetalert'
import ModificarEjercicio from "./ModificarEjercicio"
import CrearEjercicio from "./CrearEjercicio"

const MenuCrud = ({crud,setCrud,setchallengesN1,challengesN1,setchallengesN2,challengesN2,setchallengesN3,challengesN3,setchallengesN4,challengesN4,setchallengesN5,challengesN5,setchallengesN6,challengesN6,setchallengesN7,challengesN7}) => {
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
        if(id[0]==="1"){setchallengesN1(challengesN1-1)}
        if(id[0]==="2"){setchallengesN2(challengesN2-1)}
        if(id[0]==="3"){setchallengesN3(challengesN3-1)}
        if(id[0]==="4"){setchallengesN4(challengesN4-1)}
        if(id[0]==="5"){setchallengesN5(challengesN5-1)}
        if(id[0]==="6"){setchallengesN6(challengesN6-1)}
        if(id[0]==="7"){setchallengesN7(challengesN7-1)}
        
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
        <button
          onClick={() => Crear()}
          className={styles.crear}>
          Crear un nuevo ejercicio
        </button>
          {crud.map(({id}) => (
            <section key={id} className={styles.lista}>
              <div>
                  Nivel {id[0]} -challenge {id[1]}
              </div>
              <section>
                <button
                  onClick={() => setVerEjercicio(id)}
                  className={styles.ver}>
                  Ver ejercicio
                </button>
                <button
                  onClick={() => Modificar(id)}
                  className={styles.editar}>
                  Modificar ejercicio
                </button>
                <button
                  onClick={() => setProbarEjercicio(id)}
                  className={styles.probar}>
                  Probar ejercicio
                </button>
                <button onClick={
                  () =>DeleteMap(id)}
                  className={styles.eliminar}>
                  Eliminar ejercicio
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
          ||(crear && 
            <CrearEjercicio
              crud={crud}
              setCrear={setCrear}
              setCrud={setCrud}
              setSomeButton={setSomeButtom}
              setchallengesN7={setchallengesN7}
              challengesN7={challengesN7}
            />) 
        )
      }
    </div>
  )
}

export default MenuCrud