import { useState } from "react";
import styles from './Formulario.module.css'
export function Formulario() {
    const [Name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState("")

    function handleInput(e){
        if(
            e.target.name == "name") {setName(e.target.value)}
            if(
            e.target.name == "lastName") {setLastName(e.target.value)}
            if(
            e.target.name == "age") {setAge(e.target.value)}
            if(
            e.target.name == "city"){setCity(e.target.value)}
        
            const date = new Date()
            const formatedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ', às ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getUTCSeconds()
            setDate(formatedDate)
            
    }
    
    function handleSubmit(){
        isActive
    }
    
    function handleErase(){
        setName("")
        setLastName("")
        setAge("")
        setCity("")
        setDate("")
    }

    return (
        <main>
            <div className={styles.formsContainer}>
                <h1>Formulário</h1>
                <form action="" className={styles.forms}>
                    <input 
                    type="text"
                    name="name" 
                    placeholder="Name" 
                    onChange={handleInput}/>
                    <input 
                    type="text"
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={handleInput}/>
                    <input 
                    type="number"
                    name="age" 
                    placeholder="Age" 
                    onChange={handleInput}/>
                    <input 
                    type="text"
                    name="city" 
                    placeholder="City" 
                    onChange={handleInput}/>
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
                    <button type="submit" onClick={handleSubmit}>Salvar informações</button>
                    <button type="submit" onClick={handleErase}>Limpar 
                    informações</button>
                </form>
                <hr />
                <div className={styles.try}>
                <span>{`Nome: ${Name} `}</span>
                <span>{`Sobrenome: ${lastName} `}</span>
                <span>{`Idade: ${age} `}</span>
                <span>{`Cidade: ${city} `}</span>
                <span>{`Data da alteração: ${date} `}</span>
                </div>
            </div>
            </main>
    )

}