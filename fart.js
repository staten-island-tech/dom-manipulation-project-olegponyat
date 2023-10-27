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
        console.log(R,G,B)
        return { R, G, B };
    }
    randombgColor();
    function changeBackground(colorObject, card){
        document.body.style.backgroundColor = `rgba(${colorObject.R}, ${colorObject.G}, ${colorObject.B}, .1)`
    }
    function addPostIt(){    
        DOMSelectors.flexblox.insertAdjacentHTML("beforeend", `<div class=post-it><div class=post-title id=topbox>${DOMSelectors.input1.value}<button class=remove></button></div><h2 class=post-text>${DOMSelectors.input2.value}</h2><img src=${DOMSelectors.input3.value} class=post-img></div>`)
        const grabCards = document.querySelectorAll('.post-it')
        changeBackground(randombgColor(),grabCards[0]);
        console.log(grabCards[0]);
        //grab all cards cards[0] nodelist of cards
        //array of cards, get first or last card and change background color
        //changebackground color(array[leng -1])
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
