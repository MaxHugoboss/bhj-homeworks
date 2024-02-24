document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы с классом has-tooltip
    var tooltips = document.querySelectorAll('.has-tooltip');

    // Для каждого элемента добавляем обработчик клика
    tooltips.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем действие по умолчанию (переход по ссылке)

            var existingTooltip = element.querySelector('.tooltip'); // Проверяем, есть ли уже подсказка

            if (existingTooltip) { // Если подсказка уже существует, то удаляем её
                existingTooltip.remove();
                return; // Завершаем выполнение функции
            }

            // Создаем элемент для подсказки
            var tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = element.getAttribute('title');

            // Добавляем подсказку к элементу
            element.appendChild(tooltip);

            // Позиционируем подсказку
            var elementRect = element.getBoundingClientRect();
            tooltip.style.top = elementRect.bottom + 'px';
            tooltip.style.left = elementRect.left + 'px';

            // Добавляем класс для отображения подсказки
            tooltip.classList.add('tooltip_active');

            // Обработчик для скрытия подсказки при клике за её пределами
            document.addEventListener('click', function (event) {
                if (!element.contains(event.target)) {
                    tooltip.remove();
                }
            });
        });
    });
});
