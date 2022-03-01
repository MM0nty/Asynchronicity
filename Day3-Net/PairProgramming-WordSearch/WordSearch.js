const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
  
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    //define empty arrays
    let verticalArray = [];
    let verticalJoin = [];
    //add empty arrays to the larger empty array
    for (let k = 0; k < letters.length; k++) {
      verticalArray.push([]);
      verticalJoin.push([]);
    }
    //loop through all the letters in the letters array, add them to verticalArray as letters
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[0].length; j++) {
        verticalArray[j][i] = letters[i][j];
      }
      //join the letters in the verticalArray to create words.
      verticalJoin[i] = verticalArray[i].join('');
    }
    //check if word is in verticalJoin array
    for (let v of verticalJoin) {
      if (v.includes(word)) {
        return true;
      }
    }
    //returns false if word not found
    return false;
  };
  
  module.exports = wordSearch;