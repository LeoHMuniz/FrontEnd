import { useRef, useState } from "react";

import styles from './Formulario.module.css'
export function Formulario() {
    const [formData, setFormData] = useState({})
    const [formResult, setFormResult] = useState([{}])
    const [date, setDate] = useState('')
    
    const inputName = useRef('')
    const inputLastName = useRef('')
    const inputAge = useRef('')
    const inputCity = useRef('')
    const inputDate = useRef('')
    const inputCard = useRef('')

    function handleInput(e,type) {
        const {value} = e.target;
        setFormData((prevState) => ({...prevState, [type]:value}))

        const date = new Date()
        const formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ', às ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getUTCSeconds()
        setDate(formatedDate)
    }


    function handleSubmit(e) {
        e.preventDefault();
        setFormResult((prevState)=> ([...prevState, {...formData}]))
        setDate("")
    }


    function handleErase(e) {
        e.preventDefault();

    }

    return (

        <main>
            <div className={styles.formsContainer}>
                <h1>Formulário</h1>
                <form action="" className={styles.forms}>
                    <input
                        type="text"
                        ref={inputName}
                        name="name"
                        placeholder="Name"
                        onChange={(e)=>{handleInput(e,'name')}}/>
                    <input
                        type="text"
                        ref={inputLastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={(e)=>{handleInput(e,'lastName')}} />
                    <input
                        type="number"
                        ref={inputAge}
                        name="age"
                        placeholder="Age"
                        onChange={(e)=>{handleInput(e,'age')}} />
                    <input
                        type="text"
                        ref={inputCity}
                        name="city"
                        placeholder="City"
                        onChange={(e)=>{handleInput(e,'city')}} />
                    <select
                        name="color"
                        id="">
                        <option
                            value="green">
                            Verde
                        </option>
                        <option
                            value="red">
                            Vermelho
                        </option>
                        <option
                            value="blue">
                            Azul
                        </option>
                    </select>
                    <button onClick={handleSubmit}>Salvar informações</button>
                    <button onClick={handleErase}>Limpar informações</button>
                </form>
                <hr />
                <div className={styles.try}>
                    <span>{`Nome: ${formData.name} `}</span>
                    <span>{`Sobrenome: ${formData.lastName} `}</span>
                    <span>{`Idade: ${formData.age} `}</span>
                    <span>{`Cidade: ${formData.city} `}</span>
                </div>
            </div>
            <div className={styles.postContainer}>
                {
                    formResult.map((results,i) => {
                        return(
                        <div className={styles.cardUnit}>
                            <span>{`Nome: ${results.name} `}</span>
                            <span>{`Sobrenome: ${results.lastName} `}</span>
                            <span>{`Idade: ${results.age} `}</span>
                            <span>{`Cidade: ${results.city} `}</span>

                        </div>)})

                    // <div className={styles.cardUnit}>
                    //     <span>{`Nome: ${Name} `}</span>
                    //     <span>{`Sobrenome: ${lastName} `}</span>
                    //     <span>{`Idade: ${age} `}</span>
                    //     <span>{`Cidade: ${city} `}</span>
                    //     <span>{`Data da alteração: ${date} `}</span>
                    // </div>
                        
                }
            </div>
        </main >
    )

}