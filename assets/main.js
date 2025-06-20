// Toggle dark mode functionality
const toggleInput = document.getElementById("theme-toggle");

toggleInput.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleInput.checked = true;
  }
});

// Popup functionality
const popupOverlay = document.getElementById("popupOverlay");
const popup = document.getElementById("projectPopup");
const closePopup = document.getElementById("closePopup");

const popupData = {
  counter: {
    title: "JS Counter",
    description: "<p>This project is a <strong>simple interactive web counter</strong> developed entirely with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>vanilla JavaScript</strong>, without relying on any external frameworks or libraries. The goal was to create a lightweight and accessible tool that demonstrates fundamental front-end development skills.</p><p>The user can interact with the counter by clicking the <strong>“+1”</strong> and <strong>“-1”</strong> buttons to increase or decrease the value, as well as reset it to its initial state. This project allowed me to focus on core JavaScript logic, DOM manipulation, and styling with clean, maintainable code.</p>",
    video: "assets/videos/counter.mp4",
    live: "https://counter-noemimolino.netlify.app/",
    git: "https://github.com/noemolino/counter"
  },
  api: {
    title: "Owly - API Project",
    description: "<p>This project is a <strong>book discovery tool</strong> that consumes a <strong>public API</strong> to display dynamic content based on user interaction. Designed as a lightweight and accessible web app, it allows users—especially students and curious readers—to quickly explore books by genre through a clean and intuitive interface.</p><p>The main objective was to provide a smooth browsing experience: available titles are listed clearly within each category, and detailed descriptions are revealed <strong>only on demand</strong>, preserving the visual clarity of the interface. This approach emphasizes usability and readability while ensuring the app remains responsive and user-friendly.</p><p>Technologically, the app leverages <strong>vanilla JavaScript</strong> to manage core logic and user interactions, while <strong>Axios</strong> handles API requests efficiently. <strong>Lodash</strong> is used to safely and cleanly manipulate API data. The interface is built and styled with <strong>HTML</strong> and <strong>CSS</strong>, and the project is organized using <strong>Webpack</strong>, which optimizes asset bundling and improves maintainability.</p>",
    video: "assets/videos/owly.mp4",
    live: "https://owly-noemimolino.netlify.app/",
    git: "https://github.com/noemolino/owly"
  }
};

// Open popup
document.querySelectorAll(".btn-show-popup").forEach(button => {
  button.addEventListener("click", () => {
    const projectKey = button.dataset.project;
    const data = popupData[projectKey];

    document.getElementById("popupTitle").textContent = data.title;
    document.getElementById("popupDescription").innerHTML = data.description;
    document.getElementById("popupVideo").src = data.video;
    document.getElementById("popupLive").href = data.live;
    document.getElementById("popupGit").href = data.git;

    popupOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// Close popup
closePopup.addEventListener("click", closePopupModal);
popupOverlay.addEventListener("click", e => {
  if (e.target === popupOverlay) closePopupModal();
});

function closePopupModal() {
  popupOverlay.style.display = "none";
  document.body.style.overflow = "";
  document.getElementById("popupVideo").pause();
}
