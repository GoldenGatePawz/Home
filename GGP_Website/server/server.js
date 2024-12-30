document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  // Toggle the menu visibility
  hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
  });

  // Optional: Close the menu when a menu item is clicked
  menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
          menu.classList.remove("active");
      });
  });
});

// Submit Schedule Form
document.getElementById("scheduleForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
      name: document.getElementById("name").value,
      petname: document.getElementById("petname").value,
      animal: document.getElementById("animal").value,
      breed: document.getElementById("breed").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      meetplace: document.getElementById("meetplace").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
  };

  try {
      const response = await fetch("/api/schedule", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          alert("Schedule request sent successfully!");
      } else {
          alert("Error sending schedule request.");
      }
  } catch (error) {
      console.error("Error:", error);
  }
});

// Submit Contact Form
// Extracted from various HTML files

// Schedule Form Submission
document.getElementById("scheduleForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Scheduling functionality is under development.");
});

// Profile Form Submission
document.getElementById("profileForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Profile creation functionality is under development.");
});

// Role Selection Toggle for Pet Details
document.getElementById("role")?.addEventListener("change", () => {
  const petDetails = document.getElementById("petDetails");
  if (document.getElementById("role").value === "client") {
      petDetails.style.display = "block";
  } else {
      petDetails.style.display = "none";
  }
});

// Initialize Google Map
function initMap() {
  const location = { lat: 37.78825, lng: -122.41031 }; // Coordinates for 780 Post St, SF
  const map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 12,
      mapId: "your_map_id_here",
  });

  // Add marker
  new google.maps.Marker({
      position: location,
      map,
      title: "Golden Gate Pawz",
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  
  });

  // Optional: Close the menu when a menu item is clicked
  menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
          menu.classList.remove("active");
      });
  });

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
  menu.classList.toggle("active");
});

const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// PostgreSQL Connection
const pool = new Pool({
    user: "your_db_user",
    host: "localhost",
    database: "golden_gate_pawz",
    password: "your_db_password",
    port: 5432,
});

// Middleware
app.use(bodyParser.json());

// Register User
app.post("/api/register", async (req, res) => {
    const { name, email, password, role, phone, address } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const query = `
            INSERT INTO users (name, email, password, role, phone, address)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id;
        `;
        const values = [name, email, hashedPassword, role, phone, address];
        const result = await pool.query(query, values);

        res.status(201).json({ userId: result.rows[0].id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Registration failed." });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});