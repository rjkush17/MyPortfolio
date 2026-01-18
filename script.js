// Hamburger Menu
const hamburger = document.querySelector(".hamburgur");
const nav = document.querySelector("nav");
const bars = document.querySelector("#bars");
const cross = document.querySelector("#cross");
const navLinks = document.querySelectorAll("nav ul li a");


function toggleMenu() {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    bars.style.display = "none";
    cross.style.display = "block";
  } else {
    bars.style.display = "block";
    cross.style.display = "none";
  }
}

if (hamburger) {
  hamburger.addEventListener("click", toggleMenu);
}

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// Scroll Effect for Navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Projects Generation
const projectsUrl = "./projectData.json";

async function fetchProjects() {
  try {
    const res = await fetch(projectsUrl);
    const data = await res.json();
    generateProjects(data.projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

function generateProjects(projects) {
  const projectContainer = document.querySelector(".project-body");
  if (!projectContainer) return;

  const projectHTML = projects.map(project => {
    return `
      <div class="project-card" data-aos="fade-up">
        <div class="project-img-wrapper">
          <img src="./img/projectIMG/${project.img}" alt="${project.name}" loading="lazy">
        </div>
        <div class="project-content">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div style="display: flex; gap: 1rem;">
             <a href="${project.link}" target="_blank" class="project-link">
               Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
             </a>
             ${project.code ? `
               <a href="${project.code}" target="_blank" class="project-link" style="color: var(--text-muted)">
                 Code <i class="fa-brands fa-github"></i>
               </a>
             ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  projectContainer.innerHTML = projectHTML;
}

fetchProjects();

// Theme Toggle
const themeToggle = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");

function updateThemeIcon(isDark) {
  if (isDark) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none"; // In dark mode, we typically show the SUN icon to switch to light, or vice versa? 
    // Let's stick to standard: Sun shows in Dark mode (to switch to light), Moon shows in Light mode (to switch to dark).
    // Wait, usually: Light Mode -> Show Moon. Dark Mode -> Show Sun.
    // Let's check my logic.
    // If Dark Mode is active: Body has .dark-mode.
    // Sun icon should be visible (to toggle light). Moon hidden.
  } else {
    // Light Mode
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

// Check Local Storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  updateThemeIcon(true);
} else {
  updateThemeIcon(false);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    updateThemeIcon(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});