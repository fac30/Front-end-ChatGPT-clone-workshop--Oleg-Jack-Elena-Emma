const apiKey = saveApi(); 
const endpoint = 'https://api.openai.com/v1/chat/completions'; 

const prompt = 'we need a function to link the data?';

function saveApi() {
    console.log("save api");
    // we'll add stuff to hide the input area later?
    // console.log(document.getElementById("apiKey"));
    let newApi = document.getElementById("apiKey").value;
    console.log(newApi)
    return newApi;
}

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
