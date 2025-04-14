document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('expense-form');
  const list = document.getElementById('expense-list');
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  function renderExpenses() {
    list.innerHTML = '';
    expenses.forEach((exp, index) => {
      const li = document.createElement('li');
      li.className = 'flex justify-between items-center p-2 border-b';
      li.innerHTML = `
        <div>
          <p class="font-semibold">${exp.title} - ₹${exp.amount}</p>
          <p class="text-sm text-gray-500">${exp.category} | ${exp.date || 'No Date'}</p>
          ${exp.notes ? `<p class="text-xs text-gray-400">${exp.notes}</p>` : ''}
        </div>
        <button onclick="deleteExpense(${index})" class="text-red-500 hover:underline">Delete</button>
      `;
      list.appendChild(li);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = form.title.value.trim();
    const amount = parseFloat(form.amount.value);
    const category = form.category.value;
    const notes = form.notes.value.trim();
    const date = form['expense-date'].value;

    if (!title || isNaN(amount) || !category || !date) {
      alert('Please fill in all required fields.');
      return;
    }

    const newExpense = { title, amount, category, notes, date };
    expenses.push(newExpense);
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
