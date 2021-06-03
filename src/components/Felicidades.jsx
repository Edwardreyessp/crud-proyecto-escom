import styles from "../scss/Felicidades.module.scss"

const Felicidades = ({setBandera1, setBandera2, setBandera3, setBandera4, setBandera5, setBandera6, setBandera7, id}) => {
	const Reproducir = ()=> {
    var sonido = new Audio();
    //sonido.src="good.mp3";
    sonido.src="victory.mp3";
    sonido.play();
  }

	Reproducir()

	return (
		<div className={styles.container}>
				<div className={styles.box}>
					<h1>Congratulations!!!</h1>
					<div className={styles.img}></div>
					<h2>Level {id[0]}</h2>
				</div>
				{id[0] === "1" && setBandera1(true)}
				{id[0] === "2" && setBandera2(true)}
				{id[0] === "3" && setBandera3(true)}
				{id[0] === "4" && setBandera4(true)}
				{id[0] === "5" && setBandera5(true)}
				{id[0] === "6" && setBandera6(true)}
				{id[0] === "7" && setBandera7(true)}
		</div>
	)
}

export default Felicidades
