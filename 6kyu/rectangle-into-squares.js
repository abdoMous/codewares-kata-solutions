// https://www.codewars.com/kata/55466989aeecab5aac00003e/

function sqInRect(long, width){

    var arr =[]
    if(long !== width){
        while(long > 0 && width > 0){
            if(long > width){
              arr.push(width)
                long -= width;
            }else {
                arr.push(long)
                width -= long;
            }
        }
    }else{
        return null
    }
    return arr
}

var i = sqInRect(5, 3)
i