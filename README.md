# StoryboardAI: AI Art Generator

## Overview
The **StoryboardAI** is a simple React application that allows users to generate AI-generated images from text prompts. It utilizes OpenAI's DALL·E model to create unique artwork based on user input.

## Features
- User submits a text prompt.
- Calls OpenAI's API to generate an image.
- Displays the generated image on the page.
- Handles loading states and API errors.

## Technologies Used
- React (Frontend Framework)
- OpenAI's DALL·E API
- JavaScript (ES6+)
- HTML & CSS

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/dtlaoye/StoryboardAI.git
cd StoryboardAI
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
REACT_APP_OPENAI_API_KEY=your-openai-api-key
```
**Note:** Do not expose your API key in the frontend for production use.

### 4. Run the Application
```sh
npm start
```
The app will be available at `http://localhost:3000/`.

## Usage
1. Enter a story prompt in the input field.
2. Click the "Generate Image" button.
3. The AI-generated image will be displayed below the button.

## API Reference
The application makes a `POST` request to OpenAI’s DALL·E API:
```sh
POST https://api.openai.com/v1/images/generations
```
Request body:
```json
{
  "model": "dall-e-2",
  "prompt": "Your input prompt here",
  "n": 1,
  "size": "1024x1024"
}
```

## Troubleshooting
### Common Issues:
- **401 Unauthorized Error:** Ensure the API key is correct and has access to DALL·E.
- **CORS Issues:** OpenAI may restrict frontend API calls; consider using a backend proxy.
- **No Image Generated:** The prompt may be too vague. Try a more descriptive prompt.


## License
This project is licensed under the MIT License.

## Author
Developed by David Olaoye.

