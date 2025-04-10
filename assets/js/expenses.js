const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');
let total = 0;

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = form.title.value;
  const amount = parseFloat(form.amount.value);
  const category = form.category.value;
  total += amount;
  localStorage.setItem('totalExpense', total);

  const li = document.createElement('li');
  li.textContent = `${title} - ₹${amount} [${category}]`;
  list.appendChild(li);
});
