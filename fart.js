const DOMSelectors = {
    form: document.querySelector('#form-first'),
    postit: document.querySelectorAll('.post-it'),
    flexblox: document.querySelector('.flexblox'),
    posttitle: document.querySelector('.post-title'),
    posttext: document.querySelector('.post-text'),
    input1: document.getElementById('input-1'),
    input2: document.getElementById('input-2'),
    input3: document.getElementById('input-3'),
}

DOMSelectors.form.addEventListener('submit', function(event){
    event.preventDefault();
    function randombgColor(){
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        
        return { R, G, B };
    }
    randombgColor();
    function changeBackground(colorObject, card, posttitle, farting){
        const getColor = `rgba(${colorObject.R}, ${colorObject.G}, ${colorObject.B}, .9)`
        if (colorObject.R < 0, colorObject.G < 0, colorObject.B < 80){
            farting.style.color = 'white'
            posttitle.style.color = 'white'
        }
        else{
            farting.style.color = 'black'
            posttitle.style.color = 'black'
        };
        card.style.backgroundColor = getColor
        posttitle.style.backgroundColor = getColor
        
    }
    function addPostIt(){   
        DOMSelectors.flexblox.insertAdjacentHTML("beforeend", `<div class=post-it><div class=post-title id=topbox>${DOMSelectors.input1.value}<button class=remove></button></div><h2 class=post-text>${DOMSelectors.input2.value}</h2><img src=${DOMSelectors.input3.value} class=post-img></div>`)
        const grabCards = document.querySelectorAll('.post-it')
        const grabTitles = document.querySelectorAll('.post-title')
        const getText = document.querySelectorAll('.post-text')
        const poopfart = grabCards[grabCards.length-1]
        const fartpoop = grabTitles[grabTitles.length-1]
        const poopyfart = getText[getText.length-1]
        changeBackground(randombgColor(),poopfart,fartpoop, poopyfart)
    }
    function removePostIt(){
        const fart = document.querySelectorAll('.remove')
        fart.forEach(farts => {
            farts.addEventListener('click', function(e) {
                e.currentTarget.parentNode.parentNode.remove();
    })})}
    function clearInputFields(){
        DOMSelectors.input1.value = "";
        DOMSelectors.input2.value = "";
        DOMSelectors.input3.value = "";
    }
    addPostIt();
    removePostIt();
    clearInputFields();    
});