// const judul = document.getElementById("judul");
// const container = document.getElementById("container");
// judul.style.fontFamily = "Arial";
// judul.style.textAlign = "center";
// judul.style.backgroundColor = "#eee";
// judul.innerHTML = "Dikisan";

// const paragraf = document.getElementsByTagName("p");
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = "#7091F5";
//   paragraf[i].style.borderRadius = "20px";
// }
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";
// h1.style.color = "red";

// const p1 = document.getElementsByClassName("p1")[0];
// p1.style.backgroundColor = "purple";
// p1.style.color = "white";
// p1.innerHTML = "belajar memanipulasi html";
// p1.style.borderRadius = "20px";

// const p4 = document.querySelector("#b p");
// p4.style.color = "red";
// p4.style.backgroundColor = "lightBlue";

// const li = document.querySelector("section#b ul li:nth-child(2)");
// li.style.backgroundColor = "#97FFF4";
// // li.style.fontSize = "30px";
// li.style.color = "#040D12";
// li.style.borderRadius = "20px";

// dom Manipulation

const pBaru = document.createElement("p");
const text2 = document.createTextNode("paragraf baru");

pBaru.appendChild(text2);
// simpan paragraf

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const text = document.createTextNode("ini adalah perintah Bos");

liBaru.appendChild(text);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);
