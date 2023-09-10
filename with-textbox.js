let submitBtn = document.getElementById("submitBtn")

submitBtn.onclick = () => {

    let labelName = document.getElementById("labelName")
    let userName = document.getElementById("userName")
    labelName.innerHTML = `Welcome ${userName.value}!`

}