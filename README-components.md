# CV Components Structure

Proyek ini telah dipecah menjadi komponen-komponen untuk memudahkan maintenance dan pengembangan.

## Struktur Folder

```
cv_tugas_mobile/
├── components/
│   ├── navigation.html      # Komponen navigasi
│   ├── header.html         # Komponen header/hero section
│   ├── about.html          # Komponen section about me
│   ├── skills.html         # Komponen section skills
│   ├── education.html      # Komponen section education
│   ├── experience.html     # Komponen section experience
│   ├── projects.html       # Komponen section projects
│   ├── contact.html        # Komponen section contact
│   └── footer.html         # Komponen footer
├── index.html              # File HTML original
├── index-components.html   # File HTML yang menggunakan komponen
├── style.css              # CSS file
└── script.js              # JavaScript file
```

## Komponen yang Dibuat

### 1. Navigation Component (`navigation.html`)
- Berisi navigasi utama dengan brand dan menu links
- Brand: AP (M. Ramadhan Titan Dwi Cahya)
- Menu: About, Skills, Education, Projects, Contact

### 2. Header Component (`header.html`)
- Hero section dengan nama, tagline, dan tombol CTA
- Profile photo placeholder
- Buttons: Get In Touch, View Projects

### 3. About Component (`about.html`)
- Section tentang deskripsi diri
- Informasi mengenai background pendidikan dan passion
- Skills dan pengalaman programming

### 4. Skills Component (`skills.html`)
- Dibagi menjadi Hard Skills dan Soft Skills
- Hard Skills: TypeScript, Next.js, Java, Python, Flutter, Git, Figma, VS Code
- Soft Skills: Communication, Time Management, Leadership

### 5. Education Component (`education.html`)
- Informasi pendidikan
- Universitas Muhammadiyah Malang - Bachelor of Informatics

### 6. Experience Component (`experience.html`)
- Section untuk pengalaman kerja (saat ini masih placeholder)
- Siap untuk diisi dengan pengalaman profesional

### 7. Projects Component (`projects.html`)
- Grid layout untuk menampilkan projects
- 3 project cards dengan tech stacks dan descriptions
- Links ke project (placeholder)

### 8. Contact Component (`contact.html`)
- Grid layout dengan informasi kontak
- Email, Phone, Location, LinkedIn, GitHub
- Icons menggunakan Font Awesome

### 9. Footer Component (`footer.html`)
- Copyright notice
- Simple footer dengan container styling

## Cara Menggunakan

### Versi Komponen
1. Buka `index-components.html` di browser
2. File ini akan secara otomatis memuat semua komponen menggunakan JavaScript
3. Setiap komponen dimuat secara asinkron dari folder `components/`

### Versi Original
1. Buka `index.html` untuk melihat versi original (monolithic)

## Keuntungan Struktur Komponen

1. **Modularity**: Setiap section terpisah dan mudah dikelola
2. **Reusability**: Komponen dapat digunakan ulang di halaman lain
3. **Maintainability**: Perubahan pada satu komponen tidak mempengaruhi komponen lain
4. **Scalability**: Mudah menambah atau menghapus section
5. **Development**: Tim dapat bekerja pada komponen yang berbeda secara bersamaan

## Cara Mengembangkan

1. **Edit Komponen**: Edit file HTML di folder `components/`
2. **Tambah Komponen Baru**: 
   - Buat file HTML baru di folder `components/`
   - Tambahkan container di `index-components.html`
   - Tambahkan pemanggilan `loadComponent()` di JavaScript

## Browser Compatibility

Pastikan untuk menjalankan file melalui server lokal (tidak langsung buka file) karena menggunakan fetch API untuk memuat komponen. Browser modern akan memblokir fetch request dari file:// protocol.

### Menjalankan Server Lokal:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js (live-server)
npx live-server

# Menggunakan PHP
php -S localhost:8000
```

Kemudian akses `http://localhost:8000/index-components.html`