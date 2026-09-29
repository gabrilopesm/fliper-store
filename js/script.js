var itensCarrinho = 0;

// Chamada pelo botão "Adicionar ao carrinho" de cada produto
function adicionarAoCarrinho(nomeProduto) {
  itensCarrinho = itensCarrinho + 1;

  // Atualiza o número que aparece em cima do ícone do carrinho
  var contador = document.getElementById("contador-carrinho");
  contador.textContent = itensCarrinho;
  contador.hidden = false;

  // Mostra o aviso (toast do Bootstrap) na tela
  document.getElementById("aviso-texto").textContent =
    nomeProduto + " foi adicionado ao carrinho!";
  var aviso = new bootstrap.Toast(document.getElementById("aviso-carrinho"), { delay: 2500 });
  aviso.show();
}

// Chamada ao clicar no ícone do carrinho
function verCarrinho() {
  if (itensCarrinho == 0) {
    alert("Seu carrinho está vazio.");
  } else if (itensCarrinho == 1) {
    alert("Você tem 1 item no carrinho.");
  } else {
    alert("Você tem " + itensCarrinho + " itens no carrinho.");
  }
}


// Rola a página suavemente até o topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

// O botão só aparece depois que a pessoa rola a página
window.addEventListener("scroll", function () {
  var botao = document.getElementById("voltar-topo");
  if (window.scrollY > 300) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
});

/* ---------- LOGIN (página login) ---------- */

// Valida os dados digitados no formulário de login
function login() {
  var logado = 0;

  var usuario = document.getElementsByName("usuario")[0].value;
  usuario = usuario.trim().toLowerCase();

  var senha = document.getElementById("senha").value;
  senha = senha.trim().toLowerCase();

  if (usuario == "" || senha == "") {
    alert("Preencha o usuário e a senha.");
    return;
  }

  if (usuario == "admin" && senha == "123456") {
    window.location = "index.html";
    logado = 1;
  }

  if (logado == 0) {
    alert("Acesso Negado. Dados incorretos");
  }
}

/* CADASTRO (página login) */

// Valida os dados do cadastro e simula a criação da conta
function cadastro() {
  var usuario = document.getElementById("novo-usuario").value.trim();
  var email = document.getElementById("novo-email").value.trim();
  var senha = document.getElementById("nova-senha").value;

  if (usuario == "" || email == "" || senha == "") {
    alert("Preencha todos os campos para se cadastrar.");
    return;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Digite um e-mail válido.");
    return;
  }

  if (senha.length < 6) {
    alert("A senha precisa ter no mínimo 6 caracteres.");
    return;
  }

  alert("Cadastrado com sucesso!");
  window.location.href = "index.html";
}
