function copyCode(button) {
    // Obter o texto do elemento <pre> associado ao botão clicado
    var code = button.previousElementSibling.innerText;
    
    // Criar um elemento temporário para segurar o texto a ser copiado
    var tempInput = document.createElement("textarea");
    tempInput.style.whiteSpace = "pre-wrap"; // Permitir quebras de linha
    tempInput.value = code;
    document.body.appendChild(tempInput);
    
    // Selecionar o texto e copiá-lo para a área de transferência
    tempInput.select();
    document.execCommand("copy");
    
    // Remover o elemento temporário
    document.body.removeChild(tempInput);
    
    // Alerta de confirmação
    alert("Código copiado para a área de transferência!");
}
