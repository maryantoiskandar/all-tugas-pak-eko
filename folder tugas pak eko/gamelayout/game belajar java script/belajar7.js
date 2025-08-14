//tipe data ada 2 tipe primitifdan non primitif

//tipe data primitif (nomor(numbers), tulisan(srings),salah benar(bolean),
//  tidak dijelaskan(undefined), tipe data kosong(null))
//tipe data non primitif (objek, arrays)

//tipe data tulisan (string)
let nama
nama = "RPL itu mudah"
console.log('berikut adalah total text : ' +nama.length)

// berikut adalah sintak untuk mengambil test dalam variable
console.log(nama.slice(0,3))

// berikut adalah sintak untuk mengganti kalimat
let kalimat = 'saya suka aple'
console.log(kalimat.replaceAll('aple', 'jeruk'))

//berikut adalah sintak untuk membuat huruf kapital
let a = 'ayam'
console.log(a.toLocalleUpperCase())

//berikut adalah sintak untuk membuat huruf kecil
let b = 'kucing'
console.log(b.toLowerCase())

// berikut adalah sintak untuk menghapus
let c = '      kambing dan bebeek'
console.log(c.trim())

// merubah text menjadi array 
let d = 'ayam-kucing-kambing-bebek'
console.log(d.split("-"))

//template literal
let e = 'faisal';
let umur = 20
let text = 'Nama saya' + panggilan + 'umur saya' + umur
console.log(text)

//latihan
let kata = "ngoding sederhana"
let kata2 = 'dan juga menyenangkan'
//1 ambil kata (ngoding)
//2 ambil nama di kata sederhna
//3 gabungan kata dan kata2 jadi 1 baris
//4 buat huruf besar semua kata