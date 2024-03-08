document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const progressBar = document.getElementById("progress");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Файл успешно загружен!");
                } else {
                    console.error("Ошибка при загрузке файла:", xhr.statusText);
                }
            }
        };

        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progressBar.value = percentComplete;
            }
        };

        xhr.open("POST", form.action);
        xhr.send(formData);
    });
});
