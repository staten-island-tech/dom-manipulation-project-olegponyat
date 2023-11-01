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
        const A = Math.random()
        return { R, G, B, A };
    }
    function changeBackground(colorObject, card, posttitle, farting){
        const getColor = `rgba(${colorObject.R}, ${colorObject.G}, ${colorObject.B}, .4)`
        if (colorObject.R < 70, colorObject.G < 70, colorObject.B < 70){
            farting.style.color = 'white'
            posttitle.style.color = 'white'
        }
        else if (colorObject.R >= 70, colorObject.G >= 70, colorObject.B >= 70){
            farting.style.color = 'black'
            posttitle.style.color = 'black'
        };
        card.style.backgroundColor = getColor
        posttitle.style.backgroundColor = getColor
    }
    function addPostIt(){   
        DOMSelectors.flexblox.insertAdjacentHTML("beforeend", `<div class=post-it><div class=post-title id=topbox>${DOMSelectors.input1.value}<button class=remove></button></div><h2 class=post-text>${DOMSelectors.input2.value}</h2><img src=${DOMSelectors.input3.value} class=post-img></div>`)
        const innerSelectors = {
            grabCards: document.querySelectorAll('.post-it'),
            grabTitles: document.querySelectorAll('.post-title'),
            getText: document.querySelectorAll('.post-text'),
        }
        const getLength = {
            poopfart: innerSelectors.grabCards[innerSelectors.grabCards.length-1],
            fartpoop: innerSelectors.grabTitles[innerSelectors.grabTitles.length-1],
            poopyfart: innerSelectors.getText[innerSelectors.getText.length-1],
        }
        changeBackground(randombgColor(), getLength.poopfart, getLength.fartpoop, getLength.poopyfart)
    }
    function removePostIt(){
        const fart = document.querySelectorAll('.remove')
        fart.forEach(farts => {
            farts.addEventListener('click', function(e) {
                e.currentTarget.parentNode.parentNode.remove();
    })})}
    function clearInputFields(){
        //DOMSelectors.input1.value = "";
        // DOMSelectors.input2.value = "";
        DOMSelectors.input3.value = "";
    }
    addPostIt();
    removePostIt();
    clearInputFields();    
});