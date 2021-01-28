const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const alphabets = ['A', 'B', 'C', 'E', 'F'];

function generateColor(){
    let hexcode = '';
    for (let i = 0; i < 6; i++){

        if (Math.floor(Math.random()*2) + 1 == 1){
            let num = Math.floor(Math.random()*10);
            hexcode += String(numbers[num]);
        }else{
            let num = Math.floor(Math.random()*5);
            hexcode += String(alphabets[num]);
        }
        
    }

    return hexcode;
}

function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }

const hextext = document.querySelector('.color');
const text = document.querySelector('.word');

const body = document.querySelector('body');

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    hexcode = `#${generateColor()}`
    hextext.innerHTML = hexcode;
    body.style.background = hexcode;
    hextext.style.background = hexcode;
    text.style.background = hexcode;
    copyStringToClipboard(hexcode);
});

