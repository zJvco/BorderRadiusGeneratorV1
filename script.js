const btn = document.querySelector('.btnSend')

btn.addEventListener('click', () => {
    const input1 = document.getElementById('input1').value.trim()
    const input2 = document.getElementById('input2').value.trim()
    const input3 = document.getElementById('input3').value.trim()
    const input4 = document.getElementById('input4').value.trim()
    const box = document.querySelector('.box')
    const txtCopy = document.getElementById('txtCopy')
    const copyBorder = document.querySelector('.copyBorder')

    if (input1 === '' || input2 === '' || input3 === '' || input4 === '') {
        window.alert('Preencha todos os Campos!')
    }
    else {
        // Mostrar bordas
        box.style.borderRadius = `${input1}px ${input2}px ${input3}px ${input4}px`

        // Mostrar valor border-radius no input
        copyBorder.classList.add('copy')

        txtCopy.value = `border-radius: ${input1}px ${input2}px ${input3}px ${input4}px`
    }
})

const copyBtn = document.querySelector('.copyBtn')

copyBtn.addEventListener('click', () => {
    let txtCopy = document.getElementById('txtCopy')

    txtCopy.select()
    document.execCommand('copy')
})