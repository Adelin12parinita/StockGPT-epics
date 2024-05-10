// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');


// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Welcome to our stock market prediction platform! How can I assist you today? 📈",
      "I'm sorry, I couldn't comprehend your query. Could you please provide more details? 🤔",
      "Our platform is designed to offer accurate insights for informed investment decisions. How may I help you utilize our services effectively? 💼",
      "I'm sorry, I'm not equipped to provide real-time market updates. However, I can assist you with various tools and resources available on our platform. 📊",
      "Feel free to ask me anything related to stock market predictions. I'm here to provide you with valuable information. 💡",
      "I'm sorry, I can't provide personal financial advice. However, I can offer guidance on using our prediction tools effectively. How can I assist you today? 💬",
      "Exploring our platform for stock market predictions? I'm here to guide you through the process. What would you like to know? 🚀",
      "I'm here to assist you in making informed investment decisions using our predictive analytics. How can I help you today? 💡",
      "Is there a specific stock or market trend you're interested in? Let me know how I can assist you further. 📈",
      "Our platform offers a range of predictive tools and analysis to help you navigate the stock market. How can I assist you in maximizing your investment potential? 💰",
      "I'm here to provide support and assistance with utilizing our stock prediction services. How can I assist you today? 📊",
      "Considering investment opportunities? I'm here to provide insights and guidance to optimize your trading strategies. What do you need assistance with? 💬",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  //tab switch

  window.onblur = function (tabs) { 
alert('trying to switch tabs eh !'); 
  };
  
  