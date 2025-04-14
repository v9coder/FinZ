document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('expense-form');
  const list = document.getElementById('expense-list');

  const auth = firebase.auth();
  const db = firebase.firestore();
  let currentUser;

  // Render expenses on the UI
  function renderExpenses(expenses) {
    list.innerHTML = '';
    expenses.forEach((exp) => {
      const li = document.createElement('li');
      li.className = 'flex justify-between p-2 border-b';
      li.innerHTML = `
        ${exp.title} - ₹${exp.amount} [${exp.category}]
        <button onclick="deleteExpense('${exp.id}')" class="text-red-500">Delete</button>
      `;
      list.appendChild(li);
    });
  }

  // Fetch expenses from Firestore
  function fetchExpenses() {
    if (!currentUser) return;

    db.collection('users')
      .doc(currentUser.uid)
      .collection('expenses')
      .orderBy('timestamp', 'desc')
      .get()
      .then(snapshot => {
        const expenses = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        renderExpenses(expenses);
      })
      .catch(err => {
        console.error("Error fetching expenses:", err);
      });
  }

  // Add new expense
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = form.title.value;
    const amount = parseFloat(form.amount.value);
    const category = form.category.value;

    if (!currentUser) return;

    db.collection('users')
      .doc(currentUser.uid)
      .collection('expenses')
      .add({
        title,
        amount,
        category,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        form.reset();
        fetchExpenses();
      })
      .catch(err => {
        console.error("Error adding expense:", err);
      });
  });

  // Delete expense
  window.deleteExpense = function (expenseId) {
    db.collection('users')
      .doc(currentUser.uid)
      .collection('expenses')
      .doc(expenseId)
      .delete()
      .then(() => {
        fetchExpenses();
      })
      .catch(err => {
        console.error("Error deleting expense:", err);
      });
  };

  // Wait for user to be authenticated
  auth.onAuthStateChanged(user => {
    if (user) {
      cauth.onAuthStateChanged(user => {
        if (user) {
          auth.onAuthStateChanged(user => {
            if (user) {
              currentUser = user;
          
              // 👇 Existing function to load expenses into UI
              fetchExpenses();
          
              // 👇 🔥 Insert Firestore chart/table data code here
              db.collection("users")
                .doc(user.uid)
                .collection("expenses")
                .orderBy("timestamp", "desc") // assuming you're using timestamp, not "date"
                .get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    const data = doc.data();
                    console.log(data); // ✅ This is where you can plot data to charts/tables later
                  });
                })
                .catch(err => console.error("Error fetching chart/table data:", err));
            } else {
              window.location.href = "login.html";
            }
          });          
        } else {
          window.location.href = "login.html";
        }
      });
      
    } else {
      window.location.href = "login.html"; // redirect if not logged in
    }
  });
});
