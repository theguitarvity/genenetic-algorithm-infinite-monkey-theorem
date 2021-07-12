const random = (min, max) => {
    min = Math.ceil(min)
    max = Math.ceil(max)

    return Math.floor(Math.random() * (max - min)) + min
}  
const generateLetter = () => {
    const asciinLetterInitialIndex = 97
    const asciiLetterFinalIndex = 123

    const code = random(asciinLetterInitialIndex, asciiLetterFinalIndex)

    return String.fromCharCode(code)
}    
module.exports = {
    random,
    generateLetter
}