//Scans for Unchecked and Checked...sets overlays accordingly
function toggleSet() {
    var toggleOn = document.getElementsByClassName('layerToggle');
    for (var i = 0; i < toggleOn.length; i++) {
        if (toggleOn[i].checked) {
            document.getElementById(toggleOn[i].id + 'Show').click();

        } else {
            document.getElementById(toggleOn[i].id + 'Hide').click();
        }
    };
};

//Scans for Unchecked and Checked...sets overlays accordingly
function radioSet() {
    var radioToggleOn = document.getElementsByClassName('radioToggle');
    var hideElems = document.getElementsByClassName("hidelink");
    for (var i = 0; i < hideElems.length; i++) { hideElems[i].click(); }
    for (var i = 0; i < radioToggleOn.length; i++) {
        if (radioToggleOn[i].checked) {
            document.getElementById(radioToggleOn[i].id + 'Show').click();
        }
    };
    toggleSet();
};

function radioToggleSet() {
    var radioToggleOn = document.getElementsByClassName('radioToggle');
    for (var i = 0; i < radioToggleOn.length; i++) {
        if (radioToggleOn[i].checked) {
            radioToggleOn[i].click();
        }
        radioSet();
    };
};
//Toggle Buttons Eventlistener class=layerToggle
var toggleClick = document.getElementsByClassName("layerToggle");

for (var i = 0; i < toggleClick.length; i++) {
    toggleClick[i].addEventListener('click', toggleSet, false);
};

//Radio Button Eventlistener class=radioToggle
var radioToggleClick = document.getElementsByClassName("radioToggle");

for (var i = 0; i < radioToggleClick.length; i++) {
    radioToggleClick[i].addEventListener('click', radioToggleSet, false);
};

//Carousel script
//simple carousel script
var slideIndex = 1;
var slideClass = document.getElementsByClassName('slideshow-container');
if (slideClass.length > 0) {
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    //Plus Carousel Eventlistern class=plusSlidesClass
    var plusSlidesClass = document.getElementsByClassName("plusSlidesClass");
    for (var i = 0; i < plusSlidesClass.length; i++) {
        plusSlidesClass[i].addEventListener('click', function () {
            plusSlides(1);
            changeOverlay();
        }, false);
    };
    //Minus Carousel Eventlistern class=minusSlidesClass
    var minusSlidesClass = document.getElementsByClassName("minusSlidesClass");
    for (var i = 0; i < minusSlidesClass.length; i++) {
        minusSlidesClass[i].addEventListener('click', function () {
            plusSlides(-1);
            changeOverlay();
        }, false);
    };
};
//End Carousel Functions
function changeOverlay() {
    var LinkHide = document.getElementsByClassName('hidelink');
    for (var i = 0; i < LinkHide.length; i++) {
        document.getElementById(LinkHide[i].click())
    };
    var mySlidesBlock = document.getElementsByClassName('mySlides');
    for (var n = 0; n < mySlidesBlock.length; n++) {
        display = mySlidesBlock[n].style.display;
        if (display == 'block') {
            var overlayClick = mySlidesBlock[n].getAttribute('value');
            if (overlayClick == "300") {
                document.getElementById("300Show").click();
                document.getElementById("GlossopterisPaleoLocationShow").click();
                document.getElementById("MesosaurusPaleoLocationShow").click();
            }
            if (overlayClick == "275") {
                document.getElementById("275Show").click();
                document.getElementById("GlossopterisPaleoLocationShow").click();
                document.getElementById("MesosaurusPaleoLocationShow").click();
            }
            if (overlayClick == "250") {
                document.getElementById("250Show").click();
                document.getElementById("CynognathusPaleoLocationShow").click();
                document.getElementById("LystrosaurusPaleoLocationShow").click();
            }
            if (overlayClick == "220") {
                document.getElementById("220Show").click();
                document.getElementById("CynognathusPaleoLocationShow").click();
                document.getElementById("LystrosaurusPaleoLocationShow").click();
            }
            if (overlayClick == "200") {
                document.getElementById("200Show").click();
            }
            if (overlayClick == "175") {
                document.getElementById("175Show").click();
            }
            if (overlayClick == "150") {
                document.getElementById("150Show").click();
            }
            if (overlayClick == "125") {
                document.getElementById("125Show").click();
            }
            if (overlayClick == "100") {
                document.getElementById("100Show").click();
            }
            if (overlayClick == "075") {
                document.getElementById("075Show").click();
            }
            if (overlayClick == "050") {
                document.getElementById("050Show").click();
            }
            if (overlayClick == "025") {
                document.getElementById("025Show").click();
            }
            if (overlayClick == "000") {
                document.getElementById("000Show").click();
                document.getElementById("GlossopterisLocationShow").click();
                document.getElementById("MesosaurusLocationShow").click();
                document.getElementById("CynognathusLocationShow").click();
                document.getElementById("LystrosaurusLocationShow").click();
            }
        }
    };
};