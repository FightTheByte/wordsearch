import _ from 'lodash'; 

export function searchForMatch(indexPosition, word, direction, words, key, originalPuzzle){
  //console.log(key, indexPosition, words, direction)
  //console.log('attempts', word)
  const ansRefresh = _.cloneDeep(originalPuzzle);
  if(direction === 'down'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key++;
        if(key > Object.keys(originalPuzzle).length - 1)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'up'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key--;
        if(key < 0)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'right'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        indexPosition++;
        if(indexPosition > originalPuzzle[0].length - 1)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'left'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key--;
        if(key < 0)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'topLeft'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key--;
        if(key < 0)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'bottomRight'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key--;
        if(key < 0)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'topLeft'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key--;
        if(key < 0)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
  if(direction === 'bottomLeft'){
    let check = 1;
    for(let i of word.split('').splice(1, word.length)){
        ansRefresh[key][indexPosition] = '*';
        key--;
        if(key < 0)break;
        if(i === words[key][indexPosition]){
            check++;
            ansRefresh[key][indexPosition] = '*';
            if(check === word.length){
              console.log(word);
              console.log(originalPuzzle);
              console.log(ansRefresh);
              return true;
          }
        }
    }
    return false;
  }
};