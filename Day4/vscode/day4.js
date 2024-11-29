// string -> kumpulan karakter (huruf/angka)
let kota = "Bekasi";
// number -> angka
let umur =  25;
// boolean -> true/false
let sudahMenikah = false;
// undefined
let a;
//  null
let result =  null;

// object -> kumpulan data
// array  -> kumpulan data  yang berurutan
// diwakili dg index (urutan sratr dari 0)
// penulisannya menggunakan []
// pemanggillan elmen -> namaArray[index]
// object ->  kumpulan data yang tidak berurutan
//  diwakili dg key
// penulisannya menggunakan {}
// pemanggilan elemen 
// 1. namaObject.key
// 2. namaObject["namaKey"]

let hobbies  = ["makan", "minum", "nonton", "main game"];
console.log(hobbies[0]);
let  person = {
    nama: "Budi",
    umur: 25,
    pekerjaan: "PNS",
};
console.log(person.nama);
// console.log(person["nama"]); // sama saja dengan person.nama

//type checking
//typeof namaVariabel
console.log(typeof person);

// instance checking
// namaVariabelAnak(person) instanceof namaVariabel Konstruktor

function C() {}
function D() {}

const o = new C();
// new digunakan untuk  membuat instance dari sebuah konstruktor

// console.lg(o instanceof C);
// console.log(o instanceof D);

function Car(brand, color) {
    this.brand = brand;
    this.color = color;
    this.getColor =  function() {
        console.log(this.color);
    };
}
const Honda = new Car("Honda",  "Merah");
// Honda.getColor();
Honda.getBrand();

if (Honda instanceof Car) {
    Honda.getColor();
}

if (x < y) {
    console.log("x lebih besar dari y");
} else {
    console.log("x lebih kecil dari y");
}

const success = false;
if (success) {
    console.log("sukses");
    } else {
        console.log("gagal");
        }

// ternary operator
// penulisan singkat dari if else 
// kondisi ? kondisi true :  kondisi false

success ?  console.log("sukses") : console.log("gagal");

//short  circuiting logic
// lebih singkat dari ternary 
// jika perintah hanya ada ketika true atau ketika false
// kondisi  && perintah ketika true
// kondisi  || perintah ketika false

const b = '1';
typeof b ==  'number' || console.log("nilai b harus berupa angka");

//for loop
// for  (awal; kondisi; perubahan) {}

//  1 -> 10
let i = 10;
for (let i = 10; i > 1; i--) {
    console.log(i);
}

//while  loop
// while (kondisi) {}
console.log("while")
// 5 -> 10
let j = 11;
while (j < 10) {
    console.log(j);
    j = j + 1; //j++
}

//do while  loop
// do { } while (kondisi)
// jika program minimal jalan 1 kali, gunakan do while
console.log("do while")
let k = 100;
do {
    console.log(k);
    k = k + 1;
}  while (k < 10);


