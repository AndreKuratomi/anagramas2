// Implemente uma função chamada getSetsOfFiveAnagrams() que encontre e retorne todos os conjuntos de 5 ou 
// mais palavras em palavras.js que forem anagramas umas das outras, e imprima cada conjunto no DOM. 

// Sua função deve criar um novo elemento, definir seu conteúdo de texto igual ao resultado, e adicionar o 
// novo elemento ao seu html, antes de finalmente retornar um array de arrays aninhados, o que significa 
// que você deve terminar com um grande array que contém arrays menores contendo conjuntos de anagramas.


// m u f q pegue todos os anagramas >= 5 do array palavras.js. Ou seja, Montar um array de arrays em que cada
// array aninhado seja cada conjunto de 5 ou mais elementos.
// o desafio agora nõa é mais colocar uma palavra e retornar seus anagramas mas sim agora retornar todos os
// anagramas disponíveis >= a 5 elementos.

//Resultado para o usuário:
//criar um botão entitulado 'buscar anagramas com 5 ou mais palavras';

//enquanto processa mostrar um contador de min:seg:mils;
//if (contador > 01:00:00) {
//    display: block para p: 'Infelizmente estourou o tempo de processamento permitido. Programe de novo, fi!'
//}
// display: block para p: 'Tempo limite de processamento não excedido! Ei-los!';

//retornar um título 'Palavras com o anagrama 'LOREM': '
//seguido do array dos 5 ou mais elementos;
//(mas talvez seja melhor usar um objeto)

//COMO?
//tranformar o array palavras num objeto?
//bom, já que esta função não terá mais parâmetro, já que será preciso colocar todos os elementos do array 
//que obedeçam a condicional if (array[i][j].length >= 5) {...}, então o array(ou objeto?) terá que ser 
//percorrido e cada elemento terá que ser 'anagramizado' e logo em seguida serão buscadas as palavras que se
//encaixem neste anagrama.

//DO QUE PRECISAREMOS?
//montar uma função que mostre os resultados no HTML. (Esta funçaõ pode ser retornada como um objeto);

//adaptar as funções do anagramas1 neste para usar a função getSetsOfFiveAnagrams().

//de resto, estilize e monte as frases e use JSON.stringfy() para os arrays selecionados.