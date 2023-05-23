function getFirstUniqueChar(str) {

    if(!str.trim()) {
        return 'Empty string';
    }

    let matchedChars = [];
    let chars = str.split('');

    for(let i = 0; i<chars.length; i++) {
        for(let j=i+1; j<chars.length; j++) {
            if(chars[i] == chars[j]) {
                matchedChars.push(chars[i]);
            }
        }
    }

    for(let i = 0; i<chars.length; i++) {
        if(!matchedChars.includes(chars[i])) {
            return chars[i];
        }
    }

    return 'There are no unique values';
}

getFirstUniqueChar('abczyzabcgh');
