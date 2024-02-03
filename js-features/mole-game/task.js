document.addEventListener('DOMContentLoaded', function () {
    let moleCounter = 0;
    let defeatCounter = 0;
    let victoryCounter = 0;

    function startNewGame() {
        moleCounter = 0;
        defeatCounter = 0;
        updateStatus();
    }

    function handleClick(holeId) {
        const hole = document.getElementById(holeId);

        if (hole.classList.contains('hole_has-mole')) {
            moleCounter++;

            if (moleCounter === 10) {
                victoryCounter++;
                alert('Победа! Вы убили 10 кротов.');
                startNewGame();
            }
        } else {
            defeatCounter++;

            if (defeatCounter === 5) {
                alert('Поражение! Промахов стало слишком много.');
                startNewGame();
            }
        }

        updateStatus();
    }

    function updateStatus() {
        document.getElementById('dead').innerText = moleCounter;
        document.getElementById('lost').innerText = defeatCounter;
    }

    for (let i = 1; i <= 9; i++) {
        const holeId = 'hole' + i;
        const hole = document.getElementById(holeId);
        hole.addEventListener('click', function () {
            handleClick(holeId);
        });
    }

    startNewGame();
});
