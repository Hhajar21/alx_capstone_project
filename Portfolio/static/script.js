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



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('http://localhost:5000/submit', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            // Optionally, you can reset the form here
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
