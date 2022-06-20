let namaGambar = "";
let jawabanBenar = "";

const namaDaerah = [
    "Aceh",
    "Sumatera Utara",
    "Sumatera Barat",
    "Riau",
    "Jambi",
    "Kepulauan Riau",
    "Bengkulu",
    "Sumatera Selatan",
    "Kepulauan Bangka Belitung",
    "Lampung",
    "Banten",
    "Daerah Khusus Ibukota Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "Daerah Istimewa Yogyakarta",
    "Jawa Timur",
    "Bali",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Kalimantan Barat",
    "Kalimantan Tengah",
    "Kalimantan Selatan",
    "Kalimantan Timur",
    "Kalimantan Utara",
    "Sulawesi Barat",
    "Sulawesi Selatan",
    "Sulawesi Tenggara",
    "Sulawesi Tengah",
    "Gorontalo",
    "Sulawesi Utara",
    "Maluku Utara",
    "Maluku",
    "Papua Barat",
    "Papua"
    
  ];

  const namaDaerahUpper = namaDaerah.map(element => {
    return element.toUpperCase();
  });



function showClue() {
    randomNum = Math.floor(Math.random() * 33);
    console.log(randomNum);

    namaGambar = randomNum + ".png";
    console.log(namaGambar);

    document.getElementById("clue").src = [namaGambar];
    console.log(document.getElementById("clue"));
    
    
    
    x = namaDaerahUpper[randomNum];
    jawabanBenar = x;
    console.log(jawabanBenar);
    
}
showClue();



function checkTebakan() {
    const tebakan = document.querySelector('.tebakan').value;
    console.log(tebakan);
    let y = tebakan.toUpperCase();
    if (y == jawabanBenar) {
        alert('Selamat Tebakan Anda Benar!');
        showClue();
    } else {
        alert('Maaf Tebakan Anda Salah, Silahkan Coba Lagi! Jawaban Yang Benar Adalah Provinsi ' + namaDaerah[randomNum]);
    }
      
}   

