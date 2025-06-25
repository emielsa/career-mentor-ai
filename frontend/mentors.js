const mentors = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "AI Lead @ TCS",
    domain: "AI",
    level: "Senior",
    skills: ["AI", "ML", "Career Advice"],
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 2,
    name: "Ravi Mehta",
    role: "Full Stack Dev @ Zoho",
    domain: "Web Development",
    level: "Mid",
    skills: ["JavaScript", "Spring", "React"],
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    id: 3,
    name: "Sneha Desai",
    role: "UX Designer @ Zomato",
    domain: "UI/UX",
    level: "Mid",
    skills: ["Figma", "Wireframing"],
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Rahul Singh",
    role: "Data Scientist @ Paytm",
    domain: "Data Science",
    level: "Senior",
    skills: ["Data Science", "Python", "SQL"],
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "AI Researcher @ Google",
    domain: "AI",
    level: "Entry",
    skills: ["AI", "NLP"],
    image: "https://randomuser.me/api/portraits/women/56.jpg"
  }
];

const mentorContainer = document.getElementById("mentorCards");
const domainFilter = document.getElementById("domainFilter");
const experienceFilter = document.getElementById("experienceFilter");

function renderMentors(data) {
  mentorContainer.innerHTML = "";
  data.forEach(mentor => {
    const card = document.createElement("div");
    card.className = "mentor-card";
    card.innerHTML = `
      <img src="${mentor.image}" alt="${mentor.name}" />
      <h3>${mentor.name}</h3>
      <p>${mentor.role}</p>
      <div class="tags">
        ${mentor.skills.map(skill => `<span>${skill}</span>`).join("")}
      </div>
      <button onclick="location.href='mentor-details.html?id=${mentor.id}'">Book Session</button>
    `;
    mentorContainer.appendChild(card);
  });
}

function applyFilters() {
  const domain = domainFilter.value;
  const level = experienceFilter.value;

  const filtered = mentors.filter(m =>
    (domain === "" || m.domain === domain) &&
    (level === "" || m.level === level)
  );

  renderMentors(filtered);
}

domainFilter.addEventListener("change", applyFilters);
experienceFilter.addEventListener("change", applyFilters);

// Initial render
renderMentors(mentors);
