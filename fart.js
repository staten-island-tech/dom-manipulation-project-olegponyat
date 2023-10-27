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
    console.log(DOMSelectors.input3.value)
    event.preventDefault();
    function randombgColor(){
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return randomColor
    }
    function addPostIt(){    
        DOMSelectors.flexblox.insertAdjacentHTML("beforeend", `<div class=post-it><div class=post-title id=topbox>${DOMSelectors.input1.value}<button class=remove></button></div><h2 class=post-text>${DOMSelectors.input2.value}</h2><img src=${DOMSelectors.input3.value} class=post-img></div>`)
        DOMSelectors.postit.style.bgColor = randombgColor();
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
