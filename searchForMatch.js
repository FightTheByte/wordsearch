import _ from 'lodash'; 

export function searchForMatch(index, indexPosition, word, direction, originalPuzzle, key, rows){
  const ans = _.cloneDeep(originalPuzzle);
  let check = 1;
    for(let i of word.split('').slice(1, word.length)){
        ans[index] = '*';
        if(direction === 'down'){
          key++;
          if(key > originalPuzzle.length - 1)break;
    /*  }
      if(direction === 'up'){
          key--;
          if(key < 0)break;
      }
      if(direction === 'right'){
          indexPosition++;
          if(indexPosition > 8){break};
      }*/
      if(direction === 'left'){
          indexPosition--;
      
          if(indexPosition < 0)break;
      }/*
      if(direction === 'topLeft'){
          key--;
          indexPosition--;
          if(key < 0 || indexPosition < 0)break;
      }
      if(direction === 'bottomRight'){
          key++;
          indexPosition++;
          if(key > rows || indexPosition > 8)break;
      }
      if(direction === 'topRight'){
          key--;
          indexPosition++;
          if(key < 0 || indexPosition > (columns-1))break;
      }
      if(direction === 'bottomLeft'){
          key++;
          indexPosition--;
          if(key > (rows - 1) || indexPosition < 0)break;
      */  }
      //console.log('i ', i, 'index ', index, ' indexPosition ', indexPosition, ' original ', originalPuzzle[index], 'key ', key)
      if(i === originalPuzzle[(key+1) * indexPosition]){
        
          check++;
          ans[(key+1) * indexPosition] = '*';
          if(check === word.length){
              console.log()
              console.log('Word: ', word);
              console.log()
            
              console.log(originalPuzzle)
              console.log()
              console.log(ans)
              
              return true;
          }
      } else {
          return false;
      }
    }
};