document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const expenseData = JSON.parse(localStorage.getItem('expenses')) || [];
  
    const categories = ['Food', 'Transport', 'Shopping'];
    const categoryTotals = categories.map(cat => {
      return expenseData
        .filter(exp => exp.category === cat)
        .reduce((sum, exp) => sum + exp.amount, 0);
    });
  
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [{
          data: categoryTotals,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
      },
    });
  });
  