document.addEventListener('DOMContentLoaded', function () {
    // Находим элементы, которые нам понадобятся
    const itemsContainer = document.getElementById('items');
    const loader = document.getElementById('loader');

    // Отправляем GET-запрос к указанному URL
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => {
            // Проверяем статус ответа
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных о курсе валют');
            }
            // Возвращаем JSON-данные
            return response.json();
        })
        .then(data => {
            // Выводим данные в консоль для отладки
            console.log(data);

            // Получаем объект с курсами валют из ответа сервера
            const valutes = data.response.Valute;

            // После получения данных скрываем анимацию загрузки
            loader.classList.remove('loader_active');

            // Перебираем объект с курсами валют и обновляем разметку на странице
            for (const currencyCode in valutes) {
                if (valutes.hasOwnProperty(currencyCode)) {
                    const currency = valutes[currencyCode];

                    const item = document.createElement('div');
                    item.classList.add('item');

                    const code = document.createElement('div');
                    code.classList.add('item__code');
                    code.textContent = currency.CharCode;

                    const value = document.createElement('div');
                    value.classList.add('item__value');
                    value.textContent = currency.Value;

                    const currencyElem = document.createElement('div');
                    currencyElem.classList.add('item__currency');
                    currencyElem.textContent = 'руб.';

                    item.appendChild(code);
                    item.appendChild(value);
                    item.appendChild(currencyElem);

                    itemsContainer.appendChild(item);
                }
            }
        })
        .catch(error => {
            // В случае ошибки показываем сообщение об ошибке
            console.error('Произошла ошибка:', error);
        });
});
