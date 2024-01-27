let apiKey = ""; 
const endpoint = 'https://api.openai.com/v1/chat/completions'; 

const prompt = 'we need a function to link the data?';

function saveApi(event) {
    event.preventDefault();
    // we'll add stuff to hide the input area later?
    apiKey = document.getElementById("apiKey").value;   
}

document.getElementById("apiSubmit").addEventListener("click", saveApi);

// currently have no idea what the stuff below does

// const data = {
//   prompt: prompt,
//   max_tokens: 150  // You can adjust this parameter based on your requirements
// };

// fetch(endpoint, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(result => {
//     console.log(result.choices[0].text);  // The generated response from GPT
//   })
//   .catch(error => console.error('Error:', error));
