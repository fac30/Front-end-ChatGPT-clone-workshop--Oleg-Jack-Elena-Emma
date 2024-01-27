let apiKey = ""; 
const endpoint = 'https://api.openai.com/v1/chat/completions'; 

function sendToOpenAI(userInput) {
  // Ensure apiKey is not empty
  if (!apiKey) {
    console.error('API key is not set.');
    alert('set API key first!');
    document.getElementById('user-text-placeholder').innerText = '';
    return;
  }

function saveApi(event) {
    event.preventDefault();
    // we'll add stuff to hide the input area later?
    apiKey = document.getElementById("apiKey").value;   
}

document.getElementById("apiSubmit").addEventListener("click", saveApi);

// currently have no idea what the stuff below does
  // API URL
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  // Data to be sent in the request body
  const data = {
    model: 'gpt-3.5-turbo', // Specify the model here
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: userInput,
      },
    ],
  };

  // Fetch options
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  };

  // Send request to OpenAI API
  fetch(apiUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Process the response here
      // For example, display the response in the HTML
      document.getElementById(
        'response-placeholder'
      ).innerText = `chat-GPT: ${data.choices[0].message.content}`;
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
}

document.getElementById('button').onclick = function () {
  let text = document.getElementById('chatGPT').value;
  document.getElementById('user-text-placeholder').innerText = `user: ${text}`;
  sendToOpenAI(text);
};

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('apiform').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the default form submission action

    apiKey = document.getElementById('apiKey').value;
    document.getElementById('apiKey').value = 'Got the key!';

    console.log(apiKey);
  });
});