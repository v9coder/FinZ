document.addEventListener('DOMContentLoaded', () => {
    const totalExpense = localStorage.getItem('totalExpense') || 0;
    document.getElementById('total-expense').textContent = totalExpense;
  });
  