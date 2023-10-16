var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
 

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
 }
 function openmenu() {
    var nav = document.querySelector('nav');
    var sidemenu = nav.querySelector('#sidemenu');
    sidemenu.style.right = "0";
}

function closemenu() {
    var nav = document.querySelector('nav');
    var sidemenu = nav.querySelector('#sidemenu');
    sidemenu.style.right = "-200px";
}


/**  
 * conect the sheet whith the code

*/
document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyL-s4FtL9nBwdr2aMMrpGFapURzylIq8Yx2qQAzHb_mU84d9N3pc6242mfnlXt-wV_/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    });
});
