const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userMsg = input.value.trim();
  if (!userMsg) return;

  addMessage("You", userMsg, "right");
  input.value = "";

  // Simulated bot response
  setTimeout(() => {
    const botMsg = getBotResponse(userMsg);
    addMessage("GenZ Bot", botMsg, "left");
  }, 500);
});

function addMessage(sender, message, side) {
  const msgEl = document.createElement("div");
  msgEl.className = `max-w-xs p-2 rounded-lg ${side === "right" ? "bg-blue-100 self-end ml-auto" : "bg-gray-100 self-start"} text-gray-800 my-1`;
  msgEl.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("save")) {
    return `💸 Saving hack: Try the 50/30/20 rule or automate savings using apps like <a href="https://www.etmoney.com/" target="_blank" class="text-blue-500 underline">ET Money</a>. Your future self will thank you! 🫶`;
  }

  if (msg.includes("budget")) {
    return `📊 Budgeting is a vibe! Use tools like <a href="https://goodbudget.com/" target="_blank" class="text-blue-500 underline">Goodbudget</a> or just stick to the classic 50/30/20 split. Wanna track daily? Try Notion templates or Excel! 💻`;
  }

  if (msg.includes("invest")) {
    return `🚀 Time to make your money work! Start small with SIPs on <a href="https://groww.in" target="_blank" class="text-blue-500 underline">Groww</a> or <a href="https://zerodha.com/" target="_blank" class="text-blue-500 underline">Zerodha</a>. Also, binge this 📺 <a href="https://www.youtube.com/watch?v=VrU6YJle6Q4" target="_blank" class="text-blue-500 underline">Investing 101</a>!`;
  }

  if (msg.includes("loan")) {
    return `⚠️ Loans = commitment. Before you take one, check interest rates on <a href="https://www.bankbazaar.com/personal-loan.html" target="_blank" class="text-blue-500 underline">BankBazaar</a>. Borrow smart, boss!`;
  }

  if (msg.includes("credit")) {
    return `💳 Credit cards? Powerful but tricky! Always pay full dues to avoid charges. Here's a quick read: <a href="https://www.investopedia.com/terms/c/creditcard.asp" target="_blank" class="text-blue-500 underline">How Credit Cards Work</a>.`;
  }

  return `🤔 Hmm... that's deep. Lemme research it and get back to you! Meanwhile, you can check <a href="https://www.finology.in/academy" target="_blank" class="text-blue-500 underline">Finology Academy</a> for financial gyaan.`;
}
