$btnon = document.getElementById("btn-on");
$valor = document.getElementById("valor");
$image = document.getElementById("image");
$btnon.addEventListener('click', async () => {

    event.preventDefault();
    const value = $valor.value;
    const resposta = await fetch(`https://rickandmortyapi.com/api/character/${value}`);
    respostaJason = await resposta.json();
    console.log(respostaJason);

    const text = document.createElement("p");

    $mContainer.textContent = `${JSON.stringify(respostaJason.name)}`;
    $image.src = respostaJason.image;
    $mContainer.appendChild(text);

})
