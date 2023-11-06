import { searchForMatch } from "./searchForMatch.js";
import { words } from './words.js';
import { puzzle } from "./puzzle.js"; 


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
      if((columnPosition + 1) - word.length > -1){
        let ans = searchForMatch(index, columnPosition, word, 'left', puzzle, rowPosition, columns, rows);
        if(ans){
          return true;
        }
      }
      if((columnPosition + 1) + word.length <= rows){
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

  //search(words, 16, 17);

  let time = new Date().getTime();
  for(let i = 0; i < 1; i++){
    search(words, 16, 17);
  }
  console.log('solved in ' + (new Date().getTime() - time) + 'ms')
  
  