const rgbToHex=(red,green,blue)=>'#'+[red,green,blue].map(x=>{
    x=parseInt(x);
    const hex=x.toString(16);
    return hex.length==1?`0${hex}`:hex;
}).join('');




const redtexts=document.querySelector('.red-texts');
const redslider=document.querySelector('.red-slider');
const greentexts=document.querySelector('.green-texts');
const greenslider=document.querySelector('.green-slider');
const bluetexts=document.querySelector('.blue-texts');
const blueslider=document.querySelector('.blue-slider');
const result=document.querySelector('.result');
const display=document.querySelector('.hexvalue');
const button=document.querySelector('.but');
const copybut=document.querySelector('.copy');
let red=0;
let green=0;
let blue=0;
let hexValue=0;
redslider.addEventListener('input', ()=>{
    red=redslider.value;
    redtexts.value=red;
    hexValue=rgbToHex(red,green,blue);
    console.log(hexValue);
    
});
redtexts.addEventListener('input',()=>{
    red=redtexts.value;
    redslider.value=redtexts.value;
    hexValue=rgbToHex(red,green,blue);
    console.log(hexValue);
})

greenslider.addEventListener('input', ()=>{
    green=greenslider.value;
    greentexts.value=green;
    hexValue=rgbToHex(red,green,blue);
});
greentexts.addEventListener('input',()=>{
    green=greentexts.value;
    greenslider.value=greentexts.value;
    hexValue=rgbToHex(red,green,blue);
});

blueslider.addEventListener('input', ()=>{
    blue=blueslider.value;
    bluetexts.value=blue;
    hexValue=rgbToHex(red,green,blue);
});
bluetexts.addEventListener('input',()=>{
    blue=bluetexts.value;
    blueslider.value=bluetexts.value;
    hexValue=rgbToHex(red,green,blue);

});
document.addEventListener('input',event=>{
    result.style.backgroundColor=hexValue;
});
button.addEventListener('click',()=>{
    
    display.value=hexValue;
});
copybut.addEventListener('click',()=>{
    const copy=document.querySelector('.hexvalue');
    console.log("clicked:",copy);
    copy.focus();
    copy.select();
    document.execCommand("copy");
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
})