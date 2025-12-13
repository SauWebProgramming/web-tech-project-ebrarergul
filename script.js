// Sayfa tamamen yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', () => {

    // HTML'deki kutuları ve linkleri seçiyoruz
    const anaIcerik = document.getElementById('ana-icerik');
    const linkHakkimda = document.getElementById('link-hakkimda');
    const linkProjeler = document.getElementById('link-projeler');
    const linkIletisim = document.getElementById('link-iletisim');

    // Sitemizin içeriklerini burada saklıyoruz (Sanal bir veritabanı gibi)
    const icerikler = {
        hakkimda: `
            <h1>Hakkımda</h1>
            <p>Merhaba! Ben bir Web Geliştirme öğrencisiyim.</p>
            <p>Bu siteyi JavaScript kullanarak, sayfa yenilenmeden çalışan bir SPA (Tek Sayfalı Uygulama) olarak tasarladım.</p>
            <p>Teknolojiye ve yazılıma büyük ilgi duyuyorum.</p>
        `,
        projeler: `
            <h1>Projelerim</h1>
            <p>Şu ana kadar geliştirdiğim bazı projeler şunlardır:</p>
            <ul>
                <li><strong>1. Kişisel Portfolyo Sitesi:</strong> (Şu an incelediğiniz proje) HTML, CSS ve JS ile geliştirildi.</li>
                <li><strong>2. Eczane Stok Sistemi:</strong> C# ile geliştirilen masaüstü uygulaması.</li>
            </ul>
        `,
        iletisim: `
            <h1>İletişim</h1>
            <p>Benimle iletişime geçmek için formu doldurabilirsiniz:</p>
            <form id="iletisim-formu">
                <label>Adınız:</label><br>
                <input type="text" id="isim" required style="margin-bottom: 10px;"><br>
                
                <label>Mesajınız:</label><br>
                <textarea id="mesaj" required style="margin-bottom: 10px;"></textarea><br>
                
                <button type="submit">Gönder</button>
            </form>
            <p id="bilgi-mesaji"></p>
        `
    };

    // Fonksiyon: Tıklanan linke göre içeriği değiştirir
    function sayfayiDegistir(sayfaIsmi) {
        // 1. Ana kutunun içini yeni yazılarla doldur
        anaIcerik.innerHTML = icerikler[sayfaIsmi];

        // 2. Tarayıcının adres çubuğunu güncelle (Örn: #projeler)
        window.location.hash = sayfaIsmi;
    }

    // --- Tıklama Olaylarını (Click Events) Dinliyoruz ---

    linkHakkimda.addEventListener('click', (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle
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
    
    // Sayfa ilk açıldığında varsayılan olarak 'Hakkımda' içeriğini yükle
    // (Eğer adres çubuğunda #projeler yazmıyorsa)
    if(!window.location.hash) {
        sayfayiDegistir('hakkimda');
    }
});