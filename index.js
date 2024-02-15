const input = document.getElementById("input")
const generateBtn = document.getElementById("generateBtn")
const generatedPassword = document.getElementById("generatedPassword")
const paragraph = document.getElementById("generatedPassword")



generateBtn.addEventListener("click", function () {
    const inputValue = input.value
    const inputLength = inputValue.length
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|\?/>.<,~"
    
    emptyString()

    function randomNum() {
        return Math.floor(Math.random() * characters.length)
    }

    function randomPassword(length) {
        let randomString = ""
        for (let i = 0; i < length; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return randomString
    }

    paragraph.innerText += " " + randomPassword(inputValue)

})

function emptyString() {
    paragraph.innerText = " "
}
