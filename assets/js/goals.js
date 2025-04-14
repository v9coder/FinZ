document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('goal-form');
  const list = document.getElementById('goal-list');
  const savingsInput = document.getElementById('savings-input');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  let goals = JSON.parse(localStorage.getItem('goals')) || [];

  function renderGoals() {
    list.innerHTML = '';
    goals.forEach((goal, index) => {
      const li = document.createElement('li');
      li.className = 'flex justify-between p-2 border-b';
      li.innerHTML = `${goal.title} - Target: ₹${goal.amount}
        <button onclick="deleteGoal(${index})" class="text-red-500">Delete</button>`;
      list.appendChild(li);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = form['goal-title'].value;
    const amount = parseFloat(form['goal-amount'].value);
    goals.push({ title, amount });
    localStorage.setItem('goals', JSON.stringify(goals));
    renderGoals();
    form.reset();
  });

  window.deleteGoal = function (index) {
    goals.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(goals));
    renderGoals();
  };

  savingsInput.addEventListener('input', function () {
      const savings = parseFloat(savingsInput.value) || 0;

      goals.forEach(goal => {
          const goalAmount = goal.amount;
          const progress = (savings / goalAmount) * 100;
          
          // Ensure progress is between 0 and 100
          const clampedProgress = Math.min(Math.max(progress, 0), 100);
          progressBar.style.width = `${clampedProgress}%`;
          progressText.textContent = `You are ${Math.round(clampedProgress)}% towards your goal.`;
      });
  });

  renderGoals();
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('goal-form');
  const list = document.getElementById('goal-list');
  const savingsInput = document.getElementById('savings-input');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  let goals = JSON.parse(localStorage.getItem('goals')) || [];

  function renderGoals() {
    list.innerHTML = '';
    goals.forEach((goal, index) => {
      const li = document.createElement('li');
      li.className = 'flex justify-between p-2 border-b';
      li.innerHTML = `${goal.title} - Target: ₹${goal.amount}
        <button onclick="deleteGoal(${index})" class="text-red-500">Delete</button>`;
      list.appendChild(li);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = form['goal-title'].value;
    const amount = parseFloat(form['goal-amount'].value);
    goals.push({ title, amount });
    localStorage.setItem('goals', JSON.stringify(goals));
    renderGoals();
    form.reset();
  });

  window.deleteGoal = function (index) {
    goals.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(goals));
    renderGoals();
  };

  savingsInput.addEventListener('input', function () {
      const savings = parseFloat(savingsInput.value) || 0;

      goals.forEach(goal => {
          const goalAmount = goal.amount;
          const progress = (savings / goalAmount) * 100;
          
          // Ensure progress is between 0 and 100
          const clampedProgress = Math.min(Math.max(progress, 0), 100);
          progressBar.style.width = `${clampedProgress}%`;
          progressText.textContent = `You are ${Math.round(clampedProgress)}% towards your goal.`;
      });
  });

  renderGoals();
});
