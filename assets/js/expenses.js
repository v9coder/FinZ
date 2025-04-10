document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('expense-form');
    const list = document.getElementById('expense-list');
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
    function renderExpenses() {
      list.innerHTML = '';
      expenses.forEach((exp, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between p-2 border-b';
        li.innerHTML = `${exp.title} - ₹${exp.amount} [${exp.category}]
          <button onclick="deleteExpense(${index})" class="text-red-500">Delete</button>`;
        list.appendChild(li);
      });
    }
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const title = form.title.value;
      const amount = parseFloat(form.amount.value);
      const category = form.category.value;
  
      expenses.push({ title, amount, category });
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderExpenses();
      form.reset();
    });
  
    window.deleteExpense = function (index) {
      expenses.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderExpenses();
    };
  
    renderExpenses();
  });
  