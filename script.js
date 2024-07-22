// script.js
function escolherOpcao() {
    const optionsText = document.getElementById('options').value;
    const optionsArray = optionsText.split('\n').filter(option => option.trim() !== '');

    if (optionsArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * optionsArray.length);
        const resultado = optionsArray[randomIndex];
        document.getElementById('resultado').innerText = `Opção escolhida: ${resultado}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira algumas opções.';
    }
}
