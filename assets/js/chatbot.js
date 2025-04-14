const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userMsg = input.value.trim();
  if (!userMsg) return;

  addMessage("You", userMsg, "right");
  input.value = "";

  // Fake bot reply (replace with real API later)
  setTimeout(() => {
    const botMsg = getBotResponse(userMsg);
    addMessage("GenZ Bot", botMsg, "left");
  }, 500);
});

function addMessage(sender, message, side) {
  const msgEl = document.createElement("div");
  msgEl.className = `max-w-xs p-2 rounded-lg ${side === "right" ? "bg-blue-100 self-end ml-auto" : "bg-gray-100 self-start"} text-gray-800`;
  msgEl.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("save")) return "Start by setting aside 20% of your income every month!";
  if (msg.includes("budget")) return "Track your income and split it using the 50/30/20 rule.";
  if (msg.includes("invest")) return "Consider starting with mutual funds or SIPs!";
  return "That's a great question! Let me get back to you on that. 😊";
}
