let form_errors = [];

function loadHandler() {
    let darkBtn = document.getElementsByClassName('press')[0]; 
    let mode = document.getElementById('mode');
    if(localStorage.getItem('darkLight') === 'dark') {
        mode.className='dark';
    }
    else {
        mode.className='light';
    }
    darkBtn.addEventListener('click', btnPressed);

    let nameInput = document.getElementById('name');
    nameInput.addEventListener('input', nameValidity);
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('input', emailValidity);
    let commentInput = document.getElementById('comments');
    commentInput.addEventListener('input', commentValidity);
    commentInput.addEventListener('change', commentMisinput);
    

}

function btnPressed() {
    let darkBtn = document.getElementById('mode')
    if(localStorage.getItem('darkLight') === 'dark' ) {
        darkBtn.className='light';
        localStorage.setItem('darkLight', 'light');
    }
    else {
        darkBtn.className='dark';
        localStorage.setItem('darkLight', 'dark');
    }
}

function nameValidity() {
    let nameInput = document.getElementById('name');
    if(nameInput.validity.valueMissing) {
        nameInput.setCustomValidity('A name is required to be entered!');
    } else {
        nameInput.setCustomValidity('');
    }
}

function emailValidity() {
    let emailInput = document.getElementById('email');
    if(emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity('Please enter a valid email address :)');
    } else {
        emailInput.setCustomValidity('');
    }
}

function commentValidity() {
    let commentInput = document.getElementById('comments');
    if(commentInput.validity.tooShort) {
        commentInput.setCustomValidity('Please enter at least one more word into the comments, thank you :)');
    }
    else if(commentInput.validity.tooLong) {
        commentInput.setCustomValidity('Your comment is a little bit too lengthy, please try to shorten, thank you :)');
    }
    else {
        commentInput.setCustomValidity('');
    }
}

function hideAlert() {
    let errorAlert = document.getElementById('message');
    let errorMsg = document.getElementById('error_comments');
    errorAlert.style.setProperty('display', 'none');
    errorMsg.style.setProperty('display', 'inline');

}

function commentMisinput() {
    let commentInput = document.getElementById('comments');
    let errorMsg = document.getElementById('error_comments');
    let infoMsg = document.getElementById('info_comments');
    let errorAlert = document.getElementById('message');
    let emojiRegex = /\p{Extended_Pictographic}/u;
    if(emojiRegex.test(commentInput.value)){
        commentInput.className='incorrect';
        commentInput.setCustomValidity('Unfortunately emojis are not allowed in the comments sorry');
        errorMsg.style.setProperty('display', 'none');
        errorMsg.innerText=('Unfortunately emojis are not allowed in the comments sorry');
        errorAlert.innerText=('Unfortunately emojis are not allowed in the comments sorry');
        errorAlert.style.setProperty('display', 'block');
        setTimeout(hideAlert, 3000);

    }
    else {
        commentInput.className='correct';
        errorMsg.innerText='';       
    }
    if(280 - commentInput.textLength <= 50){
        infoMsg.innerText = ('You are soon reaching the character limit, characters left: ' + (280 - commentInput.textLength));
    }
    else {
        infoMsg.innerText = '';
    }
}

window.addEventListener("load", loadHandler);