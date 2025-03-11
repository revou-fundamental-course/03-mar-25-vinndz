const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked')?.value;
    const pesan = document.getElementById("pesan").value;

    // Cek apakah nama tidak kosong, jika kosong set default "Guest"
    if (name.trim() !== "") {
        document.getElementById("name-placeholder").textContent = name + ", Welcome to Our Website";
    } else {
        document.getElementById("name-placeholder").textContent = "Guest";
    }

    // Fungsi untuk memformat tanggal menjadi format DD/MM/YYYY
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear(); 
        return `${day}/${month}/${year}`; 
    }

    // Format tanggal lahir
    const formattedTanggalLahir = formatDate(tanggalLahir);

    // Menampilkan waktu saat ini dengan format yang lebih lengkap
    const currentTime = new Date();

    // Menggunakan toLocaleString() untuk menampilkan waktu dalam format tanpa zona waktu
    const currentTimeFormatted = currentTime.toLocaleString('en-GB', {
        weekday: 'short',    
        year: 'numeric',     
        month: 'short',      
        day: '2-digit',      
        hour: '2-digit',   
        minute: '2-digit',  
        second: '2-digit',   
        timeZoneName: 'short', 
        hour12: false        
    });

    // Menampilkan data di output container
    const outputContainer = document.getElementById("output-container");
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <p><strong>Current Time:</strong> ${currentTimeFormatted}</p><br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${formattedTanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    // Menampilkan output container
    outputContainer.style.display = "block";

    // Mengosongkan form
    document.getElementById("name").value = '';
    document.getElementById("tanggal-lahir").value = '';
    const radios = document.getElementsByName("jenis-kelamin");
    radios.forEach(radio => radio.checked = false); 
    document.getElementById("pesan").value = '';
});
