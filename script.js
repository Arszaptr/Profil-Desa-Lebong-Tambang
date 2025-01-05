function showSection(sectionId) {
    // Menyembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua section
    });

    // Menampilkan section yang dipilih
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block'; // Tampilkan section yang diminta
    } else {
        console.error(`Section with ID '${sectionId}' not found.`);
    }
}

// Secara default, menampilkan bagian 'tentang'
window.onload = () => {
    showSection('tentang');
};


