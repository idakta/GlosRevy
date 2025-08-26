// found how to make a slideshow gallery on w3school: 
// https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
// and used a lot of their code to create our, with some small differences




var automaticIndex = 0;
automaticSlides();

function automaticSlides() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    automaticIndex++;
    if (automaticIndex > x.length) { automaticIndex = 1 }
    x[automaticIndex - 1].style.display = "block";
    setTimeout(automaticSlides, 5000); // Change image every 5 seconds
}


let slideIndex = 1;
showSlides(slideIndex);


// småbilder
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

