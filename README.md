# Outlook Link Interceptor Extension (with Gemini AI Integration)
<img width="1536" height="1024" alt="ChatGPT Image 31 Tem 2025 16_12_39" src="https://github.com/user-attachments/assets/2db1f5c5-e334-4f25-9b36-6ed3296fcfdd" />

This is a custom Outlook Add-in developed using Node.js. Its main purpose is to intercept and analyze all clickable links inside incoming emails. 

###  Key Features

- ✅ Intercepts all hyperlinks in incoming Outlook emails
- ✅ Displays a popup window before redirecting to the target URL
- ✅ Shows link preview, domain info, and potential risk status
- ✅ Integrated with **Google Gemini AI API** to analyze the safety and content of the URL
- ✅ Lightweight and easy to install as a side-loaded add-in (not published to the marketplace)

###  Gemini AI Integration

The add-in uses **Gemini API** to evaluate the intent and potential risks of the link content. This helps users avoid phishing or malicious websites.

###  Technologies Used

- Node.js (Express backend)
- Google Generative AI (Gemini API)
- Outlook JavaScript API (Office.js)
- Webpack (build)
- HTML / CSS / JavaScript (frontend)

### ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/semihzen/outlook-link-interceptor.git
   cd outlook-link-interceptor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your Gemini API key in a `.env` file:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the server:
   ```bash
   npm run start
   ```

5. Side-load the `manifest.xml` in Outlook for testing.

  
