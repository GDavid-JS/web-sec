button = document.querySelector('.button')

button.addEventListener('click', () => {
    let text = prompt("Ввдетие текст")
    document.querySelectorAll('.r').forEach((element) => {
        element.innerHTML = text
        element.style = `font-size: 20px;`
    })

    document.querySelectorAll('h2').forEach((element) => {
        element.classList.toggle('frame')
        if (element.classList.contains('frame')) {
            button.innerHTML = 'Текст2'
        } else {
            button.innerHTML = 'Текст1'
        }
    })
})