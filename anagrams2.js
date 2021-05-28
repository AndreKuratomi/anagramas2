const testButton = window.document.getElementById("testCamp");

const button = window.document.createElement('button');
button.classList = 'startMachine';
button.id = 'showBegin';
button.innerText = 'Buscar anagramas com 5 ou mais palavras!'
testButton.appendChild(button);

const buttonItself = window.document.getElementById("showBegin");

buttonItself.addEventListener('click', function () {
    
    // const showAnagrams = results => {
    //     const show = window.document.getElementById('testCamp');
    //     const div = window.document.createElement('div');
    //     div.innerText = results;
    //     div.classList = 'title';
    //     show.appendChild(div);
    //     // console.log(results)
    // };
    
    const showAnagrams = results => {
        const show = window.document.getElementById('testCamp');
        const div = window.document.createElement('div');
        div.classList = 'title';
        for (let anagrams in results) {
            console.log(anagrams)
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
            if (subObj[key].length >= 5) {
                results[key] = subObj[key];
            }
        }
        console.log(results);
        return results;
    };
    showAnagrams(getSetsOfFiveOrMoreAnagrams());

    button.style.display = "none";

});


// const palavrasObj = {};
// for (let i = 0; i < palavras.length; i++) {
//     let palavra = palavras[i];
//     if (palavrasObj[palavra] === undefined) {
//         palavrasObj[palavra] = palavra;
//     }
// }
// É que este objeto deveria selecionar e armazenar pela primeira letra. ou seja, chave A,valor 'palavras com a no começo'

// const getSetsOfFiveOrMoreAnagrams = () => {
//     let results = {};
//     for (let i = 0; i < palavras.length; i++) {
//         let array = [];
//         let anagramingCount = alphabetize(palavras[i]);
//         array.push(palavras[i]);
//         for (let j = 0; j < palavras.length; j++) {
//             let anagramingPalavras = alphabetize(palavras[j])
//             if (anagramingCount === anagramingPalavras) {
//                 array.push(' ' + palavras[j]);
//             }
//         }
//         console.log(array)
//     }
//     return results;
// };