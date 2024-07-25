let name1 = document.getElementById("name1");
let age1 = document.getElementById("age1");
let g1 = document.getElementById("g1");
let data = JSON.parse(localStorage.getItem("details"));
let welcome = document.getElementById("welcomeMessage");
let thanks = document.getElementById("thanknote");
age1.innerHTML = data.age;
name1.innerHTML = data.name;
g1.innerHTML = data.g;



if(welcome) {
    welcome.innerHTML = "Welcome, " + data.name;
}
if(data) {
    thanks.innerHTML = "Thanks for the registration."
}

localStorage.clear();
