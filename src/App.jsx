import Content from "./components/Content";
import Topbar from "./components/Topbar";
import {myData, galery} from "./constants/index"
import { useEffect, useState } from "react";

const App = () => {

  const [tanggalHariIni, setTanggalHariIni] = useState("");
  const [jamBerjalan, setJamBerjalan] = useState("");

  useEffect(() => {
    setInterval(() => {
      let waktu = new Date();
      let hr = waktu.getDay();
      const namaHari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ];
      let hari = namaHari[hr];
      let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
      let bln = waktu.getMonth();
      const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      let bulan = namaBulan[bln];
      let thn = waktu.getFullYear();
      let jam =
        waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
      let menit =
        waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
      let detik =
        waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
      setTanggalHariIni(`${hari}, ${tgl} ${bulan} ${thn}`);
      setJamBerjalan(`${jam}:${menit}:${detik} WITA`);
      // setTahun(waktu.getFullYear());
    }, 1);
  }, []);
  return <>
    <Topbar myData={myData} tanggalHariIni={tanggalHariIni} jamBerjalan={jamBerjalan} />
    <Content myData={myData} galery={galery} tanggalHariIni={tanggalHariIni} jamBerjalan={jamBerjalan} />
  </>;
}

export default App
