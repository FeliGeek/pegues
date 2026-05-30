const check1 = document.getElementById("check1");
const eliminar1 = document.getElementById("eliminar1");

const guardarCheck1 = localStorage.getItem("check1");

if(guardarCheck1){
    check1.textContent = guardarCheck1;
}

check1.addEventListener("click", function(){

    check1.textContent = "1 ✔️";

    localStorage.setItem("check1", "1 ✔️");

});

eliminar1.addEventListener("click", function(){

    check1.textContent = "1";

    localStorage.removeItem("check1");

});