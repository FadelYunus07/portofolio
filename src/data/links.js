import image1 from "../image/html.svg";
import image2 from "../image/css.svg";
import image3 from "../image/js.svg";
import image4 from "../image/react.svg";
import image5 from "../image/laravel.svg";
import image6 from "../image/mysql.png";
import image7 from "../image/andstu.svg";
import image8 from "../image/bootstrap.svg";
import image9 from "../image/git.svg";
import image10 from "../image/node.svg";
import image11 from "../image/java.svg";
import image12 from "../image/cpp.svg";
import image13 from "../image/php.svg";
import image14 from "../image/python.svg";
import image15 from "../image/api.svg";
import image16 from "../image/github.svg";
import image17 from "../image/kotlin.svg";

// IMAGE PORTO
import porto1 from "../image/absenqr/1.png";
import porto2 from "../image/absenqr/2.png";
import porto3 from "../image/absenqr/3.png";
import porto4 from "../image/absenqr/4.png";
import porto5 from "../image/absenqr/5.png";
import porto6 from "../image/absenqr/6.png";
import porto7 from "../image/absenqr/7.png";
import porto8 from "../image/absenqr/8.png";
import porto9 from "../image/absenqr/9.png";
import porto10 from "../image/absenqr/10.png";
import porto11 from "../image/absenqr/11.png";
import porto12 from "../image/absenqr/12.png";

// IMAGE IBM
import calc1 from "../image/ibm_calculator/1.jpg";
import calc2 from "../image/ibm_calculator/2.jpg";
import calc3 from "../image/ibm_calculator/3.jpg";
import calc4 from "../image/ibm_calculator/4.jpg";
import calc5 from "../image/ibm_calculator/5.jpg";

// IMAGE KARYAWAN
import kar1 from "../image/pencatatan_karyawan/1.png";
import kar2 from "../image/pencatatan_karyawan/2.png";
import kar3 from "../image/pencatatan_karyawan/3.png";
import kar4 from "../image/pencatatan_karyawan/4.png";
import kar5 from "../image/pencatatan_karyawan/5.png";
import kar6 from "../image/pencatatan_karyawan/6.png";
import kar7 from "../image/pencatatan_karyawan/7.png";

// IMAGE QNME
import qnme1 from "../image/qnme/1.png";
import qnme2 from "../image/qnme/2.png";
import qnme3 from "../image/qnme/3.png";
import qnme4 from "../image/qnme/4.png";
import qnme5 from "../image/qnme/5.png";

// IMAGE NOOBAR
import noobar1 from "../image/noobar/1.png";
import noobar2 from "../image/noobar/2.png";
import noobar3 from "../image/noobar/3.png";
import noobar4 from "../image/noobar/4.png";
import noobar5 from "../image/noobar/5.png";
import noobar6 from "../image/noobar/6.png";
import noobar7 from "../image/noobar/7.png";
import noobar8 from "../image/noobar/8.png";
import noobar9 from "../image/noobar/9.png";

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "skill",
    text: "Skill",
  },
  {
    id: 3,
    path: "portfolio",
    text: "Portfolio",
  },
  {
    id: 4,
    path: "contact",
    text: "Contact",
  },
];

