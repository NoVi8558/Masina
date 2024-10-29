// Zkouška zda vše funguje.
console.info('Toto je výpis z main.js')

// Počáteční skóré. 
let poolScore = 0;
let wolvScore = 0;

// Funkce pro aktualizaci skóré.
function updateScore(character) {
    if (character === 'pool') {
        poolScore++;
        document.querySelector('.scorePool').textContent = poolScore;
    } else if (character === 'wolv') {
        wolvScore++;
        document.querySelector('.scoreWolv').textContent = wolvScore;
    }
}

// Constanta pro výběr pro výběr správného obrázku.
const poolImage = document.querySelector('.pullPool img');
const wolvImage = document.querySelector('.pullWolv img');

// Přidání klikací funkce
poolImage.addEventListener('click', () => updateScore('pool'));
wolvImage.addEventListener('click', () => updateScore('wolv'));
