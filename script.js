// Abrir el modal
function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modal.style.display = 'flex';
    modalImage.src = image.src;
    caption.innerHTML = image.alt;
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});
