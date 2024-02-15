document.addEventListener('DOMContentLoaded', function() {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const bookContent = document.querySelector('.book');

    fontSizeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            fontSizeLinks.forEach(function(link) {
                link.classList.remove('font-size_active');
            });

            link.classList.add('font-size_active');

            const fontSize = link.getAttribute('data-size');

            bookContent.classList.remove('book_fs-big', 'book_fs-small');

            if (fontSize === 'big') {
                bookContent.classList.add('book_fs-big');
            } else if (fontSize === 'small') {
                bookContent.classList.add('book_fs-small');
            }
        });
    });
});
