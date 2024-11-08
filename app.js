document.addEventListener('DOMContentLoaded', () => {
    const viewSection = document.querySelector('#viewSection');
    const chartIcons = document.querySelectorAll('.chart-icon');
    const slideOutPanel = document.querySelector('#slideOutPanel');
    const closePanelButton = document.querySelector('#closePanelButton');

    // Funkcja do dynamicznego dodawania wykresu
    chartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const newChart = document.createElement('div');
            newChart.className = 'chart level-1';
            newChart.setAttribute('data-level', '1'); // Domyślny poziom 1
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

            // Obsługa zmiany poziomu wykresu
            newChart.querySelector('.level-selector').addEventListener('change', (event) => {
                const newLevel = event.target.value;
                newChart.setAttribute('data-level', newLevel); // Zmiana atrybutu data-level
                updateChartSize(newChart, newLevel); // Aktualizacja rozmiaru wykresu
            });

            viewSection.appendChild(newChart);
            icon.style.display = 'none'; // Ukrywanie ikony po dodaniu wykresu do widoku
        });
    });

    // Obsługa zamykania panelu
    closePanelButton.addEventListener('click', () => {
        slideOutPanel.classList.remove('open');
    });

    // Obsługa otwierania panelu oraz zmiany poziomu dla początkowego wykresu
    const initialChart = document.querySelector('.chart');
    if (initialChart) {
        initialChart.addEventListener('click', () => {
            slideOutPanel.classList.add('open');
        });

        const initialLevelSelector = initialChart.querySelector('.level-selector');
        initialLevelSelector.addEventListener('change', (event) => {
            const newLevel = event.target.value;
            initialChart.setAttribute('data-level', newLevel); // Zmiana atrybutu data-level
            updateChartSize(initialChart, newLevel); // Aktualizacja rozmiaru wykresu
        });
    }

    // Funkcja do aktualizacji rozmiaru wykresu
    function updateChartSize(chart, level) {
        chart.classList.remove('level-1', 'level-2', 'level-3'); // Usuń poprzednie klasy rozmiaru
        chart.classList.add(`level-${level}`); // Dodaj nową klasę w zależności od poziomu
    }
});
