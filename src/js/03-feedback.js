import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onFormElSubmit);
textareaEl.addEventListener('input', throttle(onTextareaInput, 500));


 function onFormElSubmit(event){
event.preventDefault();
event.currentTarget.reset();
console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
localStorage.removeItem('feedback-form-state');
 };

function onTextareaInput(event){
    const mail = formEl.email.value;
        const message = formEl.message.value;
        const formData ={
            mail, 
            message,  }
localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

textareaDowload();
function textareaDowload(){
    const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(savedMessage){
        console.log(savedMessage);
        textareaEl.value = savedMessage.message;
        formEl.email.value = savedMessage.mail;
    }
};