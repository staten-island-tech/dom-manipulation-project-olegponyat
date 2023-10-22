const DOMSelectors = {
    form: document.querySelector('#form-first'),
    postit: document.querySelectorAll('.post-it'),
    flexblox: document.querySelector('.flexblox'),
    posttitle: document.querySelector('.post-title'),
    posttext: document.querySelector('.post-text'),
    input1: document.querySelector('#input-1'),
    input2: document.querySelector('#input-2'),
    input3: document.querySelector('#input-3'),
}

DOMSelectors.form.addEventListener('submit', function(event){
    function addPostIt(){
        event.preventDefault();
        DOMSelectors.flexblox.insertAdjacentHTML("beforeend", "<div class=post-it><div class=post-title><button class=remove></button></div></div>")


        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.backgroundColor = randomColor
        console.log(randomColor)
    }
    function removePostIt(){
        const fart = document.querySelectorAll('.remove')
        fart.forEach(farts => {
        farts.addEventListener('click', function(e) {
            e.currentTarget.parentNode.parentNode.remove();
    })})}
    /* function clearInputFields(){
        DOMSelectors.input1.value = "";
        DOMSelectors.input2.value = "";
        DOMSelectors.input3.value = "";
    } */
    addPostIt();
    removePostIt();
    


});
