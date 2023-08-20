const places = [
    {
      number: 1,
      title: "Arid Serpentine",
      secondaryTitle: "Ancient Riverbeds of Mars",
      weather: "Dry and Cold",
      temperature: "-80°C",
      description: "Nestled amidst the breathtaking Martian landscape, the 'Arid Serpentine' stands as a testament to the planet's mysterious past. This wonder of the world on Mars unveils a striking spectacle of ancient riverbeds that wind through the parched red terrain, offering a mesmerizing glimpse into the planet's former aqueous history.",
      funFact: "Scientists study the Arid Serpentine for evidence of ancient Martian ecosystems preserved within its sediment layers."
    },
    {
      number: 2,
      title: "Martian Lights",
      secondaryTitle: "Aurora Australis of Mars",
      weather: "Colorful Atmosphere",
      temperature: "Varies by location and season",
      description: "Introducing the 'Martian Lights' - a mesmerizing spectacle and one of the most captivating wonders on the rusty landscape of Mars, nestled within the heart of its southern hemisphere. Much like its Earthly counterpart, the Aurora Australis, this ethereal phenomenon paints the Martian night sky with an enchanting dance of vibrant hues and luminous patterns.",
      funFact: "The Martian Lights are a stunning example of the cosmic interplay between solar winds and planetary atmospheres."
    },
    {
      number: 3,
      title: "Rust Rift",
      secondaryTitle: "Martian Grand Canyon",
      weather: "Cold and Dry",
      temperature: "-80°C",
      description: "Nestled amidst the rugged Martian terrain, the 'Rust Rift' stands as a captivating testament to the captivating geology of the Red Planet. As one of Mars' most extraordinary wonders and a treasured addition to the Martian Grand Canyon, the Rust Rift is a colossal chasm that stretches across the landscape, offering an awe-inspiring glimpse into the planet's ancient history.",
      funFact: "The Rust Rift's terraces reveal layers of sedimentary rock that hint at the planet's evolution over millions of years."
    },
    {
      number: 4,
      title: "Aether Peak",
      secondaryTitle: "Olympus Mons",
      weather: "Extreme Cold",
      temperature: "-100°C",
      description: "Rising proudly against the rust-hued Martian horizon, Aether Peak stands as a testament to the awe-inspiring forces that shape our universe. Nestled on the vast expanse of the Tharsis Plateau, Aether Peak is the local moniker for the grandeur that is Olympus Mons, the mightiest volcano in our solar system and one of Mars' most magnificent wonders.",
      funFact: "Olympus Mons is the tallest volcano in the solar system, reaching heights that dwarf even Earth's tallest mountains."
    },
    {
      number: 5,
      title: "Reddish Pools",
      secondaryTitle: "Methane Lakes",
      weather: "Cold and Methane-Rich",
      temperature: "-90°C",
      description: "Welcome to the enigmatic landscape of Mars, where the Methane Lakes, affectionately known as the 'Reddish Pools,' stand as one of the most captivating wonders of the Martian world. Nestled amidst the rust-colored terrain and beneath the alien sky, these otherworldly lakes offer a mesmerizing sight that beckons explorers and dreamers alike.",
      funFact: "The Reddish Pools get their unique hue from the high concentration of methane in the Martian atmosphere."
    },
    {
      number: 6,
      title: "Crimson Abyss",
      secondaryTitle: "Valles Marineris Chasm",
      weather: "Cold and Dry",
      temperature: "-80°C",
      description: "Welcome to the awe-inspiring wonder of Mars known as the 'Crimson Abyss' in Valles Marineris Chasm. This extraordinary geological formation stands as a testament to the grandeur of the Red Planet's landscapes.",
      funFact: "Valles Marineris is one of the largest canyons in the solar system, dwarfing even the Grand Canyon on Earth."
    }
  ];

const destinationId = localStorage.getItem("destination-id");
const selectedPlace = places[destinationId - 1];

const locationTitle = document.getElementById("location-title");
const weatherTitle = document.getElementById("weather-title");
const weather = document.getElementById("weather");
const sunnyIcon = document.getElementById("sunny-icon");
const temperature = document.getElementById("temperature");
const planetName = document.getElementById("planet-name");
const locationDescription = document.getElementById("location-description");
const locationFunFact = document.getElementById("location-fun-fact");
const locationPic = document.getElementById("location-pic");
const backButton = document.querySelector(".back-button-container");

locationTitle.textContent = selectedPlace.title;
weatherTitle.textContent = "Weather";
weather.textContent = selectedPlace.weather;
temperature.innerHTML = selectedPlace.temperature;
planetName.textContent = "Mars";
locationDescription.textContent = selectedPlace.description;
locationFunFact.textContent = selectedPlace.funFact;
locationPic.setAttribute("src", "./assets-src/" + destinationId + ".svg");

backButton.addEventListener("click", () =>{
    window.location.replace("./cosmic-hotspots.html");
});
