// Sayfa tamamen yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', () => {

    // HTML'deki kutuları ve linkleri seçiyoruz
    const anaIcerik = document.getElementById('ana-icerik');
    const linkHakkimda = document.getElementById('link-hakkimda');
    const linkProjeler = document.getElementById('link-projeler');
    const linkIletisim = document.getElementById('link-iletisim');

    // Sitemizin içeriklerini burada saklıyoruz
    const icerikler = {
        hakkimda: `
            <h1>Hakkımda</h1>
            <p>Merhaba! Ben bir Web Geliştirme öğrencisiyim.</p>
            <p>Bu siteyi JavaScript kullanarak, sayfa yenilenmeden çalışan bir SPA (Tek Sayfalı Uygulama) olarak tasarladım.</p>
            <p>Teknolojiye ve yazılıma büyük ilgi duyuyorum. Hedefim modern web teknolojilerinde uzmanlaşmak.</p>
        `,
        projeler: `
            <h1>Projelerim</h1>
            <p>Şu ana kadar geliştirdiğim bazı projeler şunlardır:</p>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 15px; background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 5px solid #764ba2;">
                    <strong>1. Kişisel Portfolyo Sitesi:</strong> <br>
                    Şu an incelediğiniz proje. HTML, CSS ve Saf JavaScript (Vanilla JS) kullanılarak geliştirildi.
                </li>
                <li style="margin-bottom: 15px; background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 5px solid #667eea;">
                    <strong>2. Eczane Stok Sistemi:</strong> <br>
                    C# ve .NET kullanılarak geliştirilen masaüstü otomasyon projesi.
                </li>
            </ul>
        `,
        iletisim: `
            <h1>İletişim</h1>
            <p>Benimle iletişime geçmek için formu doldurabilirsiniz:</p>
            <form id="iletisim-formu">
                <label>Adınız:</label><br>
                <input type="text" id="isim" placeholder="Adınızı giriniz..." required><br>
                
                <label>Mesajınız:</label><br>
                <textarea id="mesaj" rows="4" placeholder="Mesajınızı buraya yazın..." required></textarea><br>
                
                <button type="submit">Gönder</button>
            </form>
            <p id="bilgi-mesaji"></p>
        `
    };

    // Fonksiyon: Tıklanan linke göre içeriği değiştirir
    function sayfayiDegistir(sayfaIsmi) {
        // 1. Ana kutunun içini yeni yazılarla doldur
        anaIcerik.innerHTML = icerikler[sayfaIsmi];

        // 2. Tarayıcının adres çubuğunu güncelle
        window.location.hash = sayfaIsmi;
    }

    // --- Tıklama Olaylarını (Click Events) Dinliyoruz ---

    linkHakkimda.addEventListener('click', (e) => {
        e.preventDefault();
        sayfayiDegistir('hakkimda');
    });

    linkProjeler.addEventListener('click', (e) => {
        e.preventDefault();
        sayfayiDegistir('projeler');
    });

    linkIletisim.addEventListener('click', (e) => {
        e.preventDefault();
        sayfayiDegistir('iletisim');
    });

    // --- İletişim Formu Kontrolü ---
    // Form dinamik olarak eklendiği için ana kutuyu dinliyoruz
    anaIcerik.addEventListener('submit', (e) => {
        if(e.target && e.target.id === 'iletisim-formu') {
            e.preventDefault(); // Sayfanın yenilenmesini durdur
            
            // Formdaki verileri al
            const isim = document.getElementById('isim').value;
            const mesaj = document.getElementById('mesaj').value;
            
            // Basit Doğrulama: İsim çok kısaysa uyarı ver
            if(isim.length < 3) {
                alert("Lütfen geçerli bir isim giriniz (En az 3 karakter).");
                return;
            }

            // Başarı Mesajını Göster
            const bilgiKutusu = document.getElementById('bilgi-mesaji');
            bilgiKutusu.style.color = "#2ecc71"; // Yeşil renk
            bilgiKutusu.style.marginTop = "15px";
            bilgiKutusu.style.fontWeight = "bold";
            bilgiKutusu.innerText = `Teşekkürler ${isim}, mesajınız başarıyla alındı!`;
            
            // Formu temizle
            e.target.reset();
        }
    });
    
    // Sayfa ilk açıldığında varsayılan sayfayı yükle
    if(!window.location.hash) {
        sayfayiDegistir('hakkimda');
    } else {
        // Eğer linkte #iletisim yazıyorsa direkt orayı aç
        const hash = window.location.hash.substring(1); // # işaretini at
        if(icerikler[hash]) {
            sayfayiDegistir(hash);
        }
    }
});