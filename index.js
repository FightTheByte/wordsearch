import { searchForMatch } from "./searchForMatch.js";

let puzzle = {
    0: ['a' , 'a', 't', 'p'],
    1: ['y', 'n', 'a', 'l'],
    2: ['t', 't', 'c', 'o'],
    3: ['s', 's', 'o', 't']
};

  
  let words = ['ants','cat', 'lot', 'so'];
  let place = 0;
  let locationArray = [];
  
  function search(words){
    let letterPosition = [];
    for(let i in words){
        for(let j in puzzle){
          letterPosition.push(letterAlgo(words[i], j));
        }
    }
    console.log(letterPosition)
    searchForWords(letterPosition);
  };

  function searchForWords(letterPosition){
    let wordRelation = 0;
    for(let x = 0; x < letterPosition.length; x++){
      let ans = findWordsAlgo(letterPosition[x], x, words[wordRelation]);
      if(ans){
        letterPosition = [...letterPosition.slice((Object.keys(puzzle).length), letterPosition.length)];
        wordRelation++;
        searchForWords(letterPosition);
      }
      if((x + 1)%(Object.keys(puzzle).length) === 0){    
        wordRelation++;
      }
    }
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
  
  function findWordsAlgo(arr, index, word){
    let key = ((index)%(Object.keys(puzzle).length) + 1); 
    for(let i of arr){
      if(false){
        //console.log(index, (index)%(Object.keys(puzzle).length))
        searchForMatch(i, word, 'left', puzzle, (index)%(Object.keys(puzzle).length), puzzle);
      }

      if((puzzle[0].length - i) - word.length >= 0){
        console.log('right' , index, i)
        let ans = searchForMatch(
          i, 
          word, 
          'right', 
          puzzle, 
          (index)%(Object.keys(puzzle).length), 
          puzzle
        );
        if(ans){
          return ans;
        }
      }

      if((index)%(Object.keys(puzzle).length) + 1 - (word.length) >= 0){
        console.log('up')
        let ans = searchForMatch(
          i, 
          word, 
          'up', 
          puzzle, 
          (index)%(Object.keys(puzzle).length), 
          puzzle
        );
        if(ans){
          return ans;
        }
      }  
      
      if((4 - (key-1)) - word.length >= 0){
        //console.log('down', word, (4 - (relativeIndex-1)) - word.length)
        let ans = searchForMatch(
          i, 
          word, 
          'down', 
          puzzle, 
          (index)%(Object.keys(puzzle).length), 
          puzzle
        );
        if(ans)break;
      } 

      if(false/*(index + 1)%(Object.keys(puzzle).length) != 0 && i != 0*/){
        searchForMatch(i, word, 'topLeft', puzzle, (index)%(Object.keys(puzzle).length), puzzle);
      }

      if(false/*(index + 1)%(Object.keys(puzzle).length) != 0 && i != 2*/){
        searchForMatch(i, word, 'topRight', puzzle, (index)%(Object.keys(puzzle).length), puzzle);
      }

      if(false/*(index + 1)%(Object.keys(puzzle).length) != puzzle[0].length-1 && i != 2*/){
        searchForMatch(i, word, 'bottomRight', puzzle, (index)%(Object.keys(puzzle).length), puzzle);
      }

      if(false/*(index + 1)%(Object.keys(puzzle).length) != puzzle[0].length-1 && i != 0*/){
        searchForMatch(i, word, 'bottomLeft', puzzle, (index)%(Object.keys(puzzle).length), puzzle);
      }  
    }
    return false;
  };
  
  search(words);
  
  