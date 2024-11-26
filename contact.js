let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

let paragraphs = [...document.querySelectorAll('p')];
let span =[];

paragraphs.forEach(paragraph => {
    let htmlString ='';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i< pArray.length; i++){
        htmlString += `<span>${pArray[i]}</span>`
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')]; 

function revealSpans(){
    for(let i = 0; spans.length; i++){
        if(spans [i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
            let {left, top} = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * .4);
            let opacityValue = 1- ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01)+ (left * 0.001)).toFixed(3);
            opacityValue = opacityValue >1 ? 1 : opacityValue.toFixed(3);
            spans[i].style.opacity = opacityValue;
        }
    }
}

window.addEventListener('scroll', () => {
    revealSpans()
})
revealSpans()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});