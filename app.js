const body = document.querySelector('body');
const textArea = document.querySelector('textarea');
const submitBtn = document.querySelector('#textSubmit');
const textC = document.querySelector('textarea');
const noteDisplay = document.querySelector('#noteDisplay');

//Button text for added notes
const btnText = ['View', 'Delete'];

submitBtn.addEventListener('click', function(){
    addNote();
    textC.value = "";
})

//Function to add a new note
addNote = () => {
    const newDiv = document.createElement('div');
    const pNote = document.createElement('p');
    for(let i = 0; i <= 1; i++){
        const button = document.createElement('button');
        button.textContent = btnText[i];
        newDiv.append(button);
    }
    pNote.textContent = textC.value;
    newDiv.append(pNote);
    noteDisplay.append(newDiv);
}

//Remove note
noteDisplay.addEventListener('click', function(e){
    if(e.target.textContent === 'Delete'){
        e.target.parentNode.remove();
    } else if(e.target.textContent === 'View') {
        body.classList.toggle('modal'); 
        textArea.classList.toggle('textRmv');
        body.style.display = "block";
        e.target.parentNode.classList.toggle('test');
    } 
});