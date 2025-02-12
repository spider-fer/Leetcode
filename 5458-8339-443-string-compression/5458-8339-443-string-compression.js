/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    numChars= chars.length;
    let write = 0;
    let read = 0;
    
    while(read < numChars){
        let char = chars[read];
        let count = 0;

        while(read < numChars && chars[read] === char){
            count++;
            read++;
        }
        
        chars[write] = char;
        write++;
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};