export const skill = [
  {
    id: 1,
    name: "HTML",
    image: image1,
  },
  {
    id: 2,
    name: "CSS",
    image: image2,
  },
  {
    id: 3,
    name: "JavaScript",
    image: image3,
    category: "bahasaProgram",
  },
  {
    id: 4,
    name: "React",
    image: image4,
    category: "tool",
  },
  {
    id: 5,
    name: "Laravel",
    image: image5,
    category: "tool",
  },
  {
    id: 6,
    name: "MySQL",
    image: image6,
    category: "tool",
  },
  {
    id: 7,
    name: "Android Studio",
    image: image7,
    category: "tool",
  },
  {
    id: 8,
    name: "Bootstrap",
    image: image8,
    category: "tool",
  },
  {
    id: 9,
    name: "Git",
    image: image9,
    category: "tool",
  },
  {
    id: 10,
    name: "Node JS",
    image: image10,
    category: "tool",
  },
  {
    id: 11,
    name: "Java",
    image: image11,
    category: "bahasaProgram",
  },
  {
    id: 12,
    name: "C++",
    image: image12,
    category: "bahasaProgram",
  },
  {
    id: 13,
    name: "PHP",
    image: image13,
    category: "bahasaProgram",
  },
  {
    id: 14,
    name: "Python",
    image: image14,
    category: "bahasaProgram",
  },
  {
    id: 15,
    name: "API",
    image: image15,
    category: "tool",
  },
  {
    id: 16,
    name: "Github",
    image: image16,
    category: "tool",
  },
  {
    id: 17,
    name: "Kotlin",
    image: image17,
    category: "bahasaProgram",
  },
];

export const porto = [
  {
    id: 1,
    // img: porto1,
    allImg: [porto1, porto2, porto3, porto4, porto5, porto6, porto7, porto8, porto9, porto10, porto11, porto12],
    emoji: "fa fa-qrcode fa-5x",
    title: "Absensi QR Code",
    text: "Sistem Absensi dengan menggunakan QR code sebagai media pencatatan kehadiran Siswa dan Guru (Skripsi)",
    link: "",
    fitur: [
      "Scanner Bagi Siswa dan Guru yang akan melakukan Absensi",
      "Kehadiran Siswa dan Guru (Mencatat kehadiran Siswa dan Guru yang akan dibandingkan titik lokasi QR Code dengan lokasi perangkat)",
      "Absensi Kelas Siswa Dan Guru (Mencatat kehadiran siswa dan guru dalam ruagan kelas, QR Code Dinamis untuk mencegah kecurangan)",
      "Auto Generate QR Code Kelas Senin - jum'at dan sesuai Jam Mata Pelajaran",
      "Crud Master Kelas, Anggota Kelas, Guru",
    ],
  },
  {
    id: 2,
    allImg: [calc1, calc2, calc3, calc4, calc5],
    emoji: "fa fa-calculator fa-5x",
    title: "Kalkulator IBM",
    text: "Aplikasi kalkulator yang menghitung tingkat obesitas seseorang (Latihan)",
    link: "",
    fitur: ["Input Angka Berat Badan (Kg)", "Input Angka Tinggi Badan (Cm)", "Hasil Perhitungan", "Notifikasi Normal/Healthy, Overweight, Underweight, Obese"],
  },
  {
    id: 3,
    allImg: [kar1, kar2, kar3, kar4, kar5, kar6, kar7],
    emoji: "fa fa-address-book fa-5x",
    title: "Sistem Pencatatan Karyawan",
    text: "Sistem yang digunakan untuk pencatatan karyawan Indomart (KP Berkelompok)",
    link: "",
    fitur: ["Crud User", "Dashboard", "CRUD Data KK, Data Karyawan, Mutasi,Galeri,dll", "Laporan"],
  },
  {
    id: 4,
    allImg: [qnme1, qnme2, qnme3, qnme4, qnme5],
    emoji: "fa fa-gem fa-5x",
    title: "QnMe Luxury",
    text: "Sebuah Landing Page untuk brand Skincare (Ongoing)",
    link: "",
    fitur: ["Menampilkan Produk", "Contact", "Testimonial", "Faq", "(ONGOING)"],
  },
  {
    id: 5,
    allImg: [noobar1, noobar2, noobar3, noobar4, noobar5, noobar6, noobar7, noobar8, noobar9],
    emoji: "fa fa-gem fa-5x",
    title: "Noobar",
    text: "Sebuah Website Catalog Movies",
    link: "https://fadelyunus07.github.io/noobar-react/",
    fitur: ["Menampilkan Movie", "Menampilkan TV Series", "Pencarian", "Trailer", "Preview Film"],
  },
];
