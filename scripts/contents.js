document.querySelector('#senha').oninput = e => {
    const senha = document.querySelector('#senha').attributes.senha.value
    const inputValue = document.querySelector('#senha').value

    if(senha.length < inputValue.length) document.querySelector('#errorText').style.display = 'block'
    if(senha.length > inputValue.length) document.querySelector('#errorText').style.display = 'none'
    if(senha != inputValue) return;

    document.querySelector('#home').style.display = 'block'
    document.querySelector('#validation').style.display = 'none'
}

document.querySelector('#postar').onclick = e => {
    const formData = new FormData()
    const xhr = new XMLHttpRequest()
    const foto = document.querySelector('#selectedFile')
    console.log(foto.files[0])
    formData.append(foto.name, foto.files[0])



    fetch('/addPost', {
        method: 'POST',
        body: formData
    },).then(r => console.log(r))
}