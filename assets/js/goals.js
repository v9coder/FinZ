function saveGoal() {
    const name = document.getElementById('goalName').value;
    const amount = document.getElementById('goalAmount').value;
    document.getElementById('goal-output').innerText = 
      `Goal: ${name}, Target: ₹${amount}`;
  }
  