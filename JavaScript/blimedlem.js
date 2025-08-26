const email = document.getElementById("email")
const navn = document.getElementById("name")
const melding = document.getElementById("melding")
function buttonClick() {
    alert("Takk for at du tar kontakt. Vi svarer så fort vi kan!")
    email.value = "";
    navn.value = "";
    melding.value = "";
}