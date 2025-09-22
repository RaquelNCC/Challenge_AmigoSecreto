const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    if (inputAmigo.value === ""){
        alert("Aun no has añadido el nombre de un amigo.");
        return;
    }
    if (listaAmigos.includes(inputAmigo.value)){
        alert(`El nombre ${inputAmigo.value} ya esta en la lista de amigos. Trata de nuevo y juega.`);
        return;
    }
    listaAmigos.push(inputAmigo.value);

    mostrarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}
function mostrarLista(){
    ulListaAmigos.innerHTML= "";
    for (let i = 0; i < listaAmigos.length; i++){
        ulListaAmigos.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}
function sortearAmigo(){
const random =Math.floor(Math.random() * listaAmigos.length);
const amigoSecreto = listaAmigos[random];
if (listaAmigos.length === 0){
ulResultado.innerHTML = `<li>La lista de amigos esta vacía</li>`;
}else{
    ulResultado.innerHTML = `<li>El amigo secreto es ${amigoSecreto}</li>`;
} 
}