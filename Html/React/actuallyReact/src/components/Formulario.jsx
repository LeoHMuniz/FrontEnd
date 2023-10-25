import { useRef, useState } from "react";

import styles from './Formulario.module.css'
export function Formulario() {
    const [Name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState("")
    const [getName, setGetName] = useState("")
    const [getLastName, setGetLastName] = useState("")
    const [getAge, setGetAge] = useState("")
    const [getCity, setGetCity] = useState("")
    const [getDate, setGetDate] = useState("")
    const [card, setCard] = useState(false)

    const inputName = useRef('')
    const inputLastName = useRef('')
    const inputAge = useRef('')
    const inputCity = useRef('')
    const inputDate = useRef('')
    const inputCard = useRef('')

    function handleInput(e) {
        if (
            e.target.name == "name") { setName(e.target.value) }
        if (
            e.target.name == "lastName") { setLastName(e.target.value) }
        if (
            e.target.name == "age") { setAge(e.target.value) }
        if (
            e.target.name == "city") { setCity(e.target.value) }

        const date = new Date()
        const formatedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ', às ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getUTCSeconds()
        setDate(formatedDate)
    }

    function clearData() {
        inputName.current.value = ""
        inputLastName.current.value = ""
        inputAge.current.value = ""
        inputCity.current.value = ""

        setName('')
        setLastName('')
        setAge('')
        setCity('')
    }

    const contagem = [{
        nome: null,
        sobrenome: null,
        idade: null,
        cidade: null
    }]

    function handleSubmit(e) {
        e.preventDefault();
        setCard(true)
        setGetName(Name)
        setGetLastName(lastName)
        setGetAge(age)
        setGetCity(city)
        setGetDate(date)
        setDate("")
        clearData()
        contagem.push(...{ nome: Name, sobrenome: lastName, idade: age, cidade: city })
        console.log(contagem)
    }


    function handleErase(e) {
        e.preventDefault();
        clearData()
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
                        onChange={handleInput} />
                    <input
                        type="text"
                        ref={inputLastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleInput} />
                    <input
                        type="number"
                        ref={inputAge}
                        name="age"
                        placeholder="Age"
                        onChange={handleInput} />
                    <input
                        type="text"
                        ref={inputCity}
                        name="city"
                        placeholder="City"
                        onChange={handleInput} />
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
                    <span>{`Nome: ${Name} `}</span>
                    <span>{`Sobrenome: ${lastName} `}</span>
                    <span>{`Idade: ${age} `}</span>
                    <span>{`Cidade: ${city} `}</span>
                    <span>{`Data da alteração: ${date} `}</span>
                </div>
            </div>
            <div className={styles.postContainer}>
                {
                    contagem.map(dados => {
                        <div className={styles.cardUnit}>
                            <span>{`Nome: ${dados.nome} `}</span>
                            <span>{`Sobrenome: ${dados.sobrenome} `}</span>
                            <span>{`Idade: ${dados.idade} `}</span>
                            <span>{`Cidade: ${dados.cidade} `}</span>

                        </div>
                    })
                    // card ? <div className={styles.cardUnit}>
                    //     <span>{`Nome: ${getName} `}</span>
                    //     <span>{`Sobrenome: ${getLastName} `}</span>
                    //     <span>{`Idade: ${getAge} `}</span>
                    //     <span>{`Cidade: ${getCity} `}</span>
                    //     <span>{`Data da alteração: ${getDate} `}</span>
                    // </div>
                    //     : ""
                }
            </div>
        </main >
    )

}