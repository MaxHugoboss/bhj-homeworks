let clicker__counter = 0;

const cookieElement = document.getElementById('cookie');

cookieElement.addEventListener('click', function() {
    clicker__counter++;
    document.getElementById('clicker__counter').innerText = clicker__counter;

    if (clicker__counter % 2 === 0) {
        cookieElement.style.width = '200px';
    } else {
        cookieElement.style.width = '250px';
    }
});