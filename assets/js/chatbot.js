async function askChatbot(question) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_OPENAI_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
      })
    });
  
    const data = await response.json();
    document.getElementById('chat-output').innerText = 
      data.choices[0].message.content;
  }
  