document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('goal-form');
    const list = document.getElementById('goal-list');
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
  
    renderGoals();
  });
  