document.addEventListener('DOMContentLoaded', () => {
    const viewSection = document.querySelector('#viewSection');
    const chartIcons = document.querySelectorAll('.chart-icon');
    const slideOutPanel = document.querySelector('#slideOutPanel');
    const closePanelButton = document.querySelector('#closePanelButton');

    // Funkcja do dynamicznego dodawania wykresu
    chartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const newChart = document.createElement('div');
            newChart.className = 'chart';
            newChart.setAttribute('data-level', '1');
            newChart.innerHTML = `
                <button class="close-button">X</button>
                <div class="chart-header">
                    Wykres poziom 1
                    <select class="level-selector">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            `;

            // Obsługa przycisku "X" - usuwa wykres i przywraca go do menu bocznego
            newChart.querySelector('.close-button').addEventListener('click', () => {
                viewSection.removeChild(newChart);
                icon.style.display = 'flex';
            });

            // Obsługa otwierania panelu po kliknięciu wykresu
            newChart.addEventListener('click', () => {
                slideOutPanel.classList.add('open');
            });

            viewSection.appendChild(newChart);
            icon.style.display = 'none';
        });
    });

    // Obsługa zamykania panelu
    closePanelButton.addEventListener('click', () => {
        slideOutPanel.classList.remove('open');
    });

    // Obsługa otwierania panelu dla początkowego wykresu
    document.querySelector('.chart').addEventListener('click', () => {
        slideOutPanel.classList.add('open');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const viewSection = document.querySelector('#viewSection');
    const chartIcons = document.querySelectorAll('.chart-icon');
    const slideOutPanel = document.querySelector('#slideOutPanel');
    const closePanelButton = document.querySelector('#closePanelButton');

    // Funkcja do dynamicznego dodawania wykresu
    chartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const newChart = document.createElement('div');
            newChart.className = 'chart';
            newChart.setAttribute('data-level', '1');
            newChart.innerHTML = `
                <button class="close-button">X</button>
                <div class="chart-header">
                    Wykres poziom 1
                    <select class="level-selector">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            `;

            // Obsługa przycisku "X" - usuwa wykres i przywraca go do menu bocznego
            newChart.querySelector('.close-button').addEventListener('click', () => {
                viewSection.removeChild(newChart);
                icon.style.display = 'flex';
            });

            // Obsługa otwierania panelu po kliknięciu wykresu
            newChart.addEventListener('click', () => {
                slideOutPanel.classList.add('open');
            });

            viewSection.appendChild(newChart);
            icon.style.display = 'none';
        });
    });

    // Obsługa zamykania panelu
    closePanelButton.addEventListener('click', () => {
        slideOutPanel.classList.remove('open');
    });

    // Obsługa otwierania panelu dla początkowego wykresu
    document.querySelector('.chart').addEventListener('click', () => {
        slideOutPanel.classList.add('open');
    });
});
