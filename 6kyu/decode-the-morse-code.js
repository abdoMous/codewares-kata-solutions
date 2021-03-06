// https://www.codewars.com/kata/decode-the-morse-code/

const charactaires = {
    // Letters
    ".-":"A", "-...":"B", "-.-.": "C", "-.." : "D", ".": "E", "..-.": "F", "--." : "G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L", "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R", "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X", "-.--":"Y", "--..":"Z",
    // Digits
    "-----": "0", ".----":"1", "..---":"2", "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7", "---..":"8", "----.":"9",
    // Special Letters
    ".-.-":"Ä", ".--.-":"Á", ".--.-":"Å", "----":"Ch", "..-..":"É", "--.--":"Ñ", "---.":"Ö", "..--":"Ü",
    // Prosigns
    ".-.-":"AA", ".-.-.":"AR", ".-...":"AS", "-...-.-":"BK", "-...-":"BT", "-.-..-..":"CL", "-.-.-":"CT", "-..---":"DO", "-.--.":"KN", "...-.-":"SK", "...-.":"SN", "...---...":"SOS",
    // Punctuation Marks
    "-.-.--":"!", ".-.-.-":".", "--..--":",", "---...":":", "..--..":"?", ".----.":"'", "-....-":"-", "-..-.":"/", "-.--.-":"[]", ".-..-.":"?", ".--.-.":"@", "-...-":"=",
};

decodeMorse = function(morseCode){
    return morseCode.trim()
        .split("   ")
        .map(word =>
            word.split(" ")
                .map(charactaire => charactaires[charactaire])
                .join("")
        )
        .join(" ");
}

var i = decodeMorse('.... . -.--   .--- ..- -.. .');
i