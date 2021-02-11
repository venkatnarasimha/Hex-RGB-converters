/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-console */
function HexToRgb(hex) {
    const red = parseInt(hex[0] + hex[1], 16);
    const green = parseInt(hex[2] + hex[3], 16);
    const blue = parseInt(hex[4] + hex[5], 16);
    return [red, green, blue];
}
const hexval = document.querySelector('.hexvalue');
const redval = document.querySelector('.red');
const blueval = document.querySelector('.blue');
const greenval = document.querySelector('.green');
const button = document.querySelector('.but');
const rgbval = document.querySelector('.rgbvalue');
const results = document.querySelector('.result');
const copybut = document.querySelector('.copy');


button.addEventListener('click', () => {
    const str2 = `${hexval.value}`;
    if (str2.length >= 7) alert('Length should be lessthan 6 digits');
    const output = HexToRgb(hexval.value);
    const str = `RGB(${output[0]}, ${output[1]}, ${output[2]})`;
    [redval.value, greenval.value, blueval.value] = output;
    rgbval.value = str;
});

hexval.addEventListener('input',()=>{
    let col='#'+hexval.value;
    console.log(col+"ddd");
    results.style.backgroundColor=col;
})
copybut.addEventListener('click', () => {
    const copy = document.querySelector('.rgbvalue');
    console.log('clicked:', copy);
    copy.focus();
    copy.select();
    document.execCommand('copy');
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log(`Copying text command was ${msg}`);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
});
