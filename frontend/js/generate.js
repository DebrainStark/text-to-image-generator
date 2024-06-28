document.getElementById('generate-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let text = document.getElementById('text-input').value;
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        let imageResult = document.getElementById('image-result');
        imageResult.innerHTML = `<img src="${data.image_path}" alt="Generated Image">`;
    })
    .catch(error => console.error('Error:', error));
});
