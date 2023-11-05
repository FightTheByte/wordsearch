import { searchForMatch } from "./searchForMatch.js";

let puzzle = [
    ['a', 'a', 't', 'p', 'h', 'o', 'n', 'e', 'a'],
    ['y', 'n', 'a', 't', 'h', 'c', 'r', 'i', 'o'],
    ['t', 't', 'c', 'a', 's', 'a', 'w', 'w', 'f'],
    ['o', 's', 'o', 'h', 'q', 'g', 'r', 'e', 'b'],
    ['e', 't', 'o', 'w', 'o', 'w', 'y', 'o', 's'],
    ['f', 'h', 's', 'j', 'l', 'r', 'c', 'g', 'h']
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
    'tacoos'
  ];
  
  function search(words){
    let letterPosition = [];
    for(let i in words){
        for(let j in puzzle){
          letterPosition.push(letterAlgo(words[i], j));
        }
    }
    try{
      searchForWords(letterPosition);
    } catch(e) {
      console.log('check the puzzle and words are correctly typed')
    }
      
  };

  function searchForWords(letterPosition, wordRelation = 0){
    for(let x = 0; x < words.length; x++){
      let ans = sortIndices(letterPosition[x], x, words[wordRelation]);
      if(ans){
        if(words[wordRelation] === words[words.length-1])return;
        letterPosition = letterPosition.slice(puzzle.length, letterPosition.length + 1);
        wordRelation++;
        break;
      }
    }
    searchForWords(letterPosition, wordRelation);
  }
  
  function letterAlgo(words, position){
    let a = puzzle[position].reduce((acc, curr, index) => {
      if(curr === words[0][0]){
        acc.push(index);
      }
      return acc;
    }, []);
    return a;
  };
  
  function sortIndices(arr, index, word){
    let key = ((index)%(puzzle.length));
    for(let i of arr){
      if(i - word.length >= 0){
        let ans = searchForMatch(i, word, 'left', puzzle, key);
        if(ans){
          return ans;
        }
      }

      if((puzzle[0].length - i) - word.length >= 0){
        let ans = searchForMatch(i, word, 'right', puzzle, key);
        if(ans){
          return ans;
        }
      }
      
      if((index)%(puzzle.length) + 1 - (word.length) >= 0){
        let ans = searchForMatch(i, word, 'up', puzzle, key);
        if(ans){
          return ans;
        }
      }  
      
      if((puzzle.length - key) - word.length >= 0){
        let ans = searchForMatch(i, word, 'down', puzzle, key);
        if(ans){
          return ans;
        }
      } 

      if((i + 1) - word.length >= 0 && (key + 1) - word.length >= 0){
        let ans = searchForMatch(i, word, 'topLeft', puzzle, key);
        if(ans){
          return ans;
        }
      }
      
      if(word.length - (i + 1) >= 0 && (key + 1) - word.length >= 0){
        let ans = searchForMatch(i, word, 'topRight',  puzzle, key);
        if(ans){
          return ans;
        }
      }

      if(word.length - (i + 1) >= 0 && word.length - (key + 1) >= 0){
        let ans = searchForMatch(i, word, 'bottomRight',  puzzle, key);
        if(ans){
          return ans;
        }
      }

      if((i) - word.length >= 0 && word.length - (key + 1) >= 0){
        let ans = searchForMatch(i, word, 'bottomLeft',  puzzle, key);
        if(ans){
          return ans;
        }
      }  
    }
    
  };
  
  search(words)
  