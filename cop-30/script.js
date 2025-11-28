function Enviar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let estado = document.getElementById("estado").value;

    if (nome !== "" && email !== "" && estado !== "") {
        window.alert("Formulário enviado!");
    } else {
        alert("Preencha todos os campos.");
    }
}

function modal(id) {
  const titulos = {
    1: "Redução de Emissões",
    2: "Proteção da Amazônia",
    3: "Transição Sustentável",
    4: "Financiamento Climático",
    5: "Tecnologia e Inovação Verde",
    6: "Educação Ambiental Global"
  };

  const textos = {
    1: "Novas metas globais para reduzir gases do efeito estufa e limitar o aquecimento do planeta.",
    2: "Conservação da Amazônia, combate ao desmatamento e valorização das populações locais.",
    3: "Promoção de energias limpas, tecnologias verdes e desenvolvimento sustentável.",
    4: "Garantia de investimentos internacionais para preservação e adaptação climática.",
    5: "Inovações tecnológicas sustentáveis para reduzir impactos ambientais.",
    6: "Programas de educação ambiental para promover hábitos sustentáveis no mundo."
  };
  

  document.getElementById("modalTitulo").innerText = titulos[id];
  document.getElementById("modalTexto").innerText = textos[id];
  document.getElementById("meuModal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
}


