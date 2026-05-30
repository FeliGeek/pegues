const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

boton1.addEventListener("click",function(){
    boton1.textContent = "1 ✔️";
});

boton2.addEventListener("click",function(){
    boton1.textContent = "1";
});

