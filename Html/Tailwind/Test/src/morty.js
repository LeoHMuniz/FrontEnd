$btnon.addEventListener('click', async()=>{
    $valor=document.getElementById("valor");
    $mContainer=document.getElementById("morty-container");
    const result = await fetch (`https://rickandmortyapi.com/api/character/${valor.value}`);
    const resultadoComJson = await result.json();
    console.log(resultadoComJson)

    const text = document.createElement("p");
    text.innerText = resultadoComJson.name;
    $mContainer.appendChild(text);
})
        