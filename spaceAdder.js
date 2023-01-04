// sample script to add space between letters and add span tag replacing the letters


function spacer(word){
    const regex = / /gi
    return word
                .split('')
                .join(' ')
                .replace(regex, "</span><span>")
}

let word = "this is sparta"

console.log(spacer(word));

