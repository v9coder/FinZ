document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('chat-form');
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
  
    const responses = {
      saving: "Start by saving 20% of your income each month. Automate it!",
      budget: "Use the 50/30/20 rule: Needs/Wants/Savings.",
      invest: "Consider mutual funds, SIPs, and low-cost index funds to begin.",
      credit: "Always pay your credit card bills in full to avoid interest.",
      default: "I recommend checking out YouTube channels like 'CA Rachana' or 'Invest Aaj For Kal' for Indian finance tips!"
    };
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = input.value.trim();
      if (!msg) return;
  
      addMessage("You", msg);
  
      let reply = Object.entries(responses).find(([keyword]) =>
        msg.toLowerCase().includes(keyword)
      );
      reply = reply ? reply[1] : responses.default;
  
      setTimeout(() => addMessage("Advisor Bot", reply), 600);
      input.value = "";
    });
  
    function addMessage(sender, text) {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${sender}:</strong> ${text}`;
      p.className = 'mb-2';
      chatBox.appendChild(p);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
  