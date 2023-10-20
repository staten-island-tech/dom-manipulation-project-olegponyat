const DOMSelectors = {
    form: document.querySelector('#form-first'),
    postit: document.querySelector('.post-it'),
    flexblox: document.querySelector('.flexblox'),
    posttitle: document.querySelector('.post-title'),
    posttext: document.querySelector('.post-text'),
    inputs: document.querySelectorAll('input'),
    button: document.querySelector('.remove')
}
console.log(DOMSelectors.button)
function addPostIt(){
    DOMSelectors.form.addEventListener('submit', function(event){
        event.preventDefault();
        DOMSelectors.flexblox.insertAdjacentHTML("afterbegin", "<div class=post-it></div>")
        
    });
}
function removePostIt(){
    DOMSelectors.button.addEventListener('click', function(event){
        event.preventDefault();
        DOMSelectors.postit.remove();
    })
}
addPostIt();
removePostIt();