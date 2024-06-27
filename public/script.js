document.getElementById('saveNote').addEventListener('click', () => {
    const note = document.getElementById('note').value;
    console.log('Saving note:', note); 
    fetch('/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
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
    console.log('Loading note'); 
    fetch('/api/load')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('note').value = data.note;
        console.log('Note loaded:', data.note); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
