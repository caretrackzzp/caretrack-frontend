import React, { useState } from 'react';

function Upload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Selecteer een bestand om te uploaden');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/reports/upload', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Bestand succesvol geüpload!');
            } else {
                setMessage(`Fout: ${data.message}`);
            }
        } catch (error) {
            setMessage('Er is een fout opgetreden bij het uploaden.');
        }
    };

    return (
        <div>
            <h2>📂 Upload een bestand</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>📤 Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Upload;
