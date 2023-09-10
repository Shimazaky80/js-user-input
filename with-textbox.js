let labelName = document.getElementById("labelName")
let userName = document.getElementById("userName")
let submitBtn = document.getElementById("submitBtn")

submitBtn.onclick = () => {

    labelName.innerHTML = `You entered: ${userName.value}`

}