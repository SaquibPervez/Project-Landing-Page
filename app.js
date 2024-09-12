document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            const container = document.getElementById('image-container');
            container.innerHTML = '';
            container.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});