alert("Aplikasi Cek Ticket!");

const batas = 12;

const nama = prompt(`Masukkan nama anda`);
const umur = prompt(`Masukkan umur anda`);

if(umur > batas){
    alert(`Anda diperbolehkan masuk studio`);
    const studio = prompt(`Pilih studio (A/B/C) :`).toUpperCase();
        if(studio == "A" || studio == "B" || studio == "C"){
            alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`);
        }else{
            alert(`Kode Studio tidak valid`);
        }
}else if(umur <= batas && umur > 0){
    alert(`Anda tidak boleh masuk ke studio, karena umur anda tidak memenuhi`);
}else if(umur < 0){
    alert(`Umur tidak valid`)
}else{
    alert(`Umur tidak valid`);
}