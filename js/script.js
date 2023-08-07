const form = document.getElementById('generated-form')
const qr = document.getElementById('qrcode')


function onGenerateSubmit(e) {
    e.preventDefault()

    clearQRcode()

    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

    if (url === '') {
        alert('Please enter a URL')
    } else {
        showSpinner()


        setTimeout(() => {
            hideSpinner()

            generateQRcode(url, size)
            setTimeout(() => {
                const saveURL = qr.querySelector('img').src
                createSaveBtn(saveURL)

            }, 50);
        }, 1000);
    }

}

// generate Qr code
function generateQRcode(url, size) {
    let qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    })
}

// show spinner
function showSpinner() {
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'block'
}


// hide spinner
function hideSpinner() {
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'none'
}

// clear code QR code UI
function clearQRcode() {
    qr.innerHTML = ""
    const saveLink = document.getElementById('save-link')
    if (saveLink) {
        saveLink.remove();
    }

}
// 
function createSaveBtn(saveURL) {
    const link = document.createElement('a')
    link.id = "save-link"
    link.classList = 'bg-gray-600 hover:bg-gray-500 text-white rounded font-bold py-2 w-1/3 m-auto my-5'
    link.href = saveURL
    link.innerHTML = 'Save Image'
    link.download = 'qrcode'
    document.getElementById('generated').appendChild(link)

}

hideSpinner()
form.addEventListener('submit', onGenerateSubmit)