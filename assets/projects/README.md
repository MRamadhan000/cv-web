# Project Images Setup

Folder ini berisi gambar untuk project portfolio. Untuk menampilkan project dengan benar, silakan letakkan gambar-gambar berikut:

## Required Images:

### 1. Taretan Camera (`taretan-camera.png`)
- **Description**: E-commerce website untuk pemesanan camera dan iPhone
- **Technology**: Next.js, React, TypeScript, Tailwind CSS
- **Recommended Size**: 800x600px atau 16:9 aspect ratio
- **Format**: PNG, JPG, atau WEBP

### 2. SpeakMinds Academy (`speakminds-academy.png`)
- **Description**: Platform e-learning "FromYeMD" 
- **Technology**: Next.js, React, Node.js, MongoDB, Socket.io
- **Recommended Size**: 800x600px atau 16:9 aspect ratio
- **Format**: PNG, JPG, atau WEBP

### 3. Rentify (`rentify.png`)
- **Description**: Aplikasi mobile rental barang
- **Technology**: Flutter, Dart, Firebase, Google Maps, Stripe
- **Recommended Size**: 800x600px atau 16:9 aspect ratio
- **Format**: PNG, JPG, atau WEBP

## Image Guidelines:

### Technical Specs:
- **Resolution**: 800x600px minimum (4:3 ratio) atau 1200x675px (16:9 ratio)
- **File Size**: Maksimal 2MB per gambar
- **Format**: PNG (recommended), JPG, atau WEBP
- **Quality**: High quality untuk desktop, akan auto-optimized untuk mobile

### Visual Guidelines:
- **Screenshots**: Screenshot aplikasi/website yang menunjukkan UI utama
- **Mockups**: Bisa menggunakan device mockups untuk tampilan lebih profesional
- **Content**: Pastikan tidak ada informasi sensitif dalam screenshot
- **Lighting**: Bright dan clear, hindari screenshot yang terlalu gelap

## Fallback System:

Jika gambar tidak tersedia, sistem akan otomatis:
- Menampilkan background gradient cyber-blue
- Menampilkan icon yang sesuai dengan project type
- Tetap mempertahankan hover effects dan animations

## File Structure:
```
assets/
├── projects/
│   ├── taretan-camera.png
│   ├── speakminds-academy.png
│   ├── rentify.png
│   └── README.md (this file)
└── image_titan.png (profile photo)
```

## CSS Effects Applied:
- **Hover overlay** dengan icon project
- **Scale animation** saat hover
- **Brightness filter** untuk depth effect
- **Rounded corners** dengan futuristic border
- **Responsive sizing** untuk semua device
- **Error handling** dengan graceful fallbacks

Letakkan gambar-gambar tersebut di folder ini dan website akan otomatis mendeteksi dan menampilkannya dengan efek futuristik yang keren!