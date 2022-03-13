const testButton = window.document.getElementById("testCamp");

const button = window.document.createElement('button');
button.classList = 'startMachine';
button.id = 'showBegin';
button.innerText = 'Buscar anagramas com 5 ou mais palavras!'
testButton.appendChild(button);

const buttonItself = window.document.getElementById("showBegin");

buttonItself.addEventListener('click', function () {
    
    const showAnagrams = results => {
        const show = window.document.getElementById('testCamp');
        const div = window.document.createElement('div');
        div.classList = 'title';
        for (let anagrams in results) {
            const p = window.document.createElement('p');
            p.innerHTML = `<strong>Anagramas para "${anagrams}":</strong><span id="espaço">&nbsp</span><span>[${results[anagrams]}]</span>`;
            p.classList = 'content';
            div.appendChild(p);
        }
        show.appendChild(div);
    };
    
    const alphabetize = a => {
        return a.toLowerCase().split('').sort().join('').trim();
    };

    const getSetsOfFiveOrMoreAnagrams = () => {
        let results = {};
        let subObj = {};
        for (let i = 0; i < palavras.length; i++) {
            let anagramingCount = alphabetize(palavras[i]);
            if (subObj[anagramingCount] === undefined) {
                subObj[anagramingCount] = [];
            }
            subObj[anagramingCount].push(' ' + palavras[i]);
        }
        for (let key in subObj) {
            if (subObj[key].length == 2) {
                results[key] = subObj[key];
            }
        }
        return results;
    };
    showAnagrams(getSetsOfFiveOrMoreAnagrams());

    button.style.display = "none";

});
