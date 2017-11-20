// https://www.codewars.com/kata/mumbling

const accum =
    s => s.split("")
        .map(function numblChar(charactaire, times){
            return times === 0
                ? charactaire.toUpperCase()
                : numblChar(charactaire,times-1)+charactaire.toLowerCase();
        })
        .join("-")