function greetUser() {
let name = document.getElementById("name").value;
document.getElementById("message").innerText =
"Hello " + name + "! Welcome to my website.";
}