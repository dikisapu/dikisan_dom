const p3 = document.querySelector(".p3");

p3.addEventListener("mouseenter", () => {
  p3.style.backgroundColor = "lightblue";
  p3.style.borderRadius = "40px";
});
p3.addEventListener("mouseleave", () => {
  p3.style.backgroundColor = "lightgreen";
});
// mouseleave
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  p4.style.backgroundColor = "cyan";
  p4.style.borderRadius = "40px";
  p4.innerHTML = "<b>GUNAKAN DOBEL KLIK Untuk Mendapatkan Item Tersembunyi</b>";
  p4.style.borderStyle = "none";
  const b = document.querySelector("section#b b");
  b.style.borderStyle = "none";
});

p4.addEventListener("dblclick", () => {
  p4.style.color = "red";
  p4.style.textAlign = "center";
  const ul = document.querySelector("section#b ul");
  const libaru = document.createElement("li");
  const textli = document.createTextNode("berhasil menambahkan text");
  p4.innerHTML = "Selamat Kamu Berhasil Menemukan ITem BAru";

  libaru.appendChild(textli);
  ul.appendChild(libaru);
});
// p4.addEventListener("click", () => {

// });
