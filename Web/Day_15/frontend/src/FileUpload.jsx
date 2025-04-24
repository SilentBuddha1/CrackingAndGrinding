function FileUpload(){
    const handleFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:5000/upload', true);
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const percentComplete = (e.loaded / e.total) * 100;
                    document.getElementById('progressBar').value = percentComplete;
                    document.getElementById('progressText').innerText = `${Math.round(percentComplete)}%`;
                }
            });
            xhr.onload = () => {
                if (xhr.status === 200) {
                    alert('File uploaded successfully!');
                } else {
                    alert('File upload failed!');
                }
            };
            xhr.send(formData);
            document.getElementById('progressBarContainer').style.display = 'block';
        }
    }
    return (
        <div className="App">
            <h1>File Upload</h1>
            <input type="file" id="fileInput" onChange={handleFile}/>
            <button id="uploadButton">Upload</button>
            <div id="progressBarContainer" style={{ display: 'none' }}>
                <progress id="progressBar" value="0" max="100"></progress>
                <span id="progressText"></span>
            </div>
        </div>
    );
}

export default FileUpload;