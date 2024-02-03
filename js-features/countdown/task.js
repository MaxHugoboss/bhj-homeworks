        // Функция для уведомления о победе
        function showWinnerMessage() {
            alert('Вы победили в конкурсе!');
        }

        // Функция для запуска таймера
        function startCountdown(seconds) {
            // Получаем элемент, в который будем выводить таймер
            const timer = document.getElementById('timer');

            // Функция для уменьшения значения таймера и проверки окончания отсчета
            function updateTimer() {
                // Выводим текущее значение таймера на страницу
                timer.innerText = seconds;

                // Проверяем, закончился ли отсчет
                if (seconds <= 0) {
                    // Выводим сообщение о победе
                    showWinnerMessage();
                } else {
                    // Уменьшаем значение таймера
                    seconds--;

                    // Вызываем саму себя через 1 секунду
                    setTimeout(updateTimer, 1000);
                }
            }

            // Запускаем таймер
            updateTimer();
        }

        // Запускаем таймер с начальным значением, например, 60 секунд
        startCountdown(60);