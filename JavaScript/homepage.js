// reused the code I learned from w3school:
// https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
// and looked at their different image tutorials for inspiration and help
// to create a smaller, slightly different slideshow

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function addSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function thisSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("vikdat");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
