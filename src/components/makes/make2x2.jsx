import { useState } from "react"

const Make2X2 = () => {
    const [inX1, setInX1] = useState("")
    const [inX2, setInX2] = useState("")
    const [inY1, setInY1] = useState("")
    const [inY2, setInY2] = useState("")
    const [inX1Y1,setInX1Y1]=useState("")
    const [inX1Y2,setInX1Y2]=useState("")
    const [inX2Y1,setInX2Y1]=useState("")
    const [inX2Y2,setInX2Y2]=useState("")
    const [inXtotal, setInXtotal] = useState("")
    const [inYtotal, setInYtotal] = useState("")
    const [inArea,setInArea]=useState("")
    const [inTipo,setInTipo]=useState("")
    const[incognita1,setIncognita1]=useState("");
    const[incognita2,setIncognita2]=useState("");
    const[incognita3,setIncognita3]=useState("");



    const back = (e) => {
        //e.preventDefault();
        //setCrear(false);
       // setSomeButtom(false);
      }
    
    const handleSumbit = (e) => {
        e.preventDefault();
        /*setCrud([{ 
        id: "67",
        x1: inX1,
        x2: inX2,
        x3: "",
        xtotal: inXtotal,
        y1: inY1,
        y2: "",
        y3: "",
        ytotal: inYtotal,
        x1pory1:inX1Y1,
        x1pory2: "",
        x1pory3: "",
        x2pory1: inX2Y1,
        x2pory2: "",
        x2pory3: "",
        x3pory1: "",
        x3pory2: "",
        x3pory3: "",
        area: inArea,
        tipo: inTipo,
        incognita1: incognita1,
        incognita2: incognita2,
        incognita3: incognita3}, ...crud]);
        setInX1("");
        setInX2("");
        setInY1("");
        setInXtotal("");
        setInYtotal("");
        setInX1Y1("");
        setInX2Y1("");
        setInArea("");
        setInTipo("");
        setIncognita1("");
        setIncognita2("");
        setIncognita3("");*/
        setInX1("");
        setInX2("");
        setInY1("");
        setInXtotal("");
        setInYtotal("");
        setInX1Y1("");
        setInX2Y1("");
        setInArea("");
        setInTipo("");
        setIncognita1("");
        setIncognita2("");
        setIncognita3("");
    }
    
    return (
        <div>
            <button onClick={(e) => back()}>Volver</button>
            <h1>Agregar Ejecicio</h1>
            <form onSubmit={handleSumbit}>
            <h3>X1</h3>
            <input
                type="text"
                onChange={(e) => setInX1(e.target.value)}
                value={inX1}
            />
            <h3>X2</h3>
            <input
                type="text"
                onChange={(e) => setInX2(e.target.value)}
                value={inX2}
            />
            <h3>Xtotal</h3>
            <input
                type="text"
                onChange={(e) => setInXtotal(e.target.value)}
                value={inXtotal}
            />
            <h3>Y1</h3>
            <input
                type="text"
                onChange={(e) => setInY1(e.target.value)}
                value={inY1}
            />
            <h3>Y2</h3>
            <input
                type="text"
                onChange={(e) => setInY2(e.target.value)}
                value={inY2}
            />
            <h3>Ytotal</h3>
            <input
                type="text"
                onChange={(e) => setInYtotal(e.target.value)}
                value={inYtotal}
            />
            <h3>X1Y1</h3>
            <input
                type="text"
                onChange={(e) => setInX1Y1(e.target.value)}
                value={inX1Y1}
            />
            <h3>X1Y2</h3>
            <input
                type="text"
                onChange={(e) => setInX1Y2(e.target.value)}
                value={inX1Y2}
            />
            <h3>X2Y1</h3>
            <input
                type="text"
                onChange={(e) => setInX2Y1(e.target.value)}
                value={inX2Y1}
            />
            <h3>X2Y2</h3>
            <input
                type="text"
                onChange={(e) => setInX2Y2(e.target.value)}
                value={inX2Y2}
            />  
            <h3>Area</h3>
            <input
                type="text"
                onChange={(e) => setInArea(e.target.value)}
                value={inArea}
            />
            <h3>Icognita1</h3>
            <input
                type="text"
                onChange={(e) => setIncognita1(e.target.value)}
                value={incognita1}
            />
            <h3>Icognita2</h3>
            <input
                type="text"
                onChange={(e) => setIncognita2(e.target.value)}
                value={incognita2}
            />
            <h3>Icognita3</h3>
            <input
                type="text"
                onChange={(e) => setIncognita3(e.target.value)}
                value={incognita3}
            />
            <h3>Tipo</h3>
            <input
                type="text"
                onChange={(e) => setInTipo(e.target.value)}
                value={inTipo}
            />
            <button>Add</button>
        </form>
        </div>
    )
}

export default Make2X2
