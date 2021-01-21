let warna = [
    "merah",
    "kuning",
    "hijau",
    "jingga",
    "biru",
    "nila",
    "ungu",
    "putih",
    "hitam"
];

let number = [1,2,3,4,5,6,7,8,9]

console.log(warna);
warna.forEach((item) =>{
    console.log(item)
    document.querySelector(".array").innerHTML = `
    ini adalah jenis-jenis warna ${warna} 
    `
});

console.log(number);
number.forEach((angka) => {
    console.log(angka)
    document.querySelector(".angka").innerHTML =`
    angka 1-9 : ${number}<br>
    angka 3 : ${number["2"]}
    `
})