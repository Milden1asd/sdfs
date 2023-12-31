document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.querySelector('.content-container');
    const buttons = document.querySelectorAll('.btn-content');

    contentContainer.innerHTML = `<p>${buttons[0].getAttribute('data-content')}</p>`;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.getAttribute('data-content');
            contentContainer.innerHTML = `<p>${content}</p>`;
        });
    });
});

        // Логіка гри в змійку
        const snakeGameContainer = document.getElementById('snakeGame');
        const winMessageContainer = document.getElementById('winMessage');
        let snakeLength = 1;
        let snakeDirection = 'right';
        let snake = [{ x: 0, y: 0 }];
        let food = generateFood();
        let gameWon = false;

        function generateFood() {
            const x = Math.floor(Math.random() * 12) * 20;
            const y = Math.floor(Math.random() * 6) * 20;
            return { x, y };
        }

        function updateGame() {
            if (gameWon) {
                return;
            }

            const head = { ...snake[0] };
            switch (snakeDirection) {
                case 'up':
                    head.y = (head.y - 20 + 120) % 120;
                    break;
                case 'down':
                    head.y = (head.y + 20) % 120;
                    break;
                case 'left':
                    head.x = (head.x - 20 + 240) % 240;
                    break;
                case 'right':
                    head.x = (head.x + 20) % 240;
                    break;
            }

            // Перевірка на зіткнення з самим собою
            for (let i = 1; i < snake.length; i++) {
                if (head.x === snake[i].x && head.y === snake[i].y) {
                    endGame(false);
                    return;
                }
            }

            // Перевірка на з'їдання їжі
            if (head.x === food.x && head.y === food.y) {
                snakeLength++;
                food = generateFood();
            } else {
                snake.pop();
            }

            snake.unshift(head);
            drawGame();
        }

        function drawGame() {
            snakeGameContainer.innerHTML = '';
            snake.forEach(segment => {
                const snakeSegment = document.createElement('div');
                snakeSegment.className = 'snake-body';
                snakeSegment.style.width = '20px';
                snakeSegment.style.height = '20px';
                snakeSegment.style.left = `${segment.x}px`;
                snakeSegment.style.top = `${segment.y}px`;
                snakeGameContainer.appendChild(snakeSegment);
            });

            const foodElement = document.createElement('div');
            foodElement.className = 'food';
            foodElement.style.width = '20px';
            foodElement.style.height = '20px';
            foodElement.style.left = `${food.x}px`;
            foodElement.style.top = `${food.y}px`;
            snakeGameContainer.appendChild(foodElement);

            if (snake.length === 72) {
                gameWon = true;
                endGame(true);
            }
        }

        function endGame(isWinner) {
            if (isWinner) {
                winMessageContainer.textContent = 'Ти виграла! Ось мої побажання:';
                showContent();
            } else {
                winMessageContainer.textContent = 'Гра закінчена. Спробуйте ще раз!';
            }
        }

        function showContent() {
            const contentContainer = document.getElementById('contentContainer');
            contentContainer.innerHTML = `
                <p> Дорога Поліна,

                З наступаючим Новим Роком 2024! 🎉 Нехай цей рік принесе нам усім безліч радості, неймовірних моментів та нових можливостей. Доречі, пиши це до Нового Року (31.12.2023)
                
                Бажаю тобі море позитивних емоцій, великих досягнень і буди щасливою. Нехай кожен день буде наповнений сміхом та радістю, а весь рік принесе незабутні враження.
                
                Бажаю щоб ти була щаслива, і твої мрії збувалися!
                
                З Новим Роком, подруга! 🌟 Нехай ця пора святкових вражень принесе нам безліч незабутніх моментів разом.
                
                Від
                Артема (не гуля) 🌟 </p>
            <p>🌟 Бажаю щоб ти була щаслива у своєму житті.</p>
            `;
            contentContainer.style.display = 'block';
        }

        function handleKeyPress(event) {
            if (gameWon) {
                return;
            }

            switch (event.key) {
                case 'ArrowUp':
                    if (snakeDirection !== 'down') {
                        snakeDirection = 'up';
                    }
                    break;
                case 'ArrowDown':
                    if (snakeDirection !== 'up') {
                        snakeDirection = 'down';
                    }
                    break;
                case 'ArrowLeft':
                    if (snakeDirection !== 'right') {
                        snakeDirection = 'left';
                    }
                    break;
                case 'ArrowRight':
                    if (snakeDirection !== 'left') {
                        snakeDirection = 'right';
                    }
                    break;
            }
        }

        // Обробник клавіш для управління змійкою
        document.addEventListener('keydown', handleKeyPress);

        // Оновлення гри кожні 200 мс
        setInterval(updateGame, 200);

        // Функція для пропуску гри
        function skipGame() {
            gameWon = true;
            endGame(true);
        }

document.addEventListener('DOMContentLoaded', function () {
            animateSnowfall();
        });
        
        function animateSnowfall() {
            const snowflakesContainer = document.body;
        
            for (let i = 0; i < 50; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.style.left = `${Math.random() * window.innerWidth}px`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                snowflakesContainer.appendChild(snowflake);
            }
        }
        