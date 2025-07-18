# 🚀 Gemini AI Clone (MERN Stack + Google Gemini API)

<img width="1903" height="857" alt="Image" src="https://github.com/user-attachments/assets/e81317a9-e2e0-4b0e-9881-37b0ec783927" />

A fully functional **Gemini AI Clone** built using the **MERN Stack** and integrated with **Google's Gemini API**. This app supports chatting with AI using **text**, **images**, and even **PDFs**, with a clean Gemini-inspired interface.

---

## ✨ Features

- 🧠 **Chat with Google Gemini** (via Gemini Pro / Vision API)
- 🖼️ **Image Upload** – Ask questions about uploaded images
- 📄 **PDF Upload** – Interact with documents intelligently
- 💬 **Threaded Chat UI** – Gemini-style chat layout
- 🔐 **User Authentication** – Secure login (JWT or Clerk optional)
- 📦 **MongoDB Integration** – Persistent chat history (optional)
- ⚡ **Fast & Responsive** – Built with React + Tailwind

---

## 🛠️ Tech Stack

| Technology      | Usage                          |
|-----------------|---------------------------------|
| **MongoDB**     | Database for chat & users       |
| **Express.js**  | Backend REST API                |
| **React.js**    | Frontend UI                     |
| **Node.js**     | Server-side runtime             |
| **Google Gemini API** | AI Model (text + vision)  |
| **Cloudinary** *(optional)* | Image upload storage |
| **Tailwind CSS**| Styling                         |

---

## 📁 Folder Structure
```
gemini-clone/
├── client/                  # React frontend
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # App pages like Home, Chat, etc.
│       └── App.jsx          # Main React App entry
├── server/                  # Node.js + Express backend
│   ├── controllers/         # Gemini controller logic
│   ├── routes/              # API route definitions
│   ├── models/              # Mongoose schemas
│   ├── middleware/          # Custom middleware (auth, error handlers)
│   └── server.js            # Entry point for Express server
├── .env                     # Environment variables (e.g., GEMINI_API_KEY)
└── README.md   
```
# Project documentation

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
VITE_API_BASE_URL=http://localhost:5000

```

## Clone the Repository
git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone
## Start the Backend
```
cd server
npm install
npm run dev
```

##  Start the Frontend
```
cd client
npm install
npm run dev
```

## 💡 Gemini API Example (Node.js)
```// server/controllers/geminiController.js
import axios from "axios";

export const chatWithGemini = async (req, res) => {
  const { prompt, imageBase64 } = req.body;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        contents: [
          {
            parts: imageBase64
              ? [{ inline_data: { mime_type: "image/jpeg", data: imageBase64 } }, { text: prompt }]
              : [{ text: prompt }],
          },
        ],
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Gemini API Error", message: error.message });
  }
}; ```

## 🧡 Built By
[bonguchandu] — Inspired by Google Gemini & OpenAI ChatGPT
Let’s build something amazing 🚀


