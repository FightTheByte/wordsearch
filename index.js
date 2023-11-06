import { searchForMatch } from "./searchForMatch.js";
  
let puzzle = 
  [
    'c', 'i', 's', 'l', 'e', 'f', 'o', 'l', 'i', 'a', 't', 'i', 'o', 'n', 's', 'd',
    'p', 'y', 'h', 'k', 'z', 't', 'm', 'g', 'h', 'o', 'i', 'o', 'b', 'n', 't', 'z',
    'e', 'j', 'u', 'b', 'n', 'a', 'i', 'r', 'b', 'm', 'a', 'c', 'o', 'p', 'y', 'f',
    'n', 's', 't', 'u', 'f', 'g', 'w', 'l', 'd', 'g', 'a', 'r', 'w', 't', 'o', 'l',
    'o', 'h', 'c', 'i', 't', 'd', 's', 'w', 'o', 'f', 'r', 'g', 'y', 'a', 'l', 'e',
    't', 'w', 'c', 'h', 'v', 'e', 'k', 'y', 'd', 'b', 't', 'h', 'm', 'c', 'e', 'r',
    's', 'k', 'r', 'r', 'i', 'g', 'k', 'r', 'm', 'v', 'i', 'f', 'i', 'a', 'w', 'c',
    'd', 'l', 'u', 'e', 'd', 's', 'b', 'a', 'r', 'u', 'u', 'h', 'r', 'u', 'i', 'i',
    'n', 'r', 'r', 'm', 'n', 'b', 't', 't', 'u', 'i', 'p', 'g', 'p', 'g', 's', 'h',
    'a', 't', 'a', 'd', 's', 'i', 'h', 'n', 'j', 'r', 'z', 'y', 'r', 'm', 'i', 'p',
    's', 'k', 'b', 'p', 'c', 't', 'o', 'e', 'o', 'r', 't', 'u', 'e', 's', 'a', 'r',
    'g', 'n', 'e', 'i', 's', 's', 't', 'm', 'o', 'o', 'r', 'r', 't', 'e', 'n', 'o', 
    't', 'j', 'n', 'u', 'c', 'd', 'a', 'i', 'r', 'v', 'a', 'l', 'r', 'u', 'm', 'm',
    'p', 'e', 'r', 'w', 'b', 't', 'l', 'd', 'e', 'f', 'u', 'h', 'a', 'h', 'r', 'a',
    'r', 'h', 't', 'b', 'e', 'b', 'q', 'e', 'y', 'a', 'q', 'g', 'c', 'c', 'r', 't',
    't', 'q', 'w', 'm', 'e', 't', 'r', 's', 'f', 'y', 'j', 'v', 'd', 'r', 'i', 'e',
    'k', 'g', 'j', 'e', 'n', 'n', 'a', 'e', 't', 'i', 't', 'a', 'm', 'g', 'i', 'm',
  ];


let words = [
  'amphibolite', 
  'cambrian', 
  'dyke', 
  'faults', 
  'feldspar', 
  'felsic', 
  'foliation', 
  'gneiss', 
  'lewisian',
  'mafic',
  'magma',
  'metamorphic',
  'mica',
  'migmatite',
  'moine',
  'quartz',
  'sandstone',
  'schist',
  'sedimentary',
  'thrust'
];


  function search(words, columns, rows){
    for(let i of words){
        letterAlgo(i, columns, rows);
    }
  };
  
  function letterAlgo(word, columns, rows){
    puzzle.forEach((x, index) => {
      if(x === word[0]){
        sortIndices(index, word, columns, rows);
        return;
      } else {
        return;
      }
    });
  };
  
  function sortIndices(index, word, columns, rows){
    let columnPosition = index%columns;
    let rowPosition =  Math.floor(index / columns);
      if(columnPosition - word.length >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'left', puzzle, rowPosition, columns, rows);
        if(ans){
          return true;
        }
      }
      if(columnPosition + word.length <= rows){

        let ans = searchForMatch(index, columnPosition, word, 'right', puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }
      if((rowPosition + 1) - (word.length) >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'up', puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      } 
      if(((rowPosition + 1) + word.length) <= rows){
        let ans = searchForMatch(index, columnPosition, word, 'down', puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      } 
      if((columnPosition) - word.length >= 0 && (rowPosition + 1) - word.length >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'topLeft', puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }
      if((columnPosition) + word.length <= columns && (rowPosition + 1) - word.length >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'topRight',  puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }

      if(word.length - (columnPosition) >= 0 && word.length - (rowPosition + 1) >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'bottomRight',  puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }

      if((columnPosition) - word.length >= 0 && word.length - (rowPosition + 1) >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'bottomLeft',  puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }    
  };
  
  //words to find, columns, rows
  search(words, 16, 17);

  /*let date = new Date().getMilliseconds();
  for(let i = 0; i < 101; i++){
    search(words, 9, 6);
  }
  console.log(date - new Date().getMilliseconds())
  */
  