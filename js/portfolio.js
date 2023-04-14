// ****** PORTFOLIO SPORTS SLIDES ****** //
var slideSportIndex = 1;
showSportsSlides(slideSportIndex);
function openModal() {
    document.getElementById("portfolio-sports").style.display = "block";
}
function closeModal() {
    document.getElementById("portfolio-sports").style.display = "none";
}
function plusSportSlides(n) {
    showSportsSlides(slideSportIndex += n);
}
function currentSportSlide(n) {
    showSportsSlides(slideSportIndex = n);
}
function showSportsSlides(n) {
    var i = 0;
    var slides = document.getElementsByClassName("portfolio-sport");
    if (n > slides.length) {slideSportIndex = 1}
    if (n < 1) {slideSportIndex = 8}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideSportIndex-1].style.display = "block";
}

// ****** PORTFOLIO WEDDING SLIDES ****** //
var slideWeddingIndex = 1;
showWeddingsSlides(slideWeddingIndex);
function plusWeddingSlides(n) {
    showWeddingsSlides(slideWeddingIndex += n);
}
function currentWeddingSlide(n) {
    showWeddingsSlides(slideWeddingIndex = n);
}
function openWeddings() {
    document.getElementById("portfolio-weddings").style.display = "block";
}
function closeWeddings() {
    document.getElementById("portfolio-weddings").style.display = "none";
}
function showWeddingsSlides(n) {
    var i = 0;
    var slides = document.getElementsByClassName("portfolio-wedding");
    if (n > slides.length) {slideWeddingIndex = 1}
    if (n < 1) {slideWeddingIndex = 8}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideWeddingIndex-1].style.display = "block";
}

// ****** PORTFOLIO INTERIORS DESIGN SLIDES ****** //
var slideInteriorIndex = 1;
showInteriorsSlides(slideInteriorIndex);
function plusInteriorSlides(n) {
    showInteriorsSlides(slideInteriorIndex += n);
}
function currentInteriorSlide(n) {
    showInteriorsSlides(slideInteriorIndex = n);
}
function openInteriors() {
    document.getElementById("portfolio-interiors").style.display = "block";
}
function closeInteriors() {
    document.getElementById("portfolio-interiors").style.display = "none";
}
function showInteriorsSlides(n) {
    var i = 0;
    var slides = document.getElementsByClassName("portfolio-interior");
    if (n > slides.length) {slideInteriorIndex = 1}
    if (n < 1) {slideInteriorIndex = 8}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideInteriorIndex-1].style.display = "block";
}

// ****** PORTFOLIO TRAVELLING SLIDES ****** //
var slideTravelIndex = 1;
showTravelsSlides(slideTravelIndex);
function plusTravelSlides(n) {
    showTravelsSlides(slideTravelIndex += n);
}
function currentTravelSlide(n) {
    showTravelsSlides(slideTravelIndex = n);
}
function openTravels() {
    document.getElementById("portfolio-travels").style.display = "block";
}
function closeTravels() {
    document.getElementById("portfolio-travels").style.display = "none";
}
function showTravelsSlides(n) {
    var i = 0;
    var slides = document.getElementsByClassName("portfolio-travel");
    if (n > slides.length) {slideTravelIndex = 1}
    if (n < 1) {slideTravelIndex = 8}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideTravelIndex-1].style.display = "block";
}

// ****** RESPONSIVE SIDEBAR MENU ****** // 
var sideMenu = document.getElementById("sidemenu");
function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-160px";
}