import { searchForMatch } from "./searchForMatch.js";
  
let puzzle = 
  [
    'a', 'a', 't', 'p', 'h', 'o', 'n', 'e', 'a',
    'y', 'n', 'a', 't', 'h', 'c', 'r', 'i', 'o',
    't', 't', 'c', 'a', 's', 'a', 'w', 'w', 'f',
    'o', 's', 'o', 'h', 'q', 'g', 'r', 'e', 'b',
    'e', 't', 'o', 'w', 'o', 'w', 'y', 'o', 's',
    'f', 'h', 's', 'j', 'l', 'r', 'c', 'g', 'h',
  ];


let words = [
  'ants', 
  'to', 
  'so', 
  'hat', 
  'tap', 
  'towl', 
  'pat', 
  'tow', 
  'pharoh',
  'phone',
  'anchor',
  'tacos'
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
        console.log(word)
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
      if((columnPosition + 1) - word.length >= 0 && (rowPosition + 1) - word.length >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'topLeft', puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }
      if(word.length - (columnPosition + 1) >= 0 && (rowPosition + 1) - word.length >= 0){
        let ans = searchForMatch(index, columnPosition, word, 'topRight',  puzzle, rowPosition, columns, rows);
        if(ans){
          return ans;
        }
      }

      if(word.length - (columnPosition + 1) >= 0 && word.length - (rowPosition + 1) >= 0){
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
  search(words, 9, 6);

  /*let date = new Date().getMilliseconds();
  for(let i = 0; i < 101; i++){
    search(words, 9, 6);
  }
  console.log(date - new Date().getMilliseconds())
  */
  