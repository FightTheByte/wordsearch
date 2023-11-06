import { searchForMatch } from "./searchForMatch.js";

let puzzle = 
  [
    'a', 'a', 't', 'p', 'h', 's', 't', 
    'n', 'n', 'a', 't', 'h', 'c', 'r', 
    't', 'd', 'c', 'a', 's', 'a', 'w', 
    'o', 's', 'o', 'h', 'q', 'g', 'r', 
    'w', 't', 's', 'w', 'o', 'w', 'y', 
    'f', 'h', 's', 'j', 'l', 'r', 'c'
  ];
  
  let words = [
    'ant', 
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
      console.log(i)
        letterAlgo(i, columns, rows);
    }
  };
  
  function letterAlgo(word, columns, rows){
    puzzle.forEach((x, index) => {
      if(x === word[0]){
        console.log(x, index)
        sortIndices(index, word, columns, rows);
        return;
      }
    });
  };
  
  function sortIndices(index, word, columns, rows){
    let indexPosition = index/(columns);
    let key = index%(rows-1);
      //console.log(index%(columns), word, key)
      if(index/(columns+1) - word.length >= 0){
        let ans = searchForMatch(index, indexPosition, word, 'left', puzzle, key, rows);
        if(ans){
          return true;
        }
      }
      /*if((columns - index) - word.length >= 0){
        let ans = searchForMatch(index, word, 'right', puzzle, key);
        if(ans){
          return ans;
        }
      }
      if((key + 1) - (word.length) >= 0){
        let ans = searchForMatch(index, word, 'up', puzzle, key);
        if(ans){
          return ans;
        }
      } 
      if((key + 1) + word.length >= 0){
        let ans = searchForMatch(index, word, 'down', puzzle, key);
        if(ans){
          return ans;
        }
      } 

      if((index + 1) - word.length >= 0 && (key + 1) - word.length >= 0){
        let ans = searchForMatch(index, word, 'topLeft', puzzle, key);
        if(ans){
          return ans;
        }
      }
      
      if(word.length - (index + 1) >= 0 && (key + 1) - word.length >= 0){
        let ans = searchForMatch(index, word, 'topRight',  puzzle, key);
        if(ans){
          return ans;
        }
      }

      if(word.length - (index + 1) >= 0 && word.length - (key + 1) >= 0){
        let ans = searchForMatch(index, word, 'bottomRight',  puzzle, key);
        if(ans){
          return ans;
        }
      }

      if((index) - word.length >= 0 && word.length - (key + 1) >= 0){
        let ans = searchForMatch(index, word, 'bottomLeft',  puzzle, key);
        if(ans){
          return ans;
        }
      }    */  
  };
  
  search(words, 7, 6)

  /*let date = new Date().getMilliseconds();
  for(let i = 0; i < 101; i++){
    
  }
  console.log(date - new Date().getMilliseconds())*/
  
  