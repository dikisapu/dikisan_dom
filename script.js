let sepedahan = parseInt(prompt("masukan jarak tempuh anda"));
while (!sepedahan) {
  sepedahan = parseInt(prompt("masukin angka bro"));
}
if (sepedahan < 15) {
  alert(`mantab bang lari santai ${sepedahan}KM ya bang `);
} else {
  alert(`orang gila marathon lu sepedahan ${sepedahan}KM bang mantab`);
}
console.log(sepedahan);
