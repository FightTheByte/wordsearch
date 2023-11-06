import _ from 'lodash'; 

export function searchForMatch(index, columnPosition, word, direction, originalPuzzle, rowPosition, columns, rows){
  const ans = _.cloneDeep(originalPuzzle);
  let check = 1;
    for(let i of word.split('').slice(1, word.length)){
        ans[index] = '*';
        if(direction === 'down'){
          rowPosition++;
          if(rowPosition > rows )break;
        }
        if(direction === 'up'){
          rowPosition--;
          if(rowPosition < 0)break;
        }
        if(direction === 'right'){
          columnPosition++;
          if(columnPosition > columns)break;
        }
        if(direction === 'left'){
          columnPosition--;
          if(columnPosition < 0)break;
        }
        if(direction === 'topLeft'){
          rowPosition--;
          columnPosition--;
          if((rowPosition + 1) < 0 || columnPosition < 0)break;
        }
        if(direction === 'bottomRight'){
          rowPosition++;
          columnPosition++;
          if((rowPosition + 1) > rows || columnPosition > columns)break;
        }
        if(direction === 'topRight'){
          rowPosition--;
          columnPosition++;
          if((rowPosition + 1) < 0 || columnPosition > columns)break;
        }
        if(direction === 'bottomLeft'){
          rowPosition++;
          columnPosition--;
          if((rowPosition + 1) > rows  || columnPosition < 0)break;
        }
        if(i === originalPuzzle[(rowPosition * columns) + columnPosition]){
            check++;
            ans[(rowPosition * columns) + columnPosition] = '*';
            if(check === word.length){
              console.log()
              console.log('Word: ', word);
              console.log();
              for(let i = 0; i < ans.length; i+= columns){
                console.log(ans.slice(i, i + columns).join(' '));
        
              }
              return true;
          }
        } 
    }
    return false;
};