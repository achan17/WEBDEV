function loadHandler() {
    let star1Radio = document.getElementById('star1');
    star1Radio.style.display='none';
    let star2Radio = document.getElementById('star2');
    star2Radio.style.display='none';
    let star3Radio = document.getElementById('star3');
    star3Radio.style.display='none';
    let star4Radio = document.getElementById('star4');
    star4Radio.style.display='none';
    let star5Radio = document.getElementById('star5');
    star5Radio.style.display='none';
    let subBtn = document.querySelector('button');
    subBtn.style.display='none';


    let star1Label = document.getElementById('star1Label');
    star1Label.innerHTML = `&starf;`;
    let star2Label = document.getElementById('star2Label');
    star2Label.innerHTML = `&starf;`;
    let star3Label = document.getElementById('star3Label');
    star3Label.innerHTML = `&starf;`;
    let star4Label = document.getElementById('star4Label');
    star4Label.innerHTML = `&starf;`;
    let star5Label = document.getElementById('star5Label');
    star5Label.innerHTML = `&starf;`;

    star1Label.addEventListener('mouseover', hover1Star);
    star2Label.addEventListener('mouseover', hover2Star);
    star3Label.addEventListener('mouseover', hover3Star);
    star4Label.addEventListener('mouseover', hover4Star);
    star5Label.addEventListener('mouseover', hover5Star);

    star1Label.addEventListener('click', submitForm);
    star2Label.addEventListener('click', submitForm);
    star3Label.addEventListener('click', submitForm);
    star4Label.addEventListener('click', submitForm);
    star5Label.addEventListener('click', submitForm);

}

function hover1Star() {
    let star1Radio = document.getElementById('star1');
    let star1Label = document.getElementById('star1Label');
    let docRoot = document.querySelector(':root');
    star1Label.style.color = getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star2Label = document.getElementById('star2Label');
    star2Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    let star3Label = document.getElementById('star3Label');
    star3Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    let star4Label = document.getElementById('star4Label');
    star4Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    let star5Label = document.getElementById('star5Label');
    star5Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    star1Radio.checked = true;
}

function hover2Star() {
    let star2Radio = document.getElementById('star2');
    let star1Label = document.getElementById('star1Label');
    let docRoot = document.querySelector(':root');
    star1Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star2Label = document.getElementById('star2Label');
    star2Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star3Label = document.getElementById('star3Label');
    star3Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    let star4Label = document.getElementById('star4Label');
    star4Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    let star5Label = document.getElementById('star5Label');
    star5Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    star2Radio.checked = true;
}

function hover3Star() {
    let star3Radio = document.getElementById('star3');
    let star1Label = document.getElementById('star1Label');
    let docRoot = document.querySelector(':root');
    star1Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star2Label = document.getElementById('star2Label');
    star2Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star3Label = document.getElementById('star3Label');
    star3Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star4Label = document.getElementById('star4Label');
    star4Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    let star5Label = document.getElementById('star5Label');
    star5Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    star3Radio.checked = true;
}

function hover4Star() {
    let star4Radio = document.getElementById('star4');
    let star1Label = document.getElementById('star1Label');
    let docRoot = document.querySelector(':root');
    star1Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star2Label = document.getElementById('star2Label');
    star2Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star3Label = document.getElementById('star3Label');
    star3Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star4Label = document.getElementById('star4Label');
    star4Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star5Label = document.getElementById('star5Label');
    star5Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-ignored');
    star4Radio.checked = true;
}

function hover5Star() {
    let star5Radio = document.getElementById('star5');
    let star1Label = document.getElementById('star1Label');
    let docRoot = document.querySelector(':root');
    star1Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star2Label = document.getElementById('star2Label');
    star2Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star3Label = document.getElementById('star3Label');
    star3Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star4Label = document.getElementById('star4Label');
    star4Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    let star5Label = document.getElementById('star5Label');
    star5Label.style.color= getComputedStyle(docRoot).getPropertyValue('--star-highlighted');
    star5Radio.checked = true;
}

async function submitForm() {
    event.preventDefault();
    let ratingForm = document.getElementById('rating');
    let submitter = document.querySelector('button');
    let formData = new FormData(ratingForm, submitter);

    /* let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://httpbin.org/post',);
    for([key, value] of formData) {
        xhr.setRequestHeader(key, value);
    }
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200) {
            console.log('Response: ' + xhr.response);
        }
    };

    xhr.send();
    */
   const response = await fetch('https://httpbin.org/post', {
    method: "POST",
    headers: {
        'X-Sent-By': 'Javascript'
    },
    body: formData,
   });
   console.log(await response.json());

let outputTag = document.querySelector('output');
    if(ratingForm.elements.rating.value / 5 < 0.8) {
        outputTag.textContent = 'Thank for your feeback of ' + ratingForm.elements.rating.value + 
        ' stars. We apologize for any inconvenience and will try to do better!';
    } 
    else {
        outputTag.textContent = 'Thanks for the ' + ratingForm.elements.rating.value + 
        ' star rating! :)';
    }
}

window.addEventListener('load', loadHandler);