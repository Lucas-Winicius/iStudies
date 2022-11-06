document.querySelector('#senha').oninput = e => {
    const senha = document.querySelector('#senha').attributes.senha.value
    const inputValue = document.querySelector('#senha').value

    if(senha.length < inputValue.length) document.querySelector('#errorText').style.display = 'block'
    if(senha.length > inputValue.length) document.querySelector('#errorText').style.display = 'none'
    if(senha != inputValue) return;

    document.querySelector('#home').style.display = 'block'
    document.querySelector('#validation-container').style.display = 'none'
}