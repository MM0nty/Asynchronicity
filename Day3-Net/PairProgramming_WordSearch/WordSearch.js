// With @denizedaza
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    const vjoin = [];
    for (let i = 0; i < letters[0].length; i++) {
        vjoin.push([]);
        for (let j = 0; j < letters.length; j++) {
            vjoin[i].push(letters[j][i]);
        }
    }
    const verticalJoin = vjoin.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word)) {
            return true
        }
    }
    return false
}


module.exports = wordSearch