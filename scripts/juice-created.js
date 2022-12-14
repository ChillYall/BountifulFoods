const total = document.getElementById("totalJuiceCreated");

const totalJuiceCreated = localStorage.getItem("totalJuice");
localStorage.setItem("totalJuice", total);

console.log(totalJuiceCreated)