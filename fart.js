const DOMSelectors = {
    form: document.querySelector('#form-first'),
    postit: document.querySelectorAll('.post-it'),
    flexblox: document.querySelector('.flexblox'),
    posttitle: document.querySelector('.post-title'),
    posttext: document.querySelector('.post-text'),
    input1: document.getElementById('input-1'),
    input2: document.getElementById('input-2'),
    input3: document.getElementById('input-3'),
    input4: document.getElementById('input-4')
}
DOMSelectors.form.addEventListener('submit', function(event){
    function addPostIt(){
        event.preventDefault();
        DOMSelectors.flexblox.insertAdjacentHTML("beforeend", `<div class=post-it><div class=post-title>${DOMSelectors.input1.value}<button class=remove></button></div><h2 class=post-desc>${DOMSelectors.input2.value}</h2></div>`)
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);


        newPostIt.style.backgroundColor = randomColor;
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
