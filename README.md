
<img width="1000" alt="Screenshot 2024-01-28 at 17 17 24" src="https://github.com/fac30/Front-end-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma/assets/113034133/4d8fb23f-d128-4eb4-b661-fc9cfcd55ea7">

<br><br>

**[link to the source code](https://github.com/fac30/Front-end-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma/blob/main/olegs_index.html)**

<br>

## Front-end ChatGpt clone for FAC unschool workshop

### User stories

1. **Capture Form Data and Display on Page**: As a front-end developer, I want to start by writing a JavaScript function that captures the text from the textarea and displays it in a designated section on my web page when I press the submit button, using an **`onclick`** event handler and DOM manipulation methods like **`document.getElementById`** and **`textContent`**.
2. **API Key Entry**: As a front-end developer, I want to create a secure input field for entering my API key and storing it in a local variable, which I understand will only be for the learning process and not for a production environment.
3. **Store API Key Temporarily**: As a front-end developer, I want to temporarily store my entered API key in a JavaScript variable upon form submission and then remove the input field from the UI for subsequent chats.
4. **Send API Requests**: As a front-end developer, I want to write a JavaScript function that sends the captured text to the OpenAI API, using the **`https://api.openai.com/v1/chat/completions`** endpoint with the API key in the header, and to get a response, using **`fetch()`** and **`.then()`** (and probably not using `async`/`await`, unless you are confident using it).
5. **Handle API Responses**: As a front-end developer, I want to take the response from the OpenAI API and display it in the designated section, using methods like **`JSON.parse()`** and `**JSON.stringify**` and updating the DOM to display the response.
6. **Enhance User Interaction**: As a front-end developer, I want to add CSS to make the interaction with my bot more visually appealing.

### Stretch stories

1. **Send Chat History with API Requests**: As a front-end developer, I want to include the chat history in each API request to OpenAI. This will involve appending previous chat messages and responses to the request payload, ensuring the AI can contextualise new messages based on the ongoing conversation.
2. **Create a separate config file for Environment Variables**: As a front-end developer, I aim to create my own config file for storing sensitive information like the OpenAI API key and exclude it from GitHub using a `.gitignore` file. I plan to manually load these variables at the start of my application, understanding this approach doesn't offer real security in a front-end only environment but is valuable for learning about environment variables.
