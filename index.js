let obj = {
    0: ['a' , 'a', 'l'],
    1: ['n', 'b', 'x'],
    2: ['t', 'a', 'c']
  };
  
  let words = ['ant','cat'];
  let place = 0;
  let locationArray = [];
  
  function search(words){
    let letterPosition = [];
    let wordRelation = 0;
    for(i in words){
        for(j in obj){
          letterPosition.push(algo(words[i], j));
        }
    }
    
    for(x in letterPosition){
      findWordsAlgo(letterPosition[x], x, words[wordRelation]);
      if((x + 1)%(Object.keys(obj).length) === 0){    
        //console.log(words[wordRelation]);
        wordRelation++;
        //console.log(answer);
        //answer = {};
      }
    }
  };
  
  function algo(words, position){
    let a = obj[position].reduce((acc, curr, index) => {
      if(curr === words[0][0]){
        acc.push(index);
      }
      return acc;
    }, []);
    return a;
  };
  
  function findWordsAlgo(arr, index, word){
    console.log(arr, index)
    for(i of arr){
      console.log(i);
      if(i != 0){
        searchForMatch(i, word, 'left');
      }
      if(i != 2){
        searchForMatch(i, word, 'right');
      }
      if((index + 1)%(Object.keys(obj).length) != 0){
        searchForMatch(i, word, 'up');
      }  
      if((index + 1)%(Object.keys(obj).length) != 2){
        searchForMatch(i, word, 'down');
      } 
      if((index + 1)%(Object.keys(obj).length) != 0 && i != 0){
        searchForMatch(i, word, 'topLeft');
      }
      if((index + 1)%(Object.keys(obj).length) != 0 && i != 2){
        searchForMatch(i, word, 'topRight');
      }
      if((index + 1)%(Object.keys(obj).length) != 2 && i != 2){
        searchForMatch(i, word, 'bottomRight');
      }
      if((index + 1)%(Object.keys(obj).length) != 2 && i != 0){
        searchForMatch(i, word, 'bottomLeft');
      }  
    }
  };
  
  function searchForMatch(){
  
  };
  
  search(words);
  
  