let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize and add the map
function initMap() {
    // The location of a default place
    const defaultLocation = { lat: -25.344, lng: 131.036 };
    // The map, centered at the default location
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 4,
        center: defaultLocation,
    });
    // The marker, positioned at the default location
    const marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
    });
}
