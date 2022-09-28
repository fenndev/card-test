const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());

    await fetch('/cards', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(value),
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.ok) {
            alert('Success!');
        }
        else {
            alert('Failed!');
        }
    }).catch(err => {
        console.error(err);
    });

});