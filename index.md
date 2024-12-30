<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golden Gate Pawz</title>
    <link rel="stylesheet" href="styles.css">
	
    
    </style>
</head>
<body>
    <script src="server/server.js"></script>
   
    
    <!-- Navigation Menu -->
    <header>
        <div class="logo">Golden Gate Pawz</div>
        <nav>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <li class="menu" id="menu">
                <ul><a href="index.html">Home</a></ul>
                <ul><a href="#about">About</a></ul>
                <ul><a href="#schedule">Schedule</a></ul>
                <ul><a href="#articles">Articles</a></ul>
                <ul><a href="#contact">Contact Us</a></ul>
                <ul><a href="signin.html">Sign In</a></ul>
            </li>
        </nav>
    </header>
    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
			<img class="logoimg" src="img/GGP_logo.PNG" width="200" height="230" alt="Golden Gate Pawz"/>
            <h1>Schedule a Time</h1>
            <p>Schedule a meet-and-greet with Gustavo, our main dog walker.</p>
            <a href="#schedule" class="button">Schedule</a>
        </div>
    </section>
	
	<!-- About Section -->
    <section id="about">
        <h2>About Golden Gate Pawz</h2>
        <div class="about-content">
			<img src="img/gustavo.jpg" alt="Gustavo the dog walker" width="400" height="300">
            <p>
                Welcome to Golden Gate Pawz, where your pet's happiness and well-being are our top priority! Located in the heart of San Francisco, we are passionate pet care professionals dedicated to treating your furry friends like family. With services ranging from daily walks to extended boarding, we create a safe, loving, and fun environment tailored to your pet's unique needs.
            </p>
            <p>
                Our team, led by Gustavo—a seasoned dog walker with over five years of experience—ensures every pet gets personalized care and attention. Whether it's a stroll through the city's scenic parks or a cozy boarding experience in our two-bedroom apartment, your pet will feel right at home.
            </p>
            <p>
                Ready to see the Golden Gate Pawz difference? Schedule a meet-and-greet today and discover why our clients trust us with their four-legged family members. Let’s create happy tails together!
            </p>
        </div>
    </section>



    <!-- Schedule Section -->
    <section id="schedule">
        <h2>Schedule a Meet & Greet</h2>
        <form id="scheduleForm">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>

            <label for="petname">Pet's Name</label>
            <input type="text" id="petname" name="petname" required>

            <label for="animal">Animal</label>
            <input type="text" id="animal" name="animal" required>

            <label for="breed">Breed</label>
            <input type="text" id="breed" name="breed">

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required>

            <label for="address">Address</label>
            <input type="text" id="address" name="address" required>

            <label for="meetplace">Best Place to Meet</label>
            <input type="text" id="meetplace" name="meetplace" required>

            <label for="date">Select a Date</label>
            <input type="date" id="date" name="date" required onchange="fetchAvailableTimes()">

            <label for="time">Select a Time</label>
            <select id="time" name="time" required>
				<option value="" select>3:30PM</option>
                <option value="" disabled selected>Select a time</option>
            </select>

            <button type="submit" class="button">Submit</button>
        </form>
    </section>

    <!-- Articles Section -->
    <section id="articles">
        <h2>Our Articles</h2>
        <p>Read our weekly blogs on pet care, training tips, and cute stories!</p>
        <div class="articles-list">
            <article>
                <img src="img/5TipsforWalkingYourDoginSF.jpeg" alt="5 Tips for Walking Your Dog in SF">
                <h3>5 Tips for Walking Your Dog in San Francisco</h3>
                <p>Learn the best practices for keeping your dog safe and happy during walks.</p>
                <a href="#" class="button">Read More</a>
            </article>
            <article>
                <img src="img/HowtoIntroduceaNewPettoYourHome.jpeg" alt="How to Introduce a New Pet to Your Home">
                <h3>How to Introduce a New Pet to Your Home</h3>
                <p>Step-by-step guide for a smooth transition for your furry friend.</p>
                <a href="#" class="button">Read More</a>
            </article>
            <article>
                <img src="img/TheBestDogParksinSF.jpeg" alt="The Best Dog Parks in SF">
                <h3>The Best Dog Parks in San Francisco</h3>
                <p>Explore top-rated dog parks where your pup can play and socialize.</p>
                <a href="#" class="button">Read More</a>
            </article>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Have questions? Feel free to reach out to us!</p>
        <form id="contactForm" action="/api/contact" method="post">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" class="button">Send Message</button>
        </form>
		<div id="map"></div>
        <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvVl_fvPN4MgXVXn8BdtIFfR4lHS0cAtc&callback=initMap&libraries=marker"
            async
            defer>
        </script>
        <script>
            function initMap() {
                const location = { lat: 37.78825, lng: -122.41031 }; // Coordinates for 780 Post St, SF
    
                // Create the map
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: location,
                    zoom: 12,
                    mapId: "your_map_id_here", // Replace with a valid Map ID
                });
    
                // Add AdvancedMarkerElement
                const marker = new google.maps.marker.AdvancedMarkerElement({
                    position: location,
                    map: map,
                    title: "Golden Gate Pawz",
                });
    
                // Add a 10-mile radius circle
                const circle = new google.maps.Circle({
                    map: map,
                    center: location,
                    radius: 16093.4, // 10 miles in meters
                    fillColor: "#F8B400",
                    fillOpacity: 0.35,
                    strokeColor: "#F58634",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                });
            }
        </script>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Golden Gate Pawz. All rights reserved.</p>
    </footer>

    
</body>
</html>
