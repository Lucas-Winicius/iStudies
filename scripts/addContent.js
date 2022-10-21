const validatePassword = (code) => {
    if (document.querySelector('#code').value.length > code.length)
        return document.querySelector('[validation] error').innerHTML = `Senha incorreta`

    if (document.querySelector('#code').value.length <= code.length)
        return document.querySelector('[validation] > error').innerHTML = ``

    if (document.querySelector('#code').value != code) return ''

    document.querySelector('[validation]').innerHTML = '<destaque>Verificação concluida</destaque>'

    setTimeout(() => {
        document.querySelector('[validation]').style.display = 'none'
        document.querySelector('[home]').style.display = 'block'
    }, 1000)
}

const saveFile = (elemento) => {
    document.querySelector(`[home]`).innerHTML +=
        document.querySelector(`[${elemento}]`).files[0]

    console.log(document.querySelector(`[${elemento}]`).files[0])
}

function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}