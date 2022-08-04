let redBadWords = document.querySelector('.redBadWords') as HTMLInputElement
let form = document.forms['formBox'] as HTMLFormElement
let formCensor = document.forms['censorBox'] as HTMLFormElement

form.addBadWords.onclick = () => saveBadWords()
form.resetBadWords.onclick = () => resetBadWords()

formCensor.censorBtn.onclick = () => {
    formCensor.censorText.textContent === ''
        ? (formCensor.censorText.placeholder = 'Please write a text' ,findWord(redBadWords.innerHTML,formCensor.censorText.value))
        : findWord(redBadWords.innerHTML,formCensor.censorText.value)
}

let resetBadWords = () => redBadWords.innerHTML = '';

let saveBadWords = () => {
    redBadWords.innerHTML += form.typeBadWords.value+' '
    form.typeBadWords.value = '';
}
let findWord = (word2, str) => {
    let str1 = word2.split(' ')
    // @ts-ignore
    formCensor.censorText.value = str.split(' ').map(s => str1.includes(s) ? '*'.repeat(s.length) : s).join(' ')
}

