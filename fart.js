const DOMSelectors = {
    form: document.querySelector('#form-first'),
    postit: document.querySelector('.post-it'),
    flexblox: document.querySelector('.flexblox'),
    posttext: document.querySelector('.post-text'),
    input1: document.getElementById('input-1')  
}

console.log(DOMSelectors.input1)
console.log( DOMSelectors.flexblox)
DOMSelectors.form.addEventListener('submit', function(event){
    event.preventDefault();
    DOMSelectors.posttext.insertAdjacentHTML(DOMSelectors.postit, DOMSelectors.input1.value)
    //insert adjacent html
});