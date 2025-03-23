 // Function to show the overlay with detailed information
 function showOverlay(restaurantName) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'; // Show the overlay

    // Update the content based on the restaurant name
    if (restaurantName === 'GABEL LOFFEL') {
        document.getElementById('detail-title').innerText = 'GABEL LOFFEL';
        document.getElementById('detail-name').innerText = 'GABEL LOFFEL';
        document.getElementById('detail-address').innerText = '235 GELNDALE AVE.';
        document.getElementById('detail-city').innerText = 'MERIDIEN CITY';
        document.getElementById('detail-phone').innerText = 'T: 490 49 400';
        document.getElementById('detail-website').innerText = 'W: GANDG.RES';
        document.getElementById('detail-category').innerText = 'CATEGORY: SWISS';
        document.getElementById('detail-hours').innerText = 'OPEN: 10AM - 10PM';
        document.getElementById('detail-price').innerText = 'PRICE: $120';
        document.getElementById('detail-image').src = 'food1.jpg';
    } else if (restaurantName === 'GARY GARI') {
        document.getElementById('detail-title').innerText = 'GARY GARI';
        document.getElementById('detail-name').innerText = 'GARY GARI';
        document.getElementById('detail-address').innerText = '76 NO. HIGHLAND AVE.';
        document.getElementById('detail-city').innerText = 'MERIDIEN CITY';
        document.getElementById('detail-phone').innerText = 'T: 490 24 6709';
        document.getElementById('detail-website').innerText = 'W: GANDG.RES';
        document.getElementById('detail-category').innerText = 'CATEGORY: JAPANESE';
        document.getElementById('detail-hours').innerText = 'OPEN: 5PM - 10PM';
        document.getElementById('detail-price').innerText = 'PRICE: $105';
        document.getElementById('detail-image').src = 'food2.jpg';
    } else if (restaurantName === 'IL PIATTO') {
        document.getElementById('detail-title').innerText = 'IL PIATTO';
        document.getElementById('detail-name').innerText = 'IL PIATTO';
        document.getElementById('detail-address').innerText = '1213 SHOUTOUT WAY';
        document.getElementById('detail-city').innerText = 'MERIDIEN CITY';
        document.getElementById('detail-phone').innerText = 'T: 490 42 1204';
        document.getElementById('detail-website').innerText = 'W: ILPIATTO.RES';
        document.getElementById('detail-category').innerText = 'CATEGORY: ITALIAN';
        document.getElementById('detail-hours').innerText = 'OPEN: 11AM - 11PM';
        document.getElementById('detail-price').innerText = 'PRICE: $99';
        document.getElementById('detail-image').src = 'food3.jpg';
    } else if (restaurantName === 'PIERRE PLATTERS') {
        document.getElementById('detail-title').innerText = 'PIERRE PLATTERS';
        document.getElementById('detail-name').innerText = 'PIERRE PLATTERS';
        document.getElementById('detail-address').innerText = '68 8TH AVE.';
        document.getElementById('detail-city').innerText = 'MERIDIEN CITY';
        document.getElementById('detail-phone').innerText = 'T: 490 69 3080';
        document.getElementById('detail-website').innerText = 'W: PIERREP.RES';
        document.getElementById('detail-category').innerText = 'CATEGORY: FUSHION';
        document.getElementById('detail-hours').innerText = 'OPEN: 11AM - 11PM';
        document.getElementById('detail-price').innerText = 'PRICE: $110';
        document.getElementById('detail-image').src = 'food4.jpg';
    }
}
 // Function to hide the overlay
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; 
}