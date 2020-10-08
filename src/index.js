const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function memory (str) {
    if (/^[*]{10}$/.test(str)) return ' ';
    let i = str.replace(/10/g,'.').replace(/11/g,'-').replace(/0/g, '');
    return MORSE_TABLE[i];
  }
  function decode(expr) {
    let decode = '';
    for (let i = 0; i < expr.length; i += 10) {
        decode += memory(expr.substring(i, i + 10));
    }
    return decode;
  }

module.exports = {
    decode
}

                                // MORSE Coder //
// function decode(expr) {
//     let result = new Array
//     for (let j = 0; j < expr.length; j++) {
//         let root = ['00', '00', '00', '00', '00']
//         function getKeyByValue(object, value) {
//             return Object.keys(object).find(key => object[key] === value);
//         }
//         if (getKeyByValue(MORSE_TABLE, expr[j]) == undefined) {
//             root = ['**********']
//             result.push(root);
//         } else {
//             for (let i = 0; i < getKeyByValue(MORSE_TABLE, expr[j]).length; i++) {
//                 if ((getKeyByValue(MORSE_TABLE, expr[j])[i]) === '-') {
//                     root.push('11')
//                     root.shift()
//                 } else if ((getKeyByValue(MORSE_TABLE, expr[j])[i]) === '.') {
//                     root.push('10')
//                     root.shift()
//                 };
//             }
//             result.push(root.join(''))
//         }
//     }
//     return result.join('')
// }
// console.log(decode('rolling scope school'))
