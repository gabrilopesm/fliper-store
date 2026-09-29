/* =========================================================
   JQUERY-SCRIPT.JS - FLIPER
   Alterna entre o formulário de login e o de cadastro
   ========================================================= */

$(document).ready(function () {

  // Clicou em "Não é cadastrado ainda?": mostra o cadastro e esconde o login
  $("#botao-cadastrar").click(function () {
    $("#section-login").slideUp("slow");
    $("#form-cadastrar").slideDown("slow");
  });

  // Clicou em "Já tenho conta": faz o caminho inverso
  $("#voltar-login").click(function () {
    $("#form-cadastrar").slideUp("slow");
    $("#section-login").slideDown("slow");
  });

});
