document.addEventListener('DOMContentLoaded', function () {
    const pollTitleElement = document.getElementById('poll__title');
    const pollAnswersElement = document.getElementById('poll__answers');

    fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки опроса');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            
            if (data && data.data && data.data.title && data.data.answers && Array.isArray(data.data.answers)) {
                
                pollTitleElement.textContent = data.data.title;

                data.data.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.classList.add('poll__answer');
                    button.textContent = answer;
                    button.addEventListener('click', function () {
                        alert('Спасибо, ваш голос засчитан!');
                    });
                    pollAnswersElement.appendChild(button);
                });
            } else {
                throw new Error('Данные об опросе отсутствуют или некорректны');
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
});
