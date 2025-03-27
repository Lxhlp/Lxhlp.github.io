function showOverlay(restaurantName) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'; 

    if (restaurantName === 'YABU') {
        document.getElementById('detail-title').innerText = 'YABU';
        document.getElementById('detail-name').innerText = 'YABU';
        document.getElementById('detail-address').innerText = 'Robinsons Magnolia,';
        document.getElementById('detail-city').innerText = 'Quezon City';
        document.getElementById('detail-phone').innerText = 'T: 490 49 400';
        document.getElementById('detail-website').innerText = 'W: Katsu lovers';
        document.getElementById('detail-category').innerText = 'Category: Japanese Cuisine';
        document.getElementById('detail-hours').innerText = 'Open: 5PM - 10PM';
        document.getElementById('detail-price').innerText = 'Price: $100';
        document.getElementById('detail-image').src = 'food1.jpg';
        document.getElementById('detail-description1').innerText = "Experience the art of perfectly fried Katsu at Yabu. Known for their premium Kurobuta pork, meticulously breaded and fried to golden perfection, Yabu offers a unique Katsu experience.  Enjoy the interactive grinding of sesame seeds and their signature sauces for a truly memorable meal. A must-try for Katsu lovers!";
        document.getElementById('detail-description2').innerText = "Savor the crispy, juicy goodness of Yabu's Katsu! This popular restaurant specializes in premium Katsu sets, featuring expertly breaded and deep-fried pork, chicken, and seafood. Enjoy the traditional Japanese dining experience with their flavorful sauces and unlimited rice and miso soup. A satisfying and delicious meal awaits!";
    } else if (restaurantName === 'DIN TAI FUNG') {
        document.getElementById('detail-title').innerText = 'DIN TAI FUNG';
        document.getElementById('detail-name').innerText = 'DIN TAI FUNG';
        document.getElementById('detail-address').innerText = 'Rockwell Drive, Rockwell Center,';
        document.getElementById('detail-city').innerText = 'Makati City';
        document.getElementById('detail-phone').innerText = 'T: 490 24 6709';
        document.getElementById('detail-website').innerText = 'W: Taiwanese cuisine lovers';
        document.getElementById('detail-category').innerText = 'Category: Taiwanese Cuisine';
        document.getElementById('detail-hours').innerText = 'Open: 5PM - 10PM';
        document.getElementById('detail-price').innerText = 'Price: $105';
        document.getElementById('detail-image').src = 'food2.png';
        document.getElementById('detail-description1').innerText = "Experience the delicate artistry of Din Tai Fung's world-renowned Xiao Long Bao! This acclaimed restaurant is celebrated for its meticulously crafted dumplings, featuring paper-thin wrappers and flavorful, soupy fillings. Indulge in a range of classic Taiwanese dishes, from noodles to fried rice, all prepared with exceptional quality and precision. Enjoy an elegant dining atmosphere and impeccable service.";
        document.getElementById('detail-description2').innerText = "Din Tai Fung is a Michelin-starred restaurant that originated in Taiwan, and has since expanded to locations around the world. The restaurant's commitment to excellence and innovation has made it a favorite among food enthusiasts and critics alike.";
    } else if (restaurantName === 'TONG YANG') {
        document.getElementById('detail-title').innerText = 'TONG YANG';
        document.getElementById('detail-name').innerText = 'TONG YANG';
        document.getElementById('detail-address').innerText = 'SM Megamall,';
        document.getElementById('detail-city').innerText = 'Quezon City';
        document.getElementById('detail-phone').innerText = 'T: 490 42 1204';
        document.getElementById('detail-website').innerText = 'W: Buffet lovers';
        document.getElementById('detail-category').innerText = 'Category: Asian Fusion (Hotpot & Grill)';
        document.getElementById('detail-hours').innerText = 'Open: 11AM - 11PM';
        document.getElementById('detail-price').innerText = 'Price: $99';
        document.getElementById('detail-image').src = 'food3.jpg';
        document.getElementById('detail-description1').innerText = "Embark on a flavorful adventure at Tong Yang, where the thrill of cooking meets the delight of a bountiful buffet. Dive into a selection of premium meats, fresh seafood, and crisp vegetables, ready to be transformed into your ideal hotpot or grilled masterpiece. With a diverse range of sauces and broths, Tong Yang caters to every palate, promising a satisfying and communal dining experience.";
        document.getElementById('detail-description2').innerText = "Choose from a variety of meats, seafood, and vegetables, and cook them to your liking in bubbling hotpots or sizzling grills. With an array of flavorful broths, sauces, and sides, Tong Yang offers a fun and engaging dining experience perfect for gatherings with friends and family.";
    } else if (restaurantName === 'DOKKI') {
        document.getElementById('detail-title').innerText = 'DOKKI';
        document.getElementById('detail-name').innerText = 'DOKKI';
        document.getElementById('detail-address').innerText = 'SM City Fairview,';
        document.getElementById('detail-city').innerText = 'Metro Manila';
        document.getElementById('detail-phone').innerText = 'T: 490 69 3080';
        document.getElementById('detail-website').innerText = 'W: Korean food lovers';
        document.getElementById('detail-category').innerText = 'Category: Korean Tteokbokki Buffet';
        document.getElementById('detail-hours').innerText = 'Open: 11AM - 11PM';
        document.getElementById('detail-price').innerText = 'Price: $110';
        document.getElementById('detail-image').src = 'food4.jpg';
        document.getElementById('detail-description1').innerText = "Dive into a cauldron of deliciousness at Dokki, the ultimate destination for customizable tteokbokki! This vibrant buffet lets you unleash your inner chef, selecting from a colorful array of rice cakes, ramen noodles, and savory toppings. Craft your own signature sauce from their selection of Korean spices, and watch as your culinary creation bubbles to life. Dokki offers a lively and social dining experience, perfect for sharing with friends.";
        document.getElementById('detail-description2').innerText = "Experiment with their diverse range of sauces, from mild to fiery, and enjoy the communal experience of cooking your own Korean feast. Dokki provides a fun, casual atmosphere perfect for groups and food adventurers.";
    }
}

function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; 
}