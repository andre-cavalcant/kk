function mostrarMensagem() {


    const mensagem =
document.getElementById("mensagem");


   
mensagem.textContent = "Você clicou no botão! 🎉";


}
document.addEventListener("DOMContentLoaded",
function () {


   
window.mostrarMensagem = function () {


        const mensagem
= document.getElementById("mensagem");


       
mensagem.textContent = "Você clicou no botão! 🎉";


    };


});
