import _ from 'lodash'; 

export function searchForMatch(indexPosition, word, direction, originalPuzzle, key){
  const ans = _.cloneDeep(originalPuzzle);
  let check = 1;
    for(let i of word.split('').splice(1, word.length)){
      ans[key][indexPosition] = '*';
      if(direction === 'down'){
          key++;
          if(key > originalPuzzle.length - 1)break;
      }
      if(direction === 'up'){
          key--;
          if(key < 0)break;
      }
      if(direction === 'right'){
          indexPosition++;
          if(indexPosition > originalPuzzle[0].length - 1)break;
      }
      if(direction === 'left'){
          indexPosition--;
          if(indexPosition < 0)break;
      }
      if(direction === 'topLeft'){
          key--;
          indexPosition--;
          if(key < 0 || indexPosition < 0)break;
      }
      if(direction === 'bottomRight'){
          key++;
          indexPosition++;
          if(key > originalPuzzle.length - 1 || indexPosition > originalPuzzle[0].length)break;
      }
      if(direction === 'topRight'){
          key--;
          indexPosition++;
          if(key < 0 || indexPosition > originalPuzzle.length - 1)break;
      }
      if(direction === 'bottomLeft'){
          key++;
          indexPosition--;
          if(key > originalPuzzle.length - 1 || indexPosition < 0)break;
      }
      
      if(i === originalPuzzle[key][indexPosition]){
          check++;
          ans[key][indexPosition] = '*';
          if(check === word.length){
              console.log()
              console.log('Word: ', word);
              console.log()
              originalPuzzle.forEach(x => {
                console.log(x.join(' '));
              });
              console.log()
              ans.forEach(x => {
                console.log(x.join(' '));
              });
              return true;
          }
      } else {
          return false;
      }
    }
};