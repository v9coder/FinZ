document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('expenseChart').getContext('2d');
  const expenseData = JSON.parse(localStorage.getItem('expenses')) || [];

  // Group expenses by category
  const categoryMap = {};

  expenseData.forEach(exp => {
    if (categoryMap[exp.category]) {
      categoryMap[exp.category] += exp.amount;
    } else {
      categoryMap[exp.category] = exp.amount;
    }
  });

  // Extract labels and data
  const categories = Object.keys(categoryMap);
  const categoryTotals = Object.values(categoryMap);

  // Generate random pastel colors for each category
  const backgroundColors = categories.map(() => {
    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
  });

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: categories,
      datasets: [{
        data: categoryTotals,
        backgroundColor: backgroundColors,
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});
