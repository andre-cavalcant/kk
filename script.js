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

<script>const botao=document.getelement byld("mudar estilo");botao.add event listener("click', 0=>{document.body.classlist.toogle("novo-estilo");
