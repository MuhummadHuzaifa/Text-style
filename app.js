var input = document.getElementById('input');
var bold = document.getElementById('bold');
var italic = document.getElementById('italic');
var underline = document.getElementById('underline');
var fonts = document.getElementById('fs');
var fontf = document.getElementById('ff');
var textc = document.getElementById('tc');

var lc = document.getElementById('lc');
var uc = document.getElementById('uc');


bold.addEventListener('click' ,function(){
    input.style.fontWeight = 'bold'

    
})



italic.addEventListener('click' ,function(){
    input.style.fontStyle = 'italic'
    
})



underline.addEventListener('click' ,function(){
    input.style.textDecoration = 'underline'
    
})



fonts.addEventListener('click' ,function(){
    input.style.fontSize = '30px';
    
})



fontf.addEventListener('click' ,function(){
    input.style.fontFamily = 'Arial, Helvetica, sans-serif'
    
})



textc.addEventListener('click' ,function(){
    input.style.color = 'blue'
    
})




uc.addEventListener('click' ,function(){
    input.style.textTransform = 'uppercase'
    
})



lc.addEventListener('click' ,function(){
    input.style.textTransform = 'lowercase'
    
})