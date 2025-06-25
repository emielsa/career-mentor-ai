const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const question = userInput.value;
  appendMessage("You", question, "user-msg");
  userInput.value = "";

  appendMessage("CareerMentor AI", "Typing...", "bot-msg");

  try {
    const response = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: question })
    });
    const data = await response.json();
    updateLastMessage(data.reply || "Sorry, I didn't understand that.");
  } catch (error) {
    updateLastMessage("Error connecting to AI service.");
  }
});

function appendMessage(sender, text, className) {
  const message = document.createElement("p");
  message.className = className;
  message.textContent = `${sender}: ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function updateLastMessage(text) {
  const messages = chatBox.querySelectorAll(".bot-msg");
  if (messages.length) messages[messages.length - 1].textContent = `CareerMentor AI: ${text}`;
}
