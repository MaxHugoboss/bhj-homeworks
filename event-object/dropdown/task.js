document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');

        dropdownValue.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownList.classList.toggle('dropdown__list_active');
        });

        dropdownList.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        document.addEventListener('click', function() {
            dropdownList.classList.remove('dropdown__list_active');
        });

        const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');

        dropdownLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                dropdownValue.textContent = link.textContent;
                dropdownList.classList.remove('dropdown__list_active');
            });
        });
    });
});
