const abrirBtn = document.getElementById("abrirBtn");

const cartasSection = document.getElementById("cartas");

const inicio = document.getElementById("inicio");

const negro = document.getElementById("negro");

const sorpresaBtn = document.getElementById("sorpresaBtn");

abrirBtn.addEventListener("click", () => {

    inicio.style.display = "none";

    cartasSection.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

function mostrarFrase(carta){

    carta.classList.toggle("abierta");

}

sorpresaBtn.addEventListener("click",()=>{

    cartasSection.style.display = "none";

    negro.style.display = "flex";

});