document.getElementById('saveNote').addEventListener('click', () => {
    const note = document.getElementById('note').value;
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Note saved successfully!');
        } else {
            alert('Failed to save note.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('loadNote').addEventListener('click', () => {
    fetch('/load')
    .then(response => response.json())
    .then(data => {
        document.getElementById('note').value = data.note;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
