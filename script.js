document.addEventListener('DOMContentLoaded', () => {

    // Gerekli elemanları seçiyoruz
    const anaIcerik = document.getElementById('ana-icerik');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menuListesi = document.getElementById('menu-listesi');
    
    // Linkleri tanımlıyoruz
    const linkler = {
        hakkimda: document.getElementById('link-hakkimda'),
        projeler: document.getElementById('link-projeler'),
        iletisim: document.getElementById('link-iletisim')
    };

    // --- HAMBURGER MENÜ MANTIĞI ---
    // 1. Butona tıklayınca menüyü aç/kapat
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            menuListesi.classList.toggle('aktif');
        });
    }

    // 2. Bir linke tıklayınca menüyü otomatik kapat (Mobilde ekranı kaplamasın diye)
    Object.values(linkler).forEach(link => {
        if(link) {
            link.addEventListener('click', () => {
                menuListesi.classList.remove('aktif');
            });
        }
    });

    // --- İÇERİKLER ---
    const icerikler = {
        hakkimda: `
            <div class="hero-container">
                <div class="hero-text">
                    <h1>Merhaba, <br> Ben <span class="highlight">Ebrar Ergül</span></h1>
                    <h3>Geleceğin Web Geliştiricisi</h3>
                    <p>Modern teknolojilerle, kullanıcı dostu ve estetik web deneyimleri tasarlamayı seviyorum. Şu an Web Teknolojileri üzerine kendimi geliştiriyorum.</p>
                    <div class="hero-buttons">
                        <button onclick="document.getElementById('link-projeler').click()">Projelerimi Gör</button>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="ben.jpeg" alt="Ebrar Ergül" onerror="this.src='https://via.placeholder.com/400x400?text=Fotoğraf+Yok'">
                </div>
            </div>`,
            
        projeler: `
            <h1>Projelerim</h1>
            <p>Şu ana kadar geliştirdiğim projeler:</p>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>🎨 Kişisel Portfolyo</h3>
                    <p>HTML, CSS ve JavaScript ile geliştirdiğim SPA özellikli modern web sitesi.</p>
                </div>
                <div class="project-card">
                    <h3>💊 Eczane Stok Sistemi</h3>
                    <p>C# ile geliştirdiğim, stok takibi yapan masaüstü otomasyonu.</p>
                </div>
            </div>`,

        iletisim: `
            <h1>İletişim</h1>
            <p>Projelerim hakkında konuşmak için formu doldurabilirsin:</p>
            <form id="iletisim-formu">
                <label>Adınız:</label>
                <input type="text" id="isim" placeholder="Adınız..." required>
                <label>Mesajınız:</label>
                <textarea id="mesaj" rows="4" placeholder="Mesajınız..." required></textarea>
                <button type="submit">Gönder</button>
            </form>
            <p id="bilgi-mesaji"></p>`
    };

    // --- SAYFA DEĞİŞTİRME ---
    function sayfayiDegistir(sayfaIsmi) {
        if (icerikler[sayfaIsmi]) {
            anaIcerik.innerHTML = icerikler[sayfaIsmi];
            window.location.hash = sayfaIsmi;
        }
    }

    // Link tıklamalarını dinle
    if(linkler.hakkimda) linkler.hakkimda.addEventListener('click', (e) => { e.preventDefault(); sayfayiDegistir('hakkimda'); });
    if(linkler.projeler) linkler.projeler.addEventListener('click', (e) => { e.preventDefault(); sayfayiDegistir('projeler'); });
    if(linkler.iletisim) linkler.iletisim.addEventListener('click', (e) => { e.preventDefault(); sayfayiDegistir('iletisim'); });

    // Form Kontrolü
    anaIcerik.addEventListener('submit', (e) => {
        if(e.target && e.target.id === 'iletisim-formu') {
            e.preventDefault();
            const isim = document.getElementById('isim').value;
            if(isim.length < 3) { alert("İsim en az 3 harf olmalı!"); return; }
            
            const bilgi = document.getElementById('bilgi-mesaji');
            bilgi.style.color = "#2ecc71";
            bilgi.innerText = `Teşekkürler ${isim}, mesajın iletildi!`;
            e.target.reset();
        }
    });

    // Başlangıç Ayarı
    if(!window.location.hash) { sayfayiDegistir('hakkimda'); } 
    else { sayfayiDegistir(window.location.hash.substring(1)); }

});