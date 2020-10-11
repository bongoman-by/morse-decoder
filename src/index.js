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
    '**'   :  ' ',
};

function decode(expr) {
  
        let result ='';
  
        let arr = expr.match(/(.{10})/gim).map(item => item === "**********" ? '**' : item);
        
        arr.forEach(elem => {

            result += MORSE_TABLE[elem.match(/(.{2})/gim).map(item => {
                if (item === "00") {
                    return '';
                } else if (item === "10") {
                    return '.';
                } else if (item === "11") {
                    return '-';
                } else {
                    return item;
                }
            }).join('')];
          

        });

        return result;
}

module.exports = {
    decode
};