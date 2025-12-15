# ✨ Myportfolio

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![NPM](https://img.shields.io/badge/NPM-Package_Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React Testing Library](https://img.shields.io/badge/Tests-React_Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/react)

> Proyek ini adalah situs web portofolio pribadi yang dirancang untuk menampilkan keterampilan, pengalaman, dan proyek. Ini berfungsi sebagai kehadiran online yang profesional, bertindak sebagai resume digital yang komprehensif, dan dibangun dengan teknologi web modern untuk pengalaman pengguna yang responsif dan interaktif.

## ✨ Fitur Utama

Situs web portofolio ini dirancang dengan mempertimbangkan interaktivitas dan presentasi profesional, menggabungkan beberapa fitur utama:

*   **Halaman Portofolio Interaktif:** Menampilkan berbagai bagian seperti Halaman Utama, bagian Proyek, dan detail posting proyek, memastikan navigasi yang mulus dan pengalaman penelusuran yang informatif.
*   **Desain Responsif dengan Tailwind CSS:** Memastikan tata letak yang adaptif dan pengalaman pengguna yang konsisten di seluruh perangkat, dari desktop hingga seluler, berkat kerangka kerja utilitas-pertama Tailwind CSS.
*   **Desain Modular Berbasis Komponen:** Antarmuka pengguna terstruktur menggunakan komponen React yang dapat digunakan kembali untuk Header, bagian Hero, Tombol, bagian Proyek, dan Footer, memfasilitasi pemeliharaan dan skalabilitas yang mudah.
*   **Tampilan Tumpukan Teknologi:** Secara visual menampilkan logo-logo teknologi yang digunakan dalam proyek, seperti CSS, HTML, JavaScript, Node.js, dan React, untuk menyoroti keahlian teknis pengembang.
*   **Unduhan CV yang Mudah:** Menyediakan tautan langsung yang nyaman untuk mengunduh resume atau CV pengembang dalam format PDF, memungkinkan perekrut untuk mengakses kredensial dengan cepat.
*   **Navigasi Aplikasi Halaman Tunggal (SPA):** Mengelola perutean di dalam aplikasi menggunakan React Router DOM, memberikan pengalaman pengguna yang mulus tanpa muat ulang halaman penuh.
*   **Integrasi Media Sosial:** Menyertakan ikon dan tautan ke profil media sosial pengembang (seperti Instagram, X/Twitter, YouTube), bersama dengan opsi kontak email, memfasilitasi koneksi yang mudah.
*   **Cakupan Tes Unit:** Memastikan fungsionalitas komponen aplikasi inti melalui pengujian unit dengan React Testing Library, meningkatkan keandalan dan stabilitas kode.
*   **Fungsionalitas Unduh File:** Mendukung pengunduhan aset atau dokumen dari situs web, menambahkan utilitas dan interaktivitas bagi pengguna.

## 🛠️ Tumpukan Teknologi

Proyek ini dibangun menggunakan tumpukan teknologi modern untuk memberikan pengalaman pengguna yang responsif dan berkinerja tinggi.

| Kategori         | Teknologi                | Catatan                                                               |
| :--------------- | :----------------------- | :-------------------------------------------------------------------- |
| **Bahasa Utama** | JavaScript               | Bahasa pemrograman inti untuk logika frontend.                          |
| **Framework UI** | React                    | Digunakan untuk membangun antarmuka pengguna berbasis komponen yang dinamis. |
| **Styling**      | Tailwind CSS             | Kerangka kerja CSS utilitas-pertama untuk desain yang cepat dan responsif. |
| **Manajemen Paket** | NPM                    | Digunakan untuk mengelola dependensi proyek.                          |
| **Perutean**     | React Router DOM         | Mengelola navigasi dan perutean di dalam aplikasi halaman tunggal.      |
| **Pengujian**    | React Testing Library    | Pustaka untuk pengujian komponen React yang kuat.                       |
| **Utilitas**     | `file-saver`, `js-file-download` | Memfasilitasi unduhan file di sisi klien.                             |
| **Markdown**     | `react-markdown`         | Untuk merender konten Markdown di komponen React.                       |
| **Build Tool**   | `react-scripts`          | Mengelola konfigurasi build dan skrip untuk aplikasi React.           |

## 🏛️ Tinjauan Arsitektur

Proyek ini mengadopsi arsitektur **Aplikasi Halaman Tunggal (SPA)**, yang dibangun di atas kerangka kerja React. Ini berarti seluruh aplikasi dirender di sisi klien, dengan JavaScript mengelola tampilan dinamis konten tanpa perlu memuat ulang halaman penuh.

Arsitektur ini dicirikan oleh:

*   **Komponenisasi:** Antarmuka pengguna dipecah menjadi komponen React yang kecil, dapat digunakan kembali, dan mandiri (misalnya, `Header`, `Footer`, `Hero`, `Projects`). Ini mempromosikan modularitas, pemeliharaan yang lebih mudah, dan skalabilitas.
*   **Perutean Sisi Klien:** `react-router-dom` digunakan untuk mengelola perutean di dalam aplikasi, memungkinkan navigasi yang mulus antar halaman (seperti `Home`, `Project`, `ProjectPosts`) tanpa menyebabkan muat ulang halaman.
*   **Pemisahan Kekhawatiran:** Direktori `src/Pages` menampung tampilan tingkat tinggi, sedangkan `src/components` berisi blok bangunan UI yang lebih kecil, memastikan pemisahan yang jelas antara struktur halaman dan elemen UI yang dapat digunakan kembali.
*   **Penataan Gaya Utilitas-Pertama:** Tailwind CSS digunakan untuk penataan gaya, memungkinkan kustomisasi langsung dan pembuatan antarmuka pengguna yang responsif dan konsisten dengan cepat.
*   **Aset Statis:** Gambar, ikon, dan dokumen (seperti CV) dikelola dalam direktori `public` dan `src/assets`, diakses langsung oleh klien.

Secara keseluruhan, arsitektur SPA ini menghasilkan pengalaman pengguna yang cepat, interaktif, dan modern, ideal untuk situs web portofolio yang berfokus pada presentasi konten yang menarik.

## 🚀 Memulai

Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal di mesin Anda.

### Prasyarat

Pastikan Anda telah menginstal alat berikut:

*   Node.js (versi LTS direkomendasikan)
*   NPM (biasanya disertakan dengan Node.js)
*   Git

### Instalasi

1.  **Kloning repositori:**

    ```bash
    git clone https://github.com/Magomed-Abdulzagirov/myportfolio.git
    ```

2.  **Arahkan ke direktori proyek:**

    ```bash
    cd myportfolio
    ```

3.  **Instal dependensi:**

    ```bash
    npm install
    ```

### Menjalankan Proyek

1.  **Mulai server pengembangan:**

    ```bash
    npm start
    ```

    Aplikasi akan berjalan di `http://localhost:3000` di browser default Anda.

## 📂 Struktur File

```
/
├── .gitignore
├── .idea
│   └── ... (file konfigurasi IDE)
├── README.md
├── package-lock.json
├── package.json
├── project.json
├── public
│   ├── ToDo.md
│   ├── favicon.ico
│   ├── index.html
│   ├── ... (aset statis lainnya)
└── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── Pages
│   │   ├── Home.js
│   │   ├── Project.js
│   │   └── ProjectPosts.js
│   ├── assets
│   │   ├── File
│   │   │   └── CV.pdf
│   │   └── LogoStack
│   │       ├── css.svg
│   │       ├── html.svg
│   │       ├── javascript.svg
│   │       ├── nodejs.svg
│   │       └── reactjs.svg
│   ├── components
│   │   ├── Buttons
│   │   │   ├── Buttons.css
│   │   │   └── Buttons.js
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   ├── Footer.js
│   │   │   └── ProjectsPhoto
│   │   │       ├── EmailIcon.svg
│   │   │       ├── instagram.svg
│   │   │       ├── x.svg
│   │   │       └── youtube.svg
│   │   ├── Header
│   │   │   ├── Header.css
│   │   │   └── Header.js
│   │   ├── Hero
│   │   │   ├── Hero.css
│   │   │   └── Hero.js
│   │   └── Projects
│   │       ├── Projects.css
│   │       └── Projects.js
│   ├── img
│   │   └── header
│   │       └── logo.svg
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── tailwind.config.js
```

*   **/public**: Berisi aset statis yang disajikan langsung oleh server web, termasuk `index.html` (titik masuk aplikasi), ikon, dan manifes.
*   **/src**: Sumber kode utama aplikasi React.
    *   **/src/Pages**: Berisi komponen utama untuk setiap halaman atau rute aplikasi (misalnya, beranda, daftar proyek, detail proyek).
    *   **/src/components**: Direktori ini menampung komponen UI yang dapat digunakan kembali dan lebih kecil, diatur berdasarkan fungsinya (misalnya, tombol, header, footer, bagian hero, kartu proyek).
    *   **/src/assets**: Menyimpan aset seperti dokumen (CV.pdf) dan ikon logo teknologi yang digunakan dalam proyek.
    *   **/src/img**: Berisi gambar khusus yang digunakan dalam aplikasi.
    *   `App.js`: Komponen root dari aplikasi React.
    *   `index.js`: Titik masuk aplikasi JavaScript utama yang merender komponen `App.js`.
    *   `App.test.js` & `setupTests.js`: File terkait pengujian untuk komponen `App` dan konfigurasi pengujian.
*   `package.json`: Mendefinisikan metadata proyek, skrip, dan semua dependensi proyek.
*   `tailwind.config.js`: File konfigurasi untuk Tailwind CSS, tempat Anda dapat menyesuaikan tema, plugin, dan utilitas Tailwind.- - List item- - List item
