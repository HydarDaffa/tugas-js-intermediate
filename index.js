const mahasiswa = [
{ nama: "Andi", nilai: 85, jurusan: "Informatika" },
{ nama: "Budi", nilai: 70, jurusan: "Sistem Informasi" },
{ nama: "Citra", nilai: 90, jurusan: "Informatika" },
{ nama: "Dewi", nilai: 60, jurusan: "Teknik Elektro" }
];

const daftarNama = mahasiswa.map(mhs => mhs.nama);
console.log("Daftar Nama Mahasiswa:", daftarNama);

const mahasiswaLulus = mahasiswa.filter((mhs) => 75 < mhs.nilai).map((mhs) => mhs.nama);
console.log("Mahasiswa yang Lulus:", mahasiswaLulus);

const nilaiRataRata = mahasiswa.reduce((total, mhs) => total + mhs.nilai, 0) / mahasiswa.length;
console.log("Nilai Rata-rata:", nilaiRataRata);

class Mahasiswa {
constructor(nama, nilai, jurusan) {
this.nama = nama;
this.nilai = nilai;
this.jurusan = jurusan;
}

getStatus() {
return this.nilai >= 75 ? "Lulus" : "Tidak Lulus";
}
}

class mahasiswaBeasiswa  extends Mahasiswa {
constructor(nama, nilai, jurusan, beasiswa) {
super(nama, nilai, jurusan);
this.beasiswa = beasiswa;
}
}

const mhs1 = new mahasiswaBeasiswa("Budi", 80, "Informatika", true);
console.log(`Status ${mhs1.nama} : ${mhs1.getStatus()}`);


const mhs2 = new mahasiswaBeasiswa("Andi", 60, "Informatika", true);
console.log(`Status ${mhs2.nama} : ${mhs2.getStatus()}`);


const myPromise = new Promise((resolve, reject ) => {
setTimeout(() => {
const berhasil = true;
if (berhasil) {
  resolve("Data berhasil diambil dari server[...]");
}else{
  reject("Data gagal diambil dari server[...]");
}
}, 2000);
});

myPromise
.then((pesan) => {
console.log(pesan);
})
.catch((error) => {
console.error(error);
});
