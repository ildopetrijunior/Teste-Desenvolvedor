const invertString = (string) => {
    let stringInvert = ""
    for (let index = string.length - 1; index >= 0; index--) {
        stringInvert += string[index];
    }
    return stringInvert
}

console.log(invertString("abcd"))