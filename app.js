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


const hextext = document.querySelector('.color');

const body = document.querySelector('body');

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    hexcode = `#${generateColor()}`
    hextext.innerHTML = hexcode;
    body.style.background = hexcode;
    hextext.style.color = hexcode;
    btn.style.color = hexcode;
});

btn.addEventListener('onmouseout', (e) => {
    btn.style.color = '#000'
})

