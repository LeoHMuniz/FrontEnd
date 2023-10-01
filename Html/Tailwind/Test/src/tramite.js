$btn=document.getElementById("btn");
$btnon=document.getElementById("btn-on");
$body=document.getElementById("body");
$container=document.getElementById("div-container");
$valor=document.getElementById("valor");
$mContainer=document.getElementById("morty-container");
const url = "https://jsonplaceholder.typicode.com/posts";
$btn.addEventListener('click', async()=>{
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    $container.classList.add("overflow-auto");
    data.map((post)=>{

        const div = document.createElement("div");
        const text = document.createElement("p");
        const title = document.createElement("h2");
        text.innerText = post.body
        title.innerText = post.title
        div.appendChild(text);
        div.appendChild(title);
        

       
        $container.appendChild(div);
});
$btnon.addEventListener('click', async()=>{
    const result = await fetch (`https://rickandmortyapi.com/api/character/${valor.value}`);
    const resultadoComJson = await result.json();
    console.log(resultadoComJson);

    const text = document.createElement("p");
    text.innerText = resultadoComJson.name;
    $mContainer.appendChild(text);
})
    })


