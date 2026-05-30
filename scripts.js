const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

const guardarBoton1 = localStorage.getItem("boton1");

if(guardarBoton1){
    boton1.textContent = guardarBoton1;
}

boton1.addEventListener("click", function(){

    boton1.textContent = "1 ✔️";

    localStorage.setItem("boton1", "1 ✔️");

});

boton2.addEventListener("click", function(){

    boton1.textContent = "1";

    localStorage.removeItem("boton1");

